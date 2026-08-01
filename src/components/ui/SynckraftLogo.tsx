
import React, { useState } from 'react';

interface SynckraftLogoProps {
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  logoUrl?: string;
}

// Local primary logo link
const PRIMARY_LOGO_URL = '/Synckraft-logo.png';
const SECONDARY_LOGO_URL = '/Synckraft-logo.png';

export const SynckraftLogo: React.FC<SynckraftLogoProps> = React.memo(({
  className = '',
  imageClassName = '',
  textClassName = '',
  showText = true,
  size = 'md',
  logoUrl,
}) => {
  const initialUrl = logoUrl || PRIMARY_LOGO_URL;
  const [imgSrc, setImgSrc] = useState<string>(initialUrl);
  const [hasError, setHasError] = useState<boolean>(false);

  const sizeClasses = {
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10',
    lg: 'h-11 sm:h-12',
  };

  const handleImageError = () => {
    setHasError(true);
  };

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {!hasError ? (
        <img
          src={imgSrc}
          alt="Synckraft Logo"
          decoding="async"
          onError={handleImageError}
          referrerPolicy="no-referrer"
          className={`object-contain transition-transform duration-300 ${sizeClasses[size]} ${imageClassName}`}
        />
      ) : (
        /* Crisp vector Brand Logo mark fallback in case of CORS or auth restrictions on Google Drive link */
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0052FF] via-[#1D63FF] to-[#3B82F6] flex items-center justify-center text-white shadow-md shadow-blue-500/25 shrink-0">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 stroke-white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Sleek S / Synckraft node connector logo icon */}
              <path d="M16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12C14.2091 12 16 13.7909 16 16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16" />
              <circle cx="16" cy="8" r="1.5" fill="white" />
              <circle cx="8" cy="16" r="1.5" fill="white" />
            </svg>
          </div>
          {showText && (
            <span
              className={`font-extrabold text-slate-900 tracking-tight font-sans text-2xl ${textClassName}`}
            >
              Synckraft
            </span>
          )}
        </div>
      )}
    </div>
  );
});

SynckraftLogo.displayName = 'SynckraftLogo';

