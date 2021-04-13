import React, { useState } from 'react';
import HeroSection from 'src/components/HeroSection';
import InfoSection from 'src/components/InfoSection';
import Navbar from 'src/components/Navbar';
import Sidebar from 'src/components/Sidebar';
import { homeObjOne, homeObjThree, homeObjTwo } from 'src/components/InfoSection/Data';
import Services from 'src/components/Services';
import Footer from 'src/components/Footer';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default HomePage;
