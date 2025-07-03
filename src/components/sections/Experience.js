import React from 'react';
import styled from 'styled-components';
import ImpactDashLogo from '../../assets/images/impactdash_logo.jpeg';
import FactoryPlusLogo from '../../assets/images/factoryplushq_logo.jpeg';
import NayanLogo from '../../assets/images/nayancam_logo.jpeg';
import TechjectLogo from '../../assets/images/techject_logo.jpeg';

const ExperienceSection = styled.section`
  background: #000000;
  color: #fff;
  padding: 2.5rem 0 2rem 0;
`;
const ExperienceContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;
const ExperienceTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #fff;
  border-left: 3px solid #5A924E;
  padding-left: 0.7rem;
`;
const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const ExpCard = styled.div`
  background: #27302E;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem 1.2rem;
  align-items: flex-start;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const ExpLogo = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background: #fff;
  object-fit: contain;
`;
const ExpDetails = styled.div`
  flex: 1;
`;
const ExpHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.7rem 1.2rem;
  margin-bottom: 0.3rem;
`;
const ExpRole = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #5A924E;
`;
const ExpCompany = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
`;
const ExpMeta = styled.div`
  font-size: 0.97rem;
  color: #ccc;
`;
const ExpLocation = styled.div`
  font-size: 0.97rem;
  color: #5A924E;
`;
const ExpBullets = styled.ul`
  margin: 0.7rem 0 0 1.2rem;
  padding: 0;
  color: #ccc;
  font-size: 0.97rem;
  list-style: disc inside;
`;
const ExpSkills = styled.div`
  margin-top: 0.7rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
const SkillTag = styled.span`
  background: #5A924E;
  color: #FFFFFF;
  border-radius: 6px;
  padding: 0.2rem 0.7rem;
  font-size: 0.85rem;
  font-weight: 600;
`;

function getDuration(start, end) {
  const startDate = new Date(start);
  const endDate = end && end.toLowerCase() !== 'present' ? new Date(end) : new Date();
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  if (endDate.getDate() < startDate.getDate()) months--;
  if (months < 0) {
    years--;
    months += 12;
  }
  let result = '';
  if (years > 0) result += years + ' yr' + (years > 1 ? 's' : '');
  if (months > 0) result += (result ? ' ' : '') + months + ' mo' + (months > 1 ? 's' : '');
  return result || '0 mo';
}

const experiences = [
  {
    logo: ImpactDashLogo,
    role: 'SDE',
    company: 'impactDash · Full-time',
    start: '2022-12-01',
    end: 'present',
    location: 'Remote',
    bullets: [
      'Collaborated closely with designers, product managers, and backend developers to deliver end-to-end mobile solutions.',
      'Utilized Node.js for backend development, building RESTful APIs and handling data communication between the frontend and backend systems.',
      'Implemented database management solutions using MongoDB, including data modeling with Mongoose.',
      'Conducted thorough testing and debugging to ensure the reliability and quality of mobile applications.',
      'Actively participated in code reviews and followed best practices to maintain clean and maintainable codebase.',
      'Stayed up-to-date with the latest trends and technologies in React Native and Node.js mobile development, implementing industry best practices in projects.'
    ],
    skills: ['Android', 'Git', 'Node.js', 'React Native', 'MongoDB', 'REST API']
  },
  {
    logo: FactoryPlusLogo,
    role: 'Product Engineer',
    company: 'FactoryPlus · Full-time',
    start: '2021-11-01',
    end: '2022-11-30',
    location: 'Noida · Remote',
    bullets: [
      'Developed mobile applications using Flutter, creating smooth and responsive user interfaces across iOS and Android platforms.',
      "Leveraged Flutter's widget library and platform integrations to deliver high-quality user experiences.",
      'Integrated third-party libraries and APIs to extend app functionality and enhance user engagement.',
      'Collaborated with cross-functional teams to gather requirements, plan, and execute mobile app projects.',
      'Conducted code reviews, performed unit testing, and ensured code quality throughout the development lifecycle.'
    ],
    skills: ['Flutter', 'Firebase', 'Sentry', 'Dart', 'Android', 'iOS']
  },
  {
    logo: NayanLogo,
    role: 'Android Developer',
    company: 'NAYAN Technologies · Full-time',
    start: '2019-06-01',
    end: '2021-11-30',
    location: 'Delhi Area, India · Hybrid',
    bullets: [
      'Developed and maintained Android applications using Java and Kotlin, adhering to best practices and coding standards.',
      'Integrated TensorFlow Lite models for image recognition and natural language processing, improving app functionality and user engagement.',
      'Implemented custom views and animations to create visually appealing and interactive user interfaces.',
      'Collaborated with designers and product managers to refine app features and user experiences.',
      'Conducted code reviews and performed unit testing to ensure code quality and app performance.',
      'Worked closely with backend developers to integrate APIs and data endpoints.'
    ],
    skills: ['Android Development', 'Kotlin', 'Java', 'TensorFlow Lite', 'UI/UX', 'APIs']
  },
  {
    logo: TechjectLogo,
    role: 'Internship Trainee',
    company: 'TechJect Inc. · Internship',
    start: '2019-02-01',
    end: '2019-04-30',
    location: 'New Delhi Area, India',
    bullets: [
      'Model-View-Presenter (MVP) and Mobile Application Development'
    ],
    skills: ['Android', 'MVP', 'Mobile Development']
  }
];

const Experience = () => (
  <ExperienceSection>
    <ExperienceContainer>
      <ExperienceTitle>Experience</ExperienceTitle>
      <ExperienceList>
        {experiences.map((exp, idx) => (
          <ExpCard key={idx}>
            <ExpLogo src={exp.logo} alt={exp.company} />
            <ExpDetails>
              <ExpHeader>
                <ExpRole>{exp.role}</ExpRole>
                <ExpCompany>{exp.company}</ExpCompany>
                <ExpMeta>
                  {exp.start && (
                    <>
                      {new Date(exp.start).toLocaleString('default', { month: 'short', year: 'numeric' })}
                      {' - '}
                      {exp.end && exp.end.toLowerCase() !== 'present'
                        ? new Date(exp.end).toLocaleString('default', { month: 'short', year: 'numeric' })
                        : 'Present'}
                      {' · '}
                      {getDuration(exp.start, exp.end)}
                    </>
                  )}
                </ExpMeta>
                <ExpLocation>{exp.location}</ExpLocation>
              </ExpHeader>
              <ExpBullets>
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ExpBullets>
              <ExpSkills>
                {exp.skills.map((skill, i) => <SkillTag key={i}>{skill}</SkillTag>)}
              </ExpSkills>
            </ExpDetails>
          </ExpCard>
        ))}
      </ExperienceList>
    </ExperienceContainer>
  </ExperienceSection>
);

export default Experience; 