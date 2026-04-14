import { useEffect } from 'react';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Beauty() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <IndustryTemplate
      title="Beauty OS"
      subtitle="Personalized Cosmetics AI"
      description="Leverage facial recognition and skin analysis AI to offer highly tailored beauty product recommendations to every customer."
      features={[
        {
          title: "Virtual Try-On",
          description: "High fidelity AR tools to simulate makeup applications.",
          icon: "face_retouching_natural"
        },
        {
          title: "Skin Analytics",
          description: "Automated analysis identifying user skin patterns to propose perfect routines.",
          icon: "science"
        }
      ]}
    />
  );
}
