import React from 'react';
import { ServiceItem } from '../../types';
import { UnifiedCapabilityCard } from './UnifiedCapabilityCard';

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
  onOpenBookModal: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onOpenBookModal,
}) => {
  return (
    <UnifiedCapabilityCard
      id={service.id || service.iconName}
      title={service.title}
      description={service.description}
      problemSolved={service.problemSolved || 'Legacy off-the-shelf software limits operational flexibility.'}
      highlights={service.deliverables}
      ctaText="Discuss Service Scope"
      onOpenBookModal={onOpenBookModal}
    />
  );
};
