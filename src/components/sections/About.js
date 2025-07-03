import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  background: #000000;
  color: #fff;
  padding: 0 0 2rem 0;
`;
const AboutContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;
const AboutTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #fff;
  border-left: 3px solid #5A924E;
  padding-left: 0.7rem;
`;
const AboutRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 1.5rem;
`;
const AboutYears = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  color: #5A924E;
  margin-right: 0.5rem;
`;
const AboutText = styled.div`
  font-size: 1rem;
  color: #ccc;
  line-height: 1.6;
`;

function getExperienceYears() {
  const start = new Date(2019, 5, 11); // June is month 5 (0-indexed)
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const m = now.getMonth() - start.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < start.getDate())) {
    years--;
  }
  return years + '+';
}

const About = () => (
  <AboutSection id="about">
    <AboutContainer>
      <AboutTitle>About Me</AboutTitle>
      <AboutRow>
        <AboutYears>{getExperienceYears()}</AboutYears>
        <AboutText>
          I'm an enthusiastic Android developer with a deep passion for building impactful digital products. My expertise spans Flutter, React Native, and Node.js, enabling me to craft robust, cross-platform mobile applications that deliver a seamless experience on both Android and iOS.<br /><br />
          With several years of hands-on experience, I thrive on solving complex problems and transforming ideas into polished, user-friendly apps. I enjoy collaborating with diverse teams, embracing new technologies, and following best practices to ensure every project is scalable, maintainable, and future-ready.<br /><br />
          Whether it's launching a startup MVP, optimizing an existing app, or integrating the latest APIs, I bring creativity, technical skill, and a commitment to quality to every project. Let's work together to turn your vision into an exceptional mobile or web experience!
        </AboutText>
      </AboutRow>
    </AboutContainer>
  </AboutSection>
);

export default About; 