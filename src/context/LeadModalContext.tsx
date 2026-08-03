import React, { createContext, useCallback, useContext, useMemo, useState, ReactNode } from 'react';
import { FormVariant, LeadModalOptions } from '../types/lead';

interface LeadModalContextType {
  isOpen: boolean;
  modalOptions: LeadModalOptions;
  openLeadModal: (options?: Partial<LeadModalOptions>) => void;
  closeLeadModal: () => void;
  currentPageName: string;
  setCurrentPageName: (pageName: string) => void;
}

const defaultOptions: LeadModalOptions = {
  ctaName: 'Get Started',
  sourcePage: 'Homepage',
  formVariant: 'business',
};

const LeadModalContext = createContext<LeadModalContextType | undefined>(undefined);

export function autoDetectVariant(ctaName: unknown = '', pageName: unknown = ''): FormVariant {
  const lowerCta = typeof ctaName === 'string' ? ctaName.toLowerCase() : '';
  const lowerPage = typeof pageName === 'string' ? pageName.toLowerCase() : '';

  // 1. Careers Form
  if (
    lowerCta.includes('join') ||
    lowerCta.includes('apply') ||
    lowerCta.includes('careers') ||
    lowerCta.includes('internship') ||
    lowerPage.includes('careers')
  ) {
    return 'careers';
  }

  // 2. Demo Request Form
  if (
    lowerCta.includes('demo') ||
    lowerCta.includes('schedule demo') ||
    lowerCta.includes('request demo') ||
    lowerCta.includes('book demo')
  ) {
    return 'demo';
  }

  // 3. Business Enquiry Form (Contact Sales, Book Strategy Call, Talk to Us, Get Started, Build My Software, etc.)
  return 'business';
}

export const LeadModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPageName, setCurrentPageName] = useState('Homepage');
  const [modalOptions, setModalOptions] = useState<LeadModalOptions>(defaultOptions);

  const openLeadModal = useCallback((options?: Partial<LeadModalOptions> | unknown) => {
    let opts: Partial<LeadModalOptions> = {};
    if (options && typeof options === 'object' && !('nativeEvent' in options) && !('_reactName' in options)) {
      opts = options as Partial<LeadModalOptions>;
    }

    const rawCta = opts.ctaName;
    const ctaName = typeof rawCta === 'string' && rawCta ? rawCta : 'Get Started';
    const rawSource = opts.sourcePage;
    const sourcePage = typeof rawSource === 'string' && rawSource ? rawSource : (currentPageName || 'Synckraft Website');
    const formVariant =
      opts.formVariant || autoDetectVariant(ctaName, sourcePage);

    setModalOptions({
      ctaName,
      sourcePage,
      formVariant,
      defaultProduct: typeof opts.defaultProduct === 'string' ? opts.defaultProduct : '',
      customTitle: typeof opts.customTitle === 'string' ? opts.customTitle : undefined,
      customSubtitle: typeof opts.customSubtitle === 'string' ? opts.customSubtitle : undefined,
    });
    setIsOpen(true);
  }, [currentPageName]);

  const closeLeadModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const contextValue = useMemo<LeadModalContextType>(() => ({
    isOpen,
    modalOptions,
    openLeadModal,
    closeLeadModal,
    currentPageName,
    setCurrentPageName,
  }), [isOpen, modalOptions, openLeadModal, closeLeadModal, currentPageName]);

  return (
    <LeadModalContext.Provider
      value={contextValue}
    >
      {children}
    </LeadModalContext.Provider>
  );
};

export const useLeadModal = (): LeadModalContextType => {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error('useLeadModal must be used within a LeadModalProvider');
  }
  return context;
};
