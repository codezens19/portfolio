import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
`;

const HeaderWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Logo = styled.div`
  h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
  }
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    
    ${props => props.isOpen && `
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    `}
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0;
    gap: 0;
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #007bff;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    padding: 1rem 2rem;
    border-radius: 0;
  }
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  gap: 4px;
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  span {
    width: 25px;
    height: 3px;
    background: #333;
    transition: all 0.3s ease;
    border-radius: 2px;
    
    ${props => props.isOpen && `
      &:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
      }
      
      &:nth-child(2) {
        opacity: 0;
      }
      
      &:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
      }
    `}
  }
`;

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Logo>
                    <h1>Portfolio</h1>
                </Logo>

                <Nav isOpen={isMenuOpen}>
                    <NavList>
                        <li><NavButton onClick={() => scrollToSection('home')}>Home</NavButton></li>
                        <li><NavButton onClick={() => scrollToSection('about')}>About</NavButton></li>
                        <li><NavButton onClick={() => scrollToSection('projects')}>Projects</NavButton></li>
                        <li><NavButton onClick={() => scrollToSection('skills')}>Skills</NavButton></li>
                        <li><NavButton onClick={() => scrollToSection('contact')}>Contact</NavButton></li>
                    </NavList>
                </Nav>

                <Hamburger
                    isOpen={isMenuOpen}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>
            </HeaderWrapper>
        </HeaderContainer>
    );
};

export default Header; 