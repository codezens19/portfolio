import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #1a1a1a;
  color: #fff;
  padding: 1rem 0 1rem;
`;

const FooterBottom = styled.div`
  border-top: 1px solid #333;
  padding-top: 1rem;
  text-align: center;
  
  p {
    margin: 0;
    color: #999;
    font-size: 0.9rem;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterBottom>
        <p>&copy; {currentYear} codezens19. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 