import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className = '',
  id,
}) => {
  return (
    <section id={id} className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 ${className}`}>
      {children}
    </section>
  );
};
