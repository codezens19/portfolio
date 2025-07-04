import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaMedium, FaCode, FaGithub } from 'react-icons/fa';
import { IoAppsOutline, IoBriefcaseOutline, IoCodeOutline } from 'react-icons/io5';

const ContactSection = styled.section`
  background: #181a1b;
  color: #fff;
  padding: 2.5rem 0 2rem 0;
`;
const ContactContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  gap: 2.5rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
const ServicesCol = styled.div`
  flex: 1;
`;
const ServicesTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #fff;
  border-left: 3px solid #5A924E;
  padding-left: 0.7rem;
`;
const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
const ServiceCard = styled.div`
  background: #181a1b;
  border-radius: 10px;
  border: 1px solid #5A924E;
  padding: 1.2rem 1.2rem 1.2rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
`;
const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #FFFFFF;
  margin-left: 0.5rem;
`;
const ServiceContent = styled.div``;
const ServiceTitle = styled.h4`
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
`;
const ServiceDesc = styled.p`
  font-size: 0.85rem;
  color: #ccc;
`;
const ContactCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const ContactTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #fff;
  border-left: 3px solid #5A924E;
  padding-left: 0.7rem;
`;
const ContactInfo = styled.div`
  background: #5A924E;
  border-radius: 10px;
  padding: 1.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 2rem;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;
const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.875rem;
  color: #FFFFFF;
  a {
    color: #FFFFFF;
    text-decoration: underline;
    font-size: 0.875rem;
  }
  svg {
    font-size: 1.5rem;
  }
`;

const services = [
  {
    icon: <IoBriefcaseOutline />,
    title: 'Work Experience',
    desc: '5+ years in mobile & cross-platform development. Android, Flutter, React Native, Node.js. Worked with startups & global teams'
  },
  {
    icon: <IoAppsOutline />,
    title: 'Projects',
    desc: 'Built & launched real-world apps (Nayan, FactoryPlus, impactDash). Open source packages for Flutter. Experience with scalable, user-focused solutions.'
  },
  {
    icon: <IoCodeOutline />,
    title: 'Skills',
    desc: 'Android, Flutter, React Native, Node.js. UI/UX, API integration, cloud & DevOps. Agile, remote collaboration, mentoring'
  }
];

const Contact = () => (
  <ContactSection>
    <ContactContainer>
      <ServicesCol>
        <ServicesTitle>How can I help you:</ServicesTitle>
        <ServicesList>
          {services.map((service, idx) => (
            <ServiceCard key={idx}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDesc>{service.desc}</ServiceDesc>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesList>
      </ServicesCol>
      <ContactCol>
        <ContactTitle>Contact me:</ContactTitle>
        <ContactInfo>
          <InfoRow><FaLinkedin /> <a href="https://www.linkedin.com/in/diwakar19/" target="_blank" rel="noopener noreferrer">in/diwakar19</a></InfoRow>
          <InfoRow><FaEnvelope />diwakar.singh.961903@gmail.com</InfoRow>
          <InfoRow><FaWhatsapp />+91 9897889332</InfoRow>
          <InfoRow><FaMedium /> <a href="https://medium.com/@diwakersingh31" target="_blank" rel="noopener noreferrer">@diwakersingh31</a></InfoRow>
          <InfoRow><FaGithub /> <a href="https://github.com/codezens19" target="_blank" rel="noopener noreferrer">github.com/codezens19</a></InfoRow>
          <InfoRow><FaCode /> <a href="https://leetcode.com/u/diwakar19/" target="_blank" rel="noopener noreferrer">leetcode.com/diwakar19</a></InfoRow>
        </ContactInfo>
      </ContactCol>
    </ContactContainer>
  </ContactSection>
);

export default Contact; 