import React, { useEffect } from "react";
import img from "../assets/responsive.jpg";
import FeaturesSection from "../components/FeaturesSection";
import CTABanner from "../components/CTABanner";
import TestimonialsSection from "../components/TestimonialsSection";
import {
  cardsDataServices,
  featuresDataServices,
  testimonialsData,
} from "../constants";
import ServicesHero from "../components/ServicesHero";
import toronto from "../assets/toronto.jpg";
import DescriptionServices from "../components/DescriptionServices";
import DescriptionWithCards from "../components/DescriptionWithCards";
import img1 from "../assets/google.jpg";
import { Helmet } from "react-helmet";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Py Web Solutions - Kitchener Web Design - Waterloo Web Design - SEO
          Kitchener{" "}
        </title>
        <meta
          name="Professional Web Design Kitchener - SEO Kitchener"
          content="Py Web Design offers professional web design service in Kitchener Waterloo. Call today for a free mock-up."
        />
        <meta
          name="web design kitchener, SEO kitchener"
          content="web design kitchener, SEO kitchener"
        />
      </Helmet>
      <ServicesHero
        backgroundImage={toronto}
        overlayOpacity={0.8}
        title="Delivering"
        emphasis="Results"
        description="Py Web Solutions provides a range of services to help your business thrive online. Our web design services focus on creating visually stunning, user-friendly websites that represent your brand and engage your audience. We also specialize in social media marketing, helping you build a strong online presence, connect with customers, and drive meaningful engagement across platforms. Additionally, our SEO services ensure your website is optimized to rank higher on search engines, increasing visibility and driving organic traffic to your site. Together, these services are designed to boost your online performance and achieve real results."
      />
      <DescriptionServices
        title="WebDesign &"
        emphasis="Web Applications"
        description={
          <>
            At our agency, we specialize in selling web design services that
            prioritize user experience and marketing results. Every website we
            create is designed with the user in mind, ensuring intuitive
            navigation, fast loading times, and mobile responsiveness. We don’t
            just aim to make your site look great; we ensure that visitors have
            a seamless experience that encourages them to explore further,
            ultimately driving engagement and conversions. By combining sleek
            design with functionality, we help your website become a powerful
            tool for your business growth. In addition to web design, we also
            develop custom web applications that are tailored to meet your
            specific business needs.
            <br /> <br />
            These applications are built to enhance your marketing efforts by
            simplifying complex processes, improving customer interactions, and
            delivering personalized experiences. Whether you need an e-commerce
            platform, a content management system, or a specialized business
            solution, our web applications are designed to maximize efficiency
            while promoting your brand and helping you reach your target
            audience effectively.
          </>
        }
        image={img}
        conversionPercentage="37%"
        conversionText="High Conversions on Landing Pages"
      />
      <FeaturesSection features={featuresDataServices} />
      <DescriptionWithCards
        title="Bigger, Better"
        emphasis="SEO"
        description="Every design is crafted with SEO at the core because we know that a beautiful website means nothing if it isn’t seen. By integrating SEO best practices into every step of the design process, from structure to content optimization, we ensure that your site ranks higher on search engines. This approach not only boosts visibility but also drives organic traffic, helping your business grow and reach the right audience effectively. Our SEO-focused designs are crafted to deliver long-term results and maximize your online presence."
        cards={cardsDataServices}
        image={img1}
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
    </>
  );
};

export default Services;
