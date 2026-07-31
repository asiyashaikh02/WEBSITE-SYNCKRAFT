import React, { useState } from 'react';
import { TeamMember } from '../../types';

interface TeamMemberCardProps {
  member: TeamMember;
  variant?: 'large' | 'standard';
}

const DEFAULT_AVATAR_PATH = '/team/default-avatar.webp';

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  variant = 'standard',
}) => {
  const isLarge = variant === 'large';
  const [imgSrc, setImgSrc] = useState<string>(member.image || DEFAULT_AVATAR_PATH);

  const handleImageError = () => {
    if (imgSrc !== DEFAULT_AVATAR_PATH) {
      setImgSrc(DEFAULT_AVATAR_PATH);
    }
  };

  return (
    <div
      className={`bg-white border border-slate-200/80 rounded-3xl text-center shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group flex flex-col justify-between h-full ${
        isLarge ? 'p-8 sm:p-10 space-y-5 max-w-lg w-full' : 'p-6 space-y-4'
      }`}
    >
      <div className="space-y-4 flex flex-col items-center">
        {/* Circular Profile Photo / Avatar Placeholder */}
        <div
          className={`relative rounded-full mx-auto flex items-center justify-center font-extrabold text-white shadow-md border-2 border-blue-500/20 transition-transform duration-500 group-hover:scale-105 overflow-hidden shrink-0 bg-slate-100 ${
            isLarge
              ? 'w-24 h-24 sm:w-28 sm:h-28'
              : 'w-20 h-20'
          }`}
        >
          <img
            src={imgSrc}
            alt={member.name}
            loading="lazy"
            onError={handleImageError}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content */}
        <div className="space-y-1.5 w-full">
          <h3
            className={`font-extrabold text-slate-900 leading-snug ${
              isLarge ? 'text-xl sm:text-2xl' : 'text-base'
            }`}
          >
            {member.name}
          </h3>

          {/* Designation (Blue Accent) */}
          <p
            className={`font-bold text-[#1D63FF] tracking-tight ${
              isLarge ? 'text-sm sm:text-base' : 'text-xs'
            }`}
          >
            {member.role}
          </p>

          {/* Professional Description */}
          {member.description && (
            <p
              className={`text-slate-600 font-normal leading-relaxed pt-1 ${
                isLarge ? 'text-xs sm:text-sm max-w-md mx-auto' : 'text-xs line-clamp-3'
              }`}
            >
              {member.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
