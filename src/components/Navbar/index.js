import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from './NavbarStyles';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 720) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  });

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Virtual.
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="about" smooth={true} spy={true} exact="true" offset={-80}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="discover" smooth={true} spy={true} exact="true" offset={-80}>
                Discover
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="services" smooth={true} spy={true} exact="true" offset={-80}>
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="signup" smooth={true} spy={true} exact="true" offset={-80}>
                Sign Up
              </NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
