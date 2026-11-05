/**
 * Hairline Core Engine (TypeScript adapt of @lucasmarkes/hairline kernel)
 * Provides isometric camera projection, rounded prism solids, springs, and pointer interactions.
 */

export interface Camera {
  az: number;
  k: number;
  S: number;
  ox: number;
  oy: number;
}

export interface RingSample {
  u: number;
  v: number;
  nu: number;
  nv: number;
}

export interface Spring {
  x: number;
  v: number;
  t: number;
  k: number;
  c: number;
  m: number;
  eps: number;
}

export interface SolidElements {
  g: SVGGElement;
  sil: SVGPathElement;
  cr: SVGPathElement;
}

export interface DisposerBag {
  add: (fn: () => void) => void;
  on: (target: EventTarget, type: string, fn: EventListenerOrEventListenerObject, opts?: boolean | AddEventListenerOptions) => void;
  dispose: () => void;
}

export const clamp = (v: number, a: number, b: number): number => Math.max(a, Math.min(b, v));
export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;
export const rad = (d: number): number => (d * Math.PI) / 180;
export const r2 = (n: number): number => Math.round(n * 100) / 100;

export const poly = (pts: number[][]): string =>
  pts.length ? "M" + pts.map((p) => r2(p[0]) + " " + r2(p[1])).join("L") + "Z" : "";

export const seg = (a: number[], b: number[]): string =>
  `M${r2(a[0])} ${r2(a[1])}L${r2(b[0])} ${r2(b[1])}`;

export const open = (pts: number[][]): string =>
  pts.length < 2 ? "" : "M" + pts.map((p) => r2(p[0]) + " " + r2(p[1])).join("L");

export const Cam = (azDeg: number, k: number, S: number): Camera => ({
  az: rad(azDeg),
  k,
  S,
  ox: 0,
  oy: 0
});

export function proj(C: Camera): (x: number, y: number, z: number) => [number, number] {
  const c = Math.cos(C.az),
    s = Math.sin(C.az),
    zf = Math.sqrt(1 - C.k * C.k);
  return (x: number, y: number, z: number): [number, number] => {
    const X = x * c - y * s,
      Y = x * s + y * c;
    return [C.ox + C.S * X, C.oy + C.S * (Y * C.k - z * zf)];
  };
}

export function unproj(C: Camera, sx: number, sy: number, z: number): [number, number] {
  const c = Math.cos(C.az),
    s = Math.sin(C.az),
    zf = Math.sqrt(1 - C.k * C.k);
  const X = (sx - C.ox) / C.S,
    Y = ((sy - C.oy) / C.S + z * zf) / C.k;
  return [X * c + Y * s, -X * s + Y * c];
}

export function fit(C: Camera, pts: number[][], cx: number, cy: number): void {
  C.ox = 0;
  C.oy = 0;
  const P = proj(C);
  let a = 1e9,
    b = -1e9,
    c = 1e9,
    d = -1e9;
  for (const p of pts) {
    const q = P(p[0], p[1], p[2]);
    a = Math.min(a, q[0]);
    b = Math.max(b, q[0]);
    c = Math.min(c, q[1]);
    d = Math.max(d, q[1]);
  }
  C.ox = cx - (a + b) / 2;
  C.oy = cy - (c + d) / 2;
}

export function rrect(u0: number, v0: number, u1: number, v1: number, r: number, n = 4): RingSample[] {
  r = Math.max(0, Math.min(r, (u1 - u0) / 2, (v1 - v0) / 2));
  const out: RingSample[] = [];
  const corners: [number, number, number][] = [
    [u1 - r, v1 - r, 0],
    [u0 + r, v1 - r, 90],
    [u0 + r, v0 + r, 180],
    [u1 - r, v0 + r, 270]
  ];
  for (const [cu, cv, a0] of corners) {
    for (let k = 0; k <= n; k++) {
      const a = rad(a0 + (90 * k) / n),
        ca = Math.cos(a),
        sa = Math.sin(a);
      out.push({ u: cu + r * ca, v: cv + r * sa, nu: ca, nv: sa });
    }
  }
  return out;
}

export function rings(
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  r: number,
  b: number
): [RingSample[], RingSample[]] {
  const outer = rrect(x0, y0, x1, y1, r);
  const inner = rrect(x0 + b, y0 + b, x1 - b, y1 - b, Math.max(0.1, r - b));
  return [outer, inner];
}

