import React from 'react';
import { ProductItem } from '../../types';
import { Product3DIllustration } from '../illustrations/Product3DIllustration';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { useLeadModal } from '../../context/LeadModalContext';

interface ProductCardProps {
  product: ProductItem;
  index: number;
  compact?: boolean;
  onSelectProduct: (product: ProductItem) => void;
  onOpenBookModal: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  compact = false,
  onSelectProduct,
  onOpenBookModal,
}) => {
  const { openLeadModal } = useLeadModal();
  const brandColor = product.brandColor || '#1D63FF';

  if (compact) {
    return (
      <div
        onClick={() => onSelectProduct(product)}
        className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full relative overflow-hidden"
      >
        <div className="space-y-3.5">
          {/* Top Header & Category Badge */}
          <div className="flex items-center justify-between">
            <span
              className="text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full border"
              style={{
                backgroundColor: `${brandColor}12`,
                color: brandColor,
                borderColor: `${brandColor}30`,
              }}
            >
              {product.badgeText || product.category}
            </span>

            {/* External Website Badge if present */}
            {product.website && (
              <a
                href={product.website}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[11px] font-bold text-slate-400 hover:text-slate-700 flex items-center gap-1 transition-colors"
              >
                <span>{product.website.replace('https://', '').replace('www.', '')}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          {/* 1. Product 3D Illustration / Screenshot */}
          <div className="w-full h-24 sm:h-28 flex items-center justify-center py-1">
            <Product3DIllustration productId={product.id} brandColor={brandColor} />
          </div>

          {/* 2. Product Name & Tagline */}
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:transition-colors">
              <span className="group-hover:text-slate-900">{product.name}</span>
            </h3>
            <p className="text-xs font-semibold text-slate-500 mt-0.5 tracking-tight line-clamp-1">
              {product.tagline}
            </p>
          </div>

          {/* 3. Description (Short single-line / two-line summary) */}
          <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* 4. Core Outcome / Impact Badge */}
          {product.primaryOutcome && (
            <div
              className="p-2.5 rounded-xl border text-[11px] leading-snug"
              style={{
                backgroundColor: `${brandColor}08`,
                borderColor: `${brandColor}25`,
              }}
            >
              <span className="font-extrabold" style={{ color: brandColor }}>
                Impact:{' '}
              </span>
              <span className="font-medium text-slate-700">{product.primaryOutcome}</span>
            </div>
          )}
        </div>

        {/* 5. Card Bottom CTAs */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-5 gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
            className="text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer group-hover:gap-2.5"
            style={{ color: brandColor }}
          >
            <span>Explore Specs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {product.website ? (
            <a
              href={product.website}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Visit App</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                openLeadModal({
                  ctaName: `Request Demo: ${product.title}`,
                  formVariant: 'demo',
                  defaultProduct: product.title,
                });
              }}
              className="text-xs font-bold text-slate-600 hover:text-[#1D63FF] cursor-pointer"
            >
              Request Demo
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => onSelectProduct(product)}
      className="bg-white border border-slate-200/80 rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full relative overflow-hidden"
      style={{
        // subtle hover border color via inline style or CSS class
      }}
    >
      <div className="space-y-4">
        {/* Top Header & Category Badge */}
        <div className="flex items-center justify-between">
          <span
            className="text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full border"
            style={{
              backgroundColor: `${brandColor}12`,
              color: brandColor,
              borderColor: `${brandColor}30`,
            }}
          >
            {product.badgeText || product.category}
          </span>

          {/* External Website Badge if present */}
          {product.website && (
            <a
              href={product.website}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[11px] font-bold text-slate-400 hover:text-slate-700 flex items-center gap-1 transition-colors"
            >
              <span>{product.website.replace('https://', '').replace('www.', '')}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        {/* 1. Product 3D Illustration */}
        <div className="w-full h-28 flex items-center justify-center py-1">
          <Product3DIllustration productId={product.id} brandColor={brandColor} />
        </div>

        {/* 2. Product Name & Tagline */}
        <div>
          <h3
            className="text-xl font-extrabold text-slate-900 group-hover:transition-colors"
            style={{ color: undefined }}
          >
            <span className="group-hover:text-slate-900">{product.name}</span>
          </h3>
          <p className="text-xs font-semibold text-slate-500 mt-0.5 tracking-tight">
            {product.tagline}
          </p>
        </div>

        {/* 3. Description */}
        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed line-clamp-3">
          {product.description}
        </p>

        {/* 4. Primary Outcome / Problem Solved Badge */}
        {product.primaryOutcome && (
          <div
            className="p-3 rounded-2xl border text-[11px] leading-snug"
            style={{
              backgroundColor: `${brandColor}08`,
              borderColor: `${brandColor}25`,
            }}
          >
            <span className="font-extrabold" style={{ color: brandColor }}>
              Core Impact:{' '}
            </span>
            <span className="font-medium text-slate-700">{product.primaryOutcome}</span>
          </div>
        )}

        {/* 5. Key Highlights */}
        <div className="pt-2 border-t border-slate-100 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
            Platform Capabilities
          </span>
          <ul className="space-y-2">
            {product.features.slice(0, 3).map((feat, fIdx) => (
              <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium leading-snug">
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    backgroundColor: `${brandColor}18`,
                    color: brandColor,
                  }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 6. Card Bottom CTAs */}
      <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-6 gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelectProduct(product);
          }}
          className="text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer group-hover:gap-2.5"
          style={{ color: brandColor }}
        >
          <span>Explore Specs</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        {product.website ? (
          <a
            href={product.website}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Visit App</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              openLeadModal({
                ctaName: `Request Demo: ${product.title}`,
                formVariant: 'demo',
                defaultProduct: product.title,
              });
            }}
            className="text-xs font-bold text-slate-600 hover:text-[#1D63FF] cursor-pointer"
          >
            Request Demo
          </button>
        )}
      </div>
    </div>
  );
};
