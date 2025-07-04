import React from 'react';
import styled from 'styled-components';
import { FaGooglePlay, FaGlobe } from 'react-icons/fa';
import ProjectNayan from "../../assets/images/project_nayan_16_9.png";
import ProjectImpact from "../../assets/images/project_imapct_16_9.png";
import ProjectFactoryPlus from "../../assets/images/project_factoryplus_16_9.png";
import ProjectGplaces from "../../assets/images/project_google_places_16_9.png";
import ProjectMsalAuthFlutter from "../../assets/images/project_msal_auth_16_9.png";
import ProjectAzureBlobFlutter from "../../assets/images/project_azure_16_9.png";
import { FaFlutter } from 'react-icons/fa6';

const ProjectsSection = styled.section`
  background: #000000;
  color: #fff;
  padding: 2.5rem 0 2rem 0;
  z-index: 2;
`;
const ProjectsContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;
const ProjectsTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #fff;
  border-left: 3px solid #5A924E;
  padding-left: 0.7rem;
`;
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
const ProjectCard = styled.div`
  background: #27302E;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  min-height: 220px;
  overflow: hidden;
`;
const ProjectImage = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: linear-gradient(to bottom, #919DAB 0 50%, #27302E 50% 100%);
  padding: 1rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
    background: transparent;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }
`;
const ProjectContent = styled.div`
  flex: 1;
  padding: 0 1.2rem 1rem 1.2rem;
  display: flex;
  flex-direction: column;
`;
const ProjectTitle = styled.h4`
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;
const ProjectDesc = styled.p`
  font-size: 0.97rem;
  color: #ccc;
  margin-bottom: 1.1rem;
  flex: 1;
`;
const ProjectButton = styled.a`
  display: inline-flex;
  align-items: center;
  background: #5A924E;
  color: #FFFFFF;
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.97rem;
  transition: background 0.2s;
  margin-top: auto;
  svg {
    margin-right: 0.5rem;
  }
  &:hover {
    background: #6bb36b;
  }
`;

const productProjects = [
  {
    img: ProjectNayan,
    title: 'Nayan App',
    desc: 'A visual search and data collection platform for real-world problem solving, including driver, admin, and specialist modes. Available on Google Play.',
    link: 'https://play.google.com/store/apps/details?id=co.nayan.c3specialist_v2.production&hl=en_IN',
    icon: <FaGooglePlay />
  },
  {
    img: ProjectFactoryPlus,
    title: 'FactoryPlus',
    desc: 'A free, cloud-based factory management platform for MSMEs, enabling digital inventory, production, and reporting for 500+ factories.',
    link: 'https://factoryplus.in/',
    icon: <FaGlobe />
  },
  {
    img: ProjectImpact,
    title: 'impactDash',
    desc: 'A research and technology platform for social and environmental impact, providing tools for monitoring, evaluation, and reporting.',
    link: 'https://impactdash.com/',
    icon: <FaGlobe />
  }
];

const openSourceProjects = [
  {
    img: ProjectGplaces,
    title: 'gplaces',
    desc: 'A Flutter package for Google Places API integration, supporting location-based features in mobile apps.',
    link: 'https://pub.dev/packages/gplaces',
    icon: <FaFlutter />
  },
  {
    img: ProjectMsalAuthFlutter,
    title: 'msal_auth_flutter',
    desc: 'A Flutter plugin for Microsoft AD Authenticator, enabling secure authentication in mobile apps.',
    link: 'https://pub.dev/packages/msal_auth_flutter',
    icon: <FaFlutter />
  },
  {
    img: ProjectAzureBlobFlutter,
    title: 'azure_blob_flutter',
    desc: 'A Flutter package for integrating Azure Blob Storage, enabling cloud file storage and retrieval in mobile applications.',
    link: 'https://pub.dev/packages/azure_blob_flutter',
    icon: <FaFlutter />
  }
];

const Projects = () => (
  <ProjectsSection>
    <ProjectsContainer>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsGrid>
        {productProjects.map((project, idx) => (
          <ProjectCard key={idx}>
            <ProjectImage>
              <img src={project.img} alt={project.title} />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDesc>{project.desc}</ProjectDesc>
              <ProjectButton href={project.link} target="_blank" rel="noopener noreferrer">
                {project.icon} View Project
              </ProjectButton>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
      <ProjectsTitle style={{ marginTop: '2.5rem' }}>Open Source Contributions</ProjectsTitle>
      <ProjectsGrid>
        {openSourceProjects.map((project, idx) => (
          <ProjectCard key={idx}>
            <ProjectImage>
              <img src={project.img} alt={project.title} />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDesc>{project.desc}</ProjectDesc>
              <ProjectButton href={project.link} target="_blank" rel="noopener noreferrer">
                {project.icon} View Project
              </ProjectButton>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  </ProjectsSection>
);

export default Projects; 