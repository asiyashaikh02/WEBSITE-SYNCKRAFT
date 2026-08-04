import React, { useState } from 'react';
import { ProductItem } from '../types';
import { Modal } from './ui/Modal';
import { PrimaryButton, SecondaryButton } from './ui/Button';
import { useLeadModal } from '../context/LeadModalContext';
import { Check, ArrowRight, Layers, ShieldCheck, Zap, Monitor, Play, Users, Target } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenBookModal: (ctaName?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenBookModal,
}) => {
  const { openLeadModal } = useLeadModal();
  const [activeTab, setActiveTab] = useState<'overview' | 'preview'>('overview');

  if (!product) return null;

  return (
    <Modal isOpen={!!product} onClose={onClose} maxWidth="max-w-3xl">
      <div className="-m-6 sm:-m-8 flex flex-col overflow-hidden max-h-[85vh]">
        {/* Header */}
        <div
          className="p-6 text-slate-900 relative border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{ backgroundColor: product.accentBg }}
        >
          <div>
            <span className="inline-block px-3 py-1 bg-white/80 rounded-full text-xs font-semibold tracking-wider text-slate-800 mb-2 border border-slate-200/50">
              {product.category}
            </span>
            {product.logoUrl ? (
              <div className="h-10 flex items-center mb-1">
                <img src={product.logoUrl} alt={product.name} width={320} height={160} className="h-9 w-auto max-w-[220px] object-contain" />
              </div>
            ) : (
              <h3 className="text-3xl font-extrabold tracking-tight" style={{ color: product.brandColor }}>
                {product.name}
              </h3>
            )}
            <p className="text-sm font-semibold text-slate-700 mt-0.5">{product.tagline}</p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1 bg-white/80 p-1 rounded-xl border border-slate-200/60 shrink-0">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Overview Specs
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'preview'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>UI & Tour</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1 text-slate-700 text-sm">
          {activeTab === 'overview' ? (
            <>
              {/* Product Target Audience & Outcome */}
              {(product.targetAudience || product.primaryOutcome) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  {product.targetAudience && (
                    <div className="flex items-start gap-2.5">
                      <Users className="w-4 h-4 text-[#1D63FF] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Target User</span>
                        <span className="text-xs font-semibold text-slate-800">{product.targetAudience}</span>
                      </div>
                    </div>
                  )}
                  {product.primaryOutcome && (
                    <div className="flex items-start gap-2.5">
                      <Target className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Primary Business Impact</span>
                        <span className="text-xs font-semibold text-slate-800">{product.primaryOutcome}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <p className="text-slate-600 leading-relaxed font-normal">{product.overview || product.description}</p>

              {/* Metrics */}
              {product.metrics && (
                <div className="grid grid-cols-3 gap-3 p-4 bg-blue-50/50 rounded-2xl border border-blue-100/60">
                  {product.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xl font-extrabold text-[#1D63FF]">{m.value}</div>
                      <div className="text-[11px] font-semibold text-slate-600 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Feature Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-blue-600" />
                  Key Feature Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800"
                    >
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry Applications */}
              {product.useCases && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-emerald-600" />
                    Target Industries & Sectors
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.useCases.map((uc, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-medium">
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2 p-3 bg-slate-100/80 rounded-xl text-slate-700 text-xs font-medium">
                <ShieldCheck className="w-4 h-4 text-[#1D63FF] shrink-0" />
                <span>Includes 99.9% uptime SLA, SOC-2 ready security standards, and dedicated ongoing maintenance.</span>
              </div>
            </>
          ) : (
            /* Preview / Demo Video Tab */
            <div className="space-y-6">
              {/* UI Screenshot Placeholder Frame */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Monitor className="w-4 h-4 text-[#1D63FF]" />
                  Product Dashboard Interface Preview
                </h4>
                {/* Reusable UI Preview Frame */}
                <div className="bg-slate-900 rounded-2xl p-4 text-white border border-slate-800 space-y-4 shadow-inner">
                  {/* Mock Window Controls */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                      </div>
                      <span className="font-mono text-[11px] text-slate-400 ml-2">app.{product.id}.synckraft.com/dashboard</span>
                    </div>
                    <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[10px] font-semibold">Live Sandbox Preview</span>
                  </div>

                  {/* Clean Visual Placeholder Representation */}
                  <div className="h-48 bg-slate-950/60 rounded-xl border border-slate-800/80 flex flex-col items-center justify-center text-center p-6 space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-[#1D63FF] flex items-center justify-center border border-blue-500/30">
                      <Monitor className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-200">{product.name} Enterprise UI Blueprint</p>
                      <p className="text-xs text-slate-400 max-w-sm mt-1">
                        High-density analytics, real-time data sync feeds, and role-based access management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Video Placeholder Frame */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Play className="w-4 h-4 text-purple-600" />
                  Interactive Tour & Guided Walkthrough
                </h4>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shadow-xs">
                    <Play className="w-5 h-5 fill-purple-600" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">Schedule a Live Personalized Product Demonstration</h5>
                    <p className="text-xs text-slate-600 max-w-md mx-auto mt-1">
                      Our solutions engineering team can walk you through live custom sandbox environments tailored to your industry workflows.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      openLeadModal({
                        ctaName: `Request Demo: ${product.name}`,
                        formVariant: 'demo',
                        defaultProduct: product.name,
                      });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-purple-600 text-white font-bold text-xs hover:bg-purple-700 transition-all cursor-pointer shadow-xs"
                  >
                    <span>Request Live Guided Tour</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
          <SecondaryButton onClick={onClose} size="sm">
            Close Specs
          </SecondaryButton>
          <PrimaryButton
            onClick={() => {
              onClose();
              openLeadModal({
                ctaName: `Schedule Demo: ${product.name}`,
                formVariant: 'demo',
                defaultProduct: product.name,
              });
            }}
            size="sm"
          >
            Request Demo & Pricing
          </PrimaryButton>
        </div>
      </div>
    </Modal>
  );
};

