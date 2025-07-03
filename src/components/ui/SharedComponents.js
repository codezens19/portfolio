import styled from 'styled-components';

// Common section header used across multiple components
export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
    margin: 0 0 1rem 0;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.1rem;
    color: #666;
    margin: 0;
  }
`;

// Common container for sections
export const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

// Common section wrapper
export const Section = styled.section`
  padding: 5rem 0;
`;

// Common button styles
export const PrimaryButton = styled.button`
  padding: 0.75rem 2rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 123, 255, 0.3);
  }
`;

export const SecondaryButton = styled.button`
  padding: 0.75rem 2rem;
  background: transparent;
  color: #333;
  border: 2px solid #333;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #333;
    color: white;
    transform: translateY(-2px);
  }
`;

// Common card styles
export const Card = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

// Common grid layouts
export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const ThreeColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

// Common text styles
export const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 1rem 0;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SubHeading = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 1.5rem 0;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const BodyText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
  margin: 0 0 1.5rem 0;
`;

// Common form styles
export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    box-sizing: border-box;
    
    &:focus {
      outline: none;
      border-color: #007bff;
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background: #0056b3;
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`; 