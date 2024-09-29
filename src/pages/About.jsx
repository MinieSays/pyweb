import React, { useEffect } from "react";
import TestimonialsSection from "../components/TestimonialsSection";
import CTABanner from "../components/CTABanner";
import ServicesHero from "../components/ServicesHero";
import toronto from "../assets/toronto.jpg";
import aboutImage from "../assets/about.jpg";
import DescriptionServices from "../components/DescriptionServices";
import { testimonialsData } from "../constants";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id="about">
      <ServicesHero
        backgroundImage={toronto}
        overlayOpacity={0.5}
        title="Canadian-based agency delivering"
        emphasis="expert web design"
        description="We are a proudly Canadian-based web design agency committed to delivering exceptional digital solutions. With a deep understanding of the evolving online landscape, we craft websites that are visually stunning and performance-driven. Our team combines creativity and technical expertise to build custom designs that reflect your brand’s identity and drive measurable results. Based in Canada, we are dedicated to supporting businesses locally and globally with innovative, user-focused web solutions."
      />
      <DescriptionServices
        title="A Team You Can"
        emphasis="Count On."
        description="Py Web Solutions is a proud Canadian web design agency. Our mission is to help businesses achieve real, measurable results through their online presence.
        Our co-creators believe that a website isn’t just a digital space; it’s a powerful tool that can drive growth, connect with your audience, and tell your brand’s story. Every project taken on is a personal commitment to understanding your business goals and creating a custom web solution that delivers exactly what you need—whether that’s more traffic, better engagement, or higher conversions.
        Web design is more than just a job for me; it’s our passion. We thrive on seeing our clients succeed and knowing that the work we’ve done together is making a difference.
        "
        image={aboutImage}
        conversionPercentage="37%"
        conversionText="High Conversions on Landing Pages"
      />
      <TestimonialsSection
        title="Trusted by"
        titleEmphasis="Businesses World-Wide"
        testimonials={testimonialsData}
      />
      <CTABanner
        backgroundColor="bg-yellow-500"
        title="Elevate Your Digital Presence"
        subtitle="Powerful web design, SEO, and marketing strategies for real results."
        buttonText="Get Started Now"
        buttonLink="/contact"
      />
    </section>
  );
};

export default About;
