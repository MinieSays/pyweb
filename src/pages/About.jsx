import React, { useEffect } from "react";
import InfoSection from "../components/InfoSection";
import Information from "../components/Information";
import TestimonialsSection from "../components/TestimonialsSection";
import CTABanner from "../components/CTABanner";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  return (
    <section id="about">
      <InfoSection />
      <Information />
      <TestimonialsSection />
      <CTABanner />
    </section>
  );
};

export default About;
