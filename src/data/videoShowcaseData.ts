export interface ShowcaseVideo {
  id: string;
  fileId: string;
  title: string;
  category: string;
  description: string;
  aspectRatio?: string;
  driveEmbedUrl: string;
  externalUrl: string;
}

export const videoShowcaseList: ShowcaseVideo[] = [
  {
    id: "video-1",
    fileId: "1y4UQnrdsOMJKvSsW8sEsoOGQewdJvJDI",
    title: "Product Showcase & Motion Reel",
    category: "3D Product Animation",
    description: "Dynamic product motion breakdown featuring multi-angle camera choreography and photorealistic lighting.",
    driveEmbedUrl: "https://drive.google.com/file/d/1y4UQnrdsOMJKvSsW8sEsoOGQewdJvJDI/preview",
    externalUrl: "https://drive.google.com/file/d/1y4UQnrdsOMJKvSsW8sEsoOGQewdJvJDI/view"
  },
  {
    id: "video-2",
    fileId: "1zjQ2eJ9mjMV2GZYB9XptBht6B0kA8xTv",
    title: "Kinetic Mechanism & Industrial Simulation",
    category: "CAD & Mechanism",
    description: "Detailed kinematic animation illustrating internal component movements, precision tolerances, and engineering flow.",
    driveEmbedUrl: "https://drive.google.com/file/d/1zjQ2eJ9mjMV2GZYB9XptBht6B0kA8xTv/preview",
    externalUrl: "https://drive.google.com/file/d/1zjQ2eJ9mjMV2GZYB9XptBht6B0kA8xTv/view"
  },
  {
    id: "video-3",
    fileId: "1HemG-3eu6W_NM74e_qZW_PmpwoizFtmG",
    title: "Commercial Visuals & Brand Sequence",
    category: "CGI & Commercial",
    description: "High-impact commercial video sequence designed for digital launch campaigns and high-engagement social formats.",
    driveEmbedUrl: "https://drive.google.com/file/d/1HemG-3eu6W_NM74e_qZW_PmpwoizFtmG/preview",
    externalUrl: "https://drive.google.com/file/d/1HemG-3eu6W_NM74e_qZW_PmpwoizFtmG/view"
  },
  {
    id: "video-4",
    fileId: "16aepMr0gsUAyLbDk00YD_l_W-hRqh-vP",
    title: "Exploded Assembly & Material Study",
    category: "Technical Visualization",
    description: "Exploded-view mechanical breakdown showing internal parts hierarchy, tactile PBR textures, and component assembly.",
    driveEmbedUrl: "https://drive.google.com/file/d/16aepMr0gsUAyLbDk00YD_l_W-hRqh-vP/preview",
    externalUrl: "https://drive.google.com/file/d/16aepMr0gsUAyLbDk00YD_l_W-hRqh-vP/view"
  },
  {
    id: "video-5",
    fileId: "19moQRsGTy_OH3xxE0GqE1EdQCk_EKE3o",
    title: "Fluid Dynamics & Surface Lighting Showcase",
    category: "3D Animation & Motion",
    description: "Atmospheric motion study highlighting surface reflection, refraction, and photorealistic raytraced finish.",
    driveEmbedUrl: "https://drive.google.com/file/d/19moQRsGTy_OH3xxE0GqE1EdQCk_EKE3o/preview",
    externalUrl: "https://drive.google.com/file/d/19moQRsGTy_OH3xxE0GqE1EdQCk_EKE3o/view"
  }
];

