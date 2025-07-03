import React from 'react';
import styled from 'styled-components';
import { FaAndroid, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';

const SkillsSection = styled.section`
  background: #181a1b;
  color: #fff;
  padding: 2rem 0 2rem 0;
`;
const SkillsContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;
const SkillsTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #fff;
  border-left: 3px solid #5A924E;
  padding-left: 0.7rem;
`;
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
const SkillCard = styled.div`
  background: ${props => props.primary ? '#5A924E' : '#919DAB'};
  color: ${props => props.primary ? '#181a1b' : '#fff'};
  border-radius: 12px;
  padding: 1.2rem 1.2rem 1.5rem 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 180px;
`;
const SkillIcon = styled.div`
  font-size: 2.2rem;
`;
const SkillTitle = styled.h4`
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;
const SkillDesc = styled.p`
  font-size: 0.85rem;
  color: inherit;
  opacity: 0.9;
`;

const skills = [
  {
    icon: <FaAndroid />,
    title: 'Android & Mobile Development',
    desc: 'Expert in building native Android apps (Java, Kotlin) and cross-platform mobile solutions. Experience with custom UI, animations, and MVP architecture.',
    primary: false
  },
  {
    icon: <SiFlutter />,
    title: 'Flutter & Dart',
    desc: 'Developed high-quality, responsive apps for iOS and Android using Flutter. Skilled in widget design, state management, and third-party integrations.'
  },
  {
    icon: <FaReact />,
    title: 'React Native & Modern Web',
    desc: 'Built robust cross-platform mobile apps with React Native. Familiar with React, UI/UX best practices, and integrating REST APIs and Firebase.'
  },
  {
    icon: <FaNodeJs />,
    title: 'Node.js & Backend',
    desc: 'Proficient in Node.js for backend development, RESTful APIs, MongoDB, Mongoose, and cloud services. Focused on scalable, maintainable code.'
  }
];

const Skills = () => (
  <SkillsSection>
    <SkillsContainer>
      <SkillsTitle>Key Skills</SkillsTitle>
      <SkillsGrid>
        {skills.map((skill, idx) => (
          <SkillCard key={idx} primary={skill.primary}>
            <SkillIcon>{skill.icon}</SkillIcon>
            <SkillTitle>{skill.title}</SkillTitle>
            <SkillDesc>{skill.desc}</SkillDesc>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  </SkillsSection>
);

export default Skills; 