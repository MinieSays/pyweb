import React, { useEffect } from "react";
import InfoSectionServices from "../components/InfoSectionServices";
import InformationServices from "../components/InformationServices";
import FeaturesSection from "../components/FeaturesSection";
import DescriptionPanelServices from "../components/DescriptionPanelServices";
import CTABanner from "../components/CTABanner";
import TestimonialsSection from "../components/TestimonialsSection";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <InfoSectionServices />
      <InformationServices />
      <FeaturesSection />
      <DescriptionPanelServices />
      <TestimonialsSection />
      <CTABanner />
    </div>
  );
};

export default Services;
