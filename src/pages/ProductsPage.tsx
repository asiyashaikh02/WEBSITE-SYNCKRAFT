import React from 'react';
import { PageId, ProductItem } from '../types';
import { PRODUCTS_DATA, WHY_CHOOSE_PRODUCT_CARDS } from '../data/websiteData';
import { ProductCard } from '../components/cards/ProductCard';
import { ComingSoonProductCard } from '../components/cards/ComingSoonProductCard';
import { SectionContainer } from '../components/ui/SectionContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { PrimaryButton } from '../components/ui/Button';
import { IconWrapper } from '../components/icons/IconWrapper';

interface ProductsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookModal: (ctaName?: string) => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onOpenBookModal,
  onSelectProduct,
}) => {
  return (
    <div className="relative z-10 space-y-24 pt-8 pb-16">
      {/* Hero Section */}
      <SectionContainer className="text-center space-y-6 pt-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1D63FF] text-xs font-semibold tracking-wide shadow-2xs">
          Synckraft Product Ecosystem
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
          Industry-Specific Software Platforms <br />
          <span className="text-[#1D63FF]">Built For Modern Businesses.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          Discover our unified suite of proprietary SaaS products designed to automate sales, real estate CRM, hospitality POS, solar ERP, and legal compliance.
        </p>

        <div className="pt-2">
          <PrimaryButton onClick={() => onOpenBookModal()}>
            Book a Strategy Call
          </PrimaryButton>
        </div>
      </SectionContainer>

      {/* Product Ecosystem Grid */}
      <SectionContainer className="space-y-10">
        <SectionHeading
          title="Product Ecosystem"
          subtitle="Ready-to-deploy platforms crafted to accelerate efficiency across key business verticals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PRODUCTS_DATA.map((prod, idx) => (
            <ProductCard
              key={prod.id}
              product={prod}
              index={idx}
              onSelectProduct={onSelectProduct}
              onOpenBookModal={onOpenBookModal}
            />
          ))}

          {/* 6th Card: More Products Coming Soon */}
          <ComingSoonProductCard onOpenBookModal={onOpenBookModal} />
        </div>
      </SectionContainer>

      {/* Why Choose Our Products */}
      <SectionContainer className="space-y-10">
        <SectionHeading
          badge="WHY CHOOSE OUR PRODUCTS"
          title={
            <>
              Built for Growth, <span className="text-[#1D63FF]">Security & Ease.</span>
            </>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {WHY_CHOOSE_PRODUCT_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 text-center space-y-3 shadow-2xs hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto text-[#1D63FF]">
                <IconWrapper name={card.iconName} className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">{card.title}</h3>
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};
