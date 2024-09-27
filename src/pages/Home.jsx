import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Description from "../components/Description";

import HowItWorks from "../components/HowItWorks";
import DescriptionPanel from "../components/DescriptionPanel";
import CallToAction from "../components/CallToAction";
import Features from "../components/Features";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  return (
    <section id="home">
      <Hero />
      <Features />
      <Description />
      <HowItWorks />
      <DescriptionPanel />
      <CallToAction />
    </section>
  );
};

export default Home;