export function facing(C: Camera): (sample: RingSample) => boolean {
  const c = Math.cos(C.az),
    s = Math.sin(C.az);
  return (sm: RingSample): boolean => sm.nu * s + sm.nv * c > 0;
}

export function run<T>(ring: T[], keep: (sample: T) => boolean): T[] {
  const n = ring.length;
  let s = 0;
  while (s < n && keep(ring[s])) s++;
  if (s === n) return ring.slice();
  while (s < 2 * n && !keep(ring[s % n])) s++;
  const out: T[] = [];
  while (out.length < n && keep(ring[s % n])) {
    out.push(ring[s % n]);
    s++;
  }
  return out;
}

export function ringAt(
  P: (x: number, y: number, z: number) => [number, number],
  ring: RingSample[],
  z: number
): [number, number][] {
  return ring.map((sm) => P(sm.u, sm.v, z));
}

export function hull(input: [number, number][]): [number, number][] {
  const pts = input.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cross = (o: [number, number], a: [number, number], b: [number, number]) =>
    (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo: [number, number][] = [],
    up: [number, number][] = [];
  for (const p of pts) {
    while (lo.length > 1 && cross(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop();
    lo.push(p);
  }
  for (let i = pts.length - 1; i >= 0; i--) {
    const p = pts[i];
    while (up.length > 1 && cross(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop();
    up.push(p);
  }
  lo.pop();
  up.pop();
  return lo.concat(up);
}

export function prism(
  P: (x: number, y: number, z: number) => [number, number],
  front: (sm: RingSample) => boolean,
  outer: RingSample[],
  inner: RingSample[],
  z0: number,
  z1: number
): { sil: string; crease: string } {
  const pts0 = ringAt(P, outer, z0);
  const pts1 = ringAt(P, outer, z1);
  const sil = poly(hull(pts0.concat(pts1)));
  const crease = open(ringAt(P, run(inner, front), z1));
  return { sil, crease };
}

export function solid(parent: SVGElement): SolidElements {
  const doc = parent.ownerDocument;
  const g = doc.createElementNS("http://www.w3.org/2000/svg", "g");
  const sil = doc.createElementNS("http://www.w3.org/2000/svg", "path");
  sil.setAttribute("class", "sil");
  const cr = doc.createElementNS("http://www.w3.org/2000/svg", "path");
  cr.setAttribute("class", "lo");
  g.appendChild(sil);
  g.appendChild(cr);
  parent.appendChild(g);
  return { g, sil, cr };
}

export function put(el: SolidElements, paths: { sil: string; crease: string }): void {
  el.sil.setAttribute("d", paths.sil);
  el.cr.setAttribute("d", paths.crease);
}

export function mk(tag: string, attrs: Record<string, string | number>, parent?: SVGElement): SVGElement {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, String(v));
  if (parent) parent.appendChild(el);
  return el;
}

export function flatDot(parent: SVGElement, C: Camera, r: number, cls: string): SVGEllipseElement {
  const e = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
  e.setAttribute("rx", r2(r * C.S).toString());
  e.setAttribute("ry", r2(r * C.S * C.k).toString());
  e.setAttribute("class", cls);
  parent.appendChild(e);
  return e;
}

export function place(el: SVGElement, pt: [number, number]): void {
  if (el instanceof SVGEllipseElement || el instanceof SVGCircleElement) {
    el.setAttribute("cx", r2(pt[0]).toString());
    el.setAttribute("cy", r2(pt[1]).toString());
  } else {
    el.setAttribute("transform", `translate(${r2(pt[0])},${r2(pt[1])})`);
  }
}

export function spring(x: number, opts: Partial<{ k: number; c: number; m: number; eps: number }> = {}): Spring {
  return {
    x,
    v: 0,
    t: x,
    k: opts.k ?? 100,
    c: opts.c ?? 18,
    m: opts.m ?? 1,
    eps: opts.eps ?? 0.04
  };
}

export function stepS(sp: Spring, dt: number): boolean {
  if (dt <= 0) return false;
  const f = -sp.k * (sp.x - sp.t) - sp.c * sp.v;
  const a = f / sp.m;
  sp.v += a * dt;
  sp.x += sp.v * dt;
  if (Math.abs(sp.v) < sp.eps && Math.abs(sp.x - sp.t) < sp.eps) {
    sp.x = sp.t;
    sp.v = 0;
    return false;
  }
  return true;
}

export function disposer(): DisposerBag {
  let fns: (() => void)[] = [];
  return {
    add: (fn) => fns.push(fn),
    on: (target, type, fn, opts) => {
      target.addEventListener(type, fn as EventListener, opts);
      fns.push(() => target.removeEventListener(type, fn as EventListener, opts));
    },
    dispose: () => {
      const runFns = fns;
      fns = [];
      for (let i = runFns.length - 1; i >= 0; i--) runFns[i]();
    }
  };
}

export function pointer(
  stage: HTMLElement,
  on: {
    move: (point: [number, number], e?: PointerEvent) => void;
    leave: (e?: PointerEvent) => void;
    down?: (point: [number, number], e?: PointerEvent) => void;
  }
): () => void {
  const pt = (e: PointerEvent): [number, number] => {
    const r = stage.getBoundingClientRect();
    return [((e.clientX - r.left) / r.width) * 400, ((e.clientY - r.top) / r.height) * 320];
  };
  const move = (e: PointerEvent) => on.move(pt(e), e);
  const down = (e: PointerEvent) => {
    if (e.pointerType !== "mouse") stage.releasePointerCapture?.(e.pointerId);
    if (on.down) on.down(pt(e), e);
    else on.move(pt(e), e);
  };
  const leave = (e: PointerEvent) => on.leave(e);

  stage.addEventListener("pointermove", move);
  stage.addEventListener("pointerdown", down);
  stage.addEventListener("pointerleave", leave);

  return () => {
    stage.removeEventListener("pointermove", move);
    stage.removeEventListener("pointerdown", down);
    stage.removeEventListener("pointerleave", leave);
  };
}

export function register(stage: HTMLElement, tick: (dt: number, now: number) => boolean): {
  wake: () => void;
  unregister: () => void;
} {
  let raf = 0;
  let last = performance.now();
  let awake = true;
  let gone = false;

  const frame = () => {
    if (gone) return;
    const now = performance.now();
    const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
    last = now;
    awake = tick(dt, now);
    if (awake) {
      raf = requestAnimationFrame(frame);
    } else {
      raf = 0;
    }
  };

  const wake = () => {
    if (gone || raf) return;
    awake = true;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  };

  wake();

  return {
    wake,
    unregister: () => {
      gone = true;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    }
  };
}

export function injectHairlineCSS(): void {
  if (typeof document === "undefined") return;
  if (document.getElementById("hairline-runtime-styles")) return;

  const style = document.createElement("style");
  style.id = "hairline-runtime-styles";
  style.textContent = `
    [data-hairline] {
      display: block;
      position: relative;
      aspect-ratio: 5 / 4;
      touch-action: pan-y;
      user-select: none;
      -webkit-user-select: none;
      --hl-plate: #FFFFFF;
      --hl-hi: #23469F;
      --hl-edge: #23469F;
      --hl-mid: #93C5FD;
      --hl-lo: #E2E8F0;
      --hl-sw: 1.1;
    }
    .dark [data-hairline],
    [data-theme="dark"] [data-hairline] {
      --hl-plate: #0B1120;
      --hl-hi: #60A5FA;
      --hl-edge: #93C5FD;
      --hl-mid: #1E3A8A;
      --hl-lo: #1E293B;
      --hl-sw: 1.1;
    }
    [data-hairline] > svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      overflow: visible;
    }
    [data-hairline] > svg path,
    [data-hairline] > svg polygon,
    [data-hairline] > svg line {
      fill: var(--hl-plate);
      stroke: var(--hl-mid);
      stroke-width: var(--hl-sw);
      vector-effect: non-scaling-stroke;
      stroke-linejoin: round;
      stroke-linecap: round;
      transition: stroke 260ms cubic-bezier(0.5, 0, 0.1, 1);
    }
    [data-hairline] > svg .nf { fill: none; }
    [data-hairline] > svg .fo { stroke: none; }
    [data-hairline] > svg .sil { stroke: var(--hl-edge); stroke-width: calc(var(--hl-sw) * 1.25); }
    [data-hairline] > svg .hi { stroke: var(--hl-hi); stroke-width: calc(var(--hl-sw) * 1.5); }
    [data-hairline] > svg .lo { stroke: var(--hl-lo); stroke-width: var(--hl-sw); }
    [data-hairline] > svg .dash { stroke-dasharray: 2 4; stroke: var(--hl-mid); stroke-width: 0.9; }
    [data-hairline] > svg .dot { stroke: none; fill: var(--hl-hi); transition: fill 260ms ease; }
    [data-hairline] > svg .dot.m { fill: var(--hl-edge); }
    [data-hairline] > svg .dot.off { fill: var(--hl-lo); }
  `;
  document.head.appendChild(style);
}

