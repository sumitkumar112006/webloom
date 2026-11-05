import React from 'react';
import { Star, ShieldCheck, ExternalLink } from 'lucide-react';
import { ReviewItem } from '../data/reviewsData';

interface ReviewCardProps {
  review: ReviewItem;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="w-[300px] sm:w-[340px] md:w-[380px] shrink-0 flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111C33] border border-gray-200/80 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 card-hover">
      {/* CARD TOP: STARS & VERIFIED BADGE */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-1 text-xs font-mono font-bold text-gray-700 dark:text-gray-200">
              5.0
            </span>
          </div>

          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/40">
            <ShieldCheck className="h-3 w-3" />
            <span>Verified Client</span>
          </div>
        </div>

        {/* REVIEW QUOTE */}
        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 line-clamp-3 leading-relaxed font-normal mb-4">
          “{review.review}”
        </p>
      </div>

      {/* CARD BOTTOM: CLIENT INFO & PROJECT LINK */}
      <div className="pt-3 border-t border-gray-100 dark:border-white/10 flex items-center justify-between text-xs">
        <div>
          <h4 className="font-bold text-[#101A35] dark:text-white line-clamp-1">
            {review.clientName}
          </h4>
          <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-1">
            {review.role} • <span className="text-[#23469F] dark:text-[#B9DFF2] font-medium">{review.company}</span>
          </p>
        </div>

        {review.liveUrl && (
          <a
            href={review.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#23469F] dark:text-[#B9DFF2] hover:underline shrink-0 ml-2"
            title={`Visit ${review.company} live website`}
          >
            <span>Live Site</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </div>
  );
};
