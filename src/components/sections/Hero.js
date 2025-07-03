import React from 'react';
import styled from 'styled-components';
import ProfilePhoto from '../../assets/images/photo.jpg';

const HeroSection = styled.section`
  position: relative;
  background: #181a1b;
  color: #fff;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const HeroBar = styled.div`
  position: absolute;
  left: 0;
  width: 100vw;
  height: 3rem;
  background: #000;
  z-index: 2;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1100px;
  width: 100%;
  justify-content: center;
  position: relative;
  z-index: 3;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0;
    align-items: center;
    text-align: center;
  }
`;

const HeroText = styled.div`
  flex: 1;
  h1 {
    font-size: 2.8rem;
    color: #5A924E;
    font-weight: 700;
    margin: 0;
  }
  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    margin: 5rem 0 0 0;
  }
  p {
    font-size: 1rem;
    color: #ccc;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 900px) {
    text-align: center;
    order: 1;
    h1 {
      font-size: 2.1rem;
    }
    h2 {
      margin-top: 1.5rem;
    }
    p {
      margin: 0 1rem;
      margin-bottom: 4.5rem;
    }
  }
`;

const HeroButton = styled.a`
  display: inline-block;
  background: #5A924E;
  color: #FFFFFF;
  padding: 0.6rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
  margin-bottom: 5rem;
  &:hover {
    background: #6bb36b;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const HeroPhotoWrapper = styled.div`
  height: 400px;
  border-radius: 50%;
  background: #27302E;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 900px) {
    height: 260px;
    width: 260px;
    margin-top: 4.5rem;
    margin-bottom: 0;
    order: 0;
  }
`;

const HeroPhoto = styled.img`
  width: 100%;
  height: 100%;
  padding: 2rem;
  border-radius: 50%;
  object-fit: cover;
`;

const Hero = () => (
  <HeroSection>
    <HeroBar style={{ top: 0, zIndex: 5, }} />
    <HeroBar style={{ bottom: 0, zIndex: 5, }} />
    <HeroContent style={{ position: 'relative' }}>
      <HeroText>
        <h2>Hello! I'm</h2>
        <h1>Diwakar Singh</h1>
        <p>👋 I'm a passionate📱Android developer with expertise in Flutter, ⚛️ React Native and 💻 Node.js. With a strong focus on cross-platform development, I create high-quality mobile applications that run seamlessly on both Android and iOS devices. Let's connect, collaborate and create exceptional mobile and web experiences together!</p>
        <HeroButton href="#about">About me</HeroButton>
      </HeroText>
      <HeroPhotoWrapper>
        <HeroPhoto src={ProfilePhoto} alt="Letícia Smirelli" />
      </HeroPhotoWrapper>
    </HeroContent>
  </HeroSection>
);

export default Hero; 