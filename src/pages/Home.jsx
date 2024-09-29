import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Description from "../components/Description";

import HowItWorks from "../components/HowItWorks";
import CallToAction from "../components/CallToAction";
import Features from "../components/Features";
import img from "../assets/heroimg.jpg";
import { cardsData, featuresData, stepsData } from "../constants";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/pexels-tranmautritam-326503.jpg";
import DescriptionWithCards from "../components/DescriptionWithCards";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="home">
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
      <Hero
        backgroundImage={img}
        title="Elevate Your Online Business"
        subtitle="Crafting stunning websites that captivate, engage, and convert—your digital success starts with us."
        buttonText="Free consultation"
        buttonLink="/consultation"
        secondaryLinkText="Learn More"
        secondaryLink="/services"
      />
      <Features
        subheading="Advanced Technology"
        heading="Performance-Oriented"
        description="Our agency stays ahead of trends and technology, delivering superior, cutting-edge websites that allow your business to thrive."
        features={featuresData}
      />
      <Description
        title="Pixel Perfect"
        subtitle="Experiences"
        emphasis="Digital"
        paragraph="Our main focus user experience and design. Every detail is carefully considered to ensure that your business is reflected professionally. By blending intuitive navigation, engaging visuals, and clear messaging, we create websites that look and feel great whether someone visits on their mobile phone, tablet, or desktop."
        buttonLabel1="Learn More"
        buttonLabel2="Free Consultation"
        image1={img1}
        image2={img2}
      />
      <HowItWorks
        title="Our Battleplan"
        subtitle="Looking to upgrade your current website or improve your search engine results?"
        steps={stepsData}
      />
      <DescriptionWithCards
        title="Unlock Your Businesses Full"
        emphasis="Potential"
        description="Every design is crafted with SEO at the core because we know that a beautiful website means nothing if it isn’t seen. By integrating SEO best practices into every step of the design process, from structure to content optimization, we ensure that your site ranks higher on search engines. This approach not only boosts visibility but also drives organic traffic, helping your business grow and reach the right audience effectively. Our SEO-focused designs are crafted to deliver long-term results and maximize your online presence."
        cards={cardsData}
        image={img}
      />
      <CallToAction
        heading="Let's Connect"
        subheading="Have any questions? Share your thoughts with us!"
        buttonText="Reach Out"
        buttonLink="/contact"
        gradientFrom="#f88502d5"
        gradientTo="#ffc857"
      />
    </section>
  );
};

export default Home;
