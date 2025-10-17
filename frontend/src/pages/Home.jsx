import React from 'react';
import Hero from '../components/Hero';
import AboutIntro from '../components/AboutIntro';
import PrinciplesSection from '../components/PrinciplesSection';
import WorkflowSection from '../components/WorkflowSection';
import StatsSection from '../components/StatsSection';
import HomeServicesRail from '../components/HomeServicesRail';
import GlobalPartners from '../components/GlobalPartners';
import Testimonials from '../components/Testimonials';
import HomeProjectsStack from '../components/HomeProjectsStack';
const Home = () => {
  return (
    <div>
      <Hero />
      <AboutIntro />
      <PrinciplesSection />
      <StatsSection />
      <WorkflowSection />
      <HomeProjectsStack />
      <HomeServicesRail />
      <GlobalPartners />
      <Testimonials />
    </div>
  );
};

export default Home;
