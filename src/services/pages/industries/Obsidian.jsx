import { useEffect } from 'react';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Obsidian() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <IndustryTemplate
      title="Obsidian Core"
      subtitle="Universal AI Command Center"
      description="The absolute peak of AI integration. Obsidian connects disparate industry silos into one unified, predictive enterprise system."
      features={[
        {
          title: "Global Brain",
          description: "Centralized neural networks training on all your company data.",
          icon: "hub"
        },
        {
          title: "Automated Execution",
          description: "Agents capable of performing heavy administrative tasks with zero human oversight.",
          icon: "smart_toy"
        }
      ]}
    />
  );
}
