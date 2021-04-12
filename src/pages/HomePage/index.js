import React, { useState } from 'react';
import Navbar from 'src/components/Navbar';
import Sidebar from 'src/components/Sidebar';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};

export default HomePage;
