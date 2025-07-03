import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: ${props => {
        switch (props.size) {
            case 'small': return '0.5rem 1rem';
            case 'large': return '1rem 2.5rem';
            default: return '0.75rem 2rem';
        }
    }};
  border: none;
  border-radius: 50px;
  font-size: ${props => {
        switch (props.size) {
            case 'small': return '0.875rem';
            case 'large': return '1.125rem';
            default: return '1rem';
        }
    }};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  
  ${props => {
        switch (props.variant) {
            case 'secondary':
                return `
          background: transparent;
          color: #333;
          border: 2px solid #333;
          
          &:hover {
            background: #333;
            color: white;
            transform: translateY(-2px);
          }
        `;
            case 'outline':
                return `
          background: transparent;
          color: #007bff;
          border: 2px solid #007bff;
          
          &:hover {
            background: #007bff;
            color: white;
            transform: translateY(-2px);
          }
        `;
            default:
                return `
          background: #007bff;
          color: white;
          
          &:hover {
            background: #0056b3;
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0, 123, 255, 0.3);
          }
        `;
        }
    }}
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none !important;
  }
`;

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    onClick,
    disabled = false,
    type = 'button',
    className = '',
    ...props
}) => {
    return (
        <StyledButton
            variant={variant}
            size={size}
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={className}
            {...props}
        >
            {children}
        </StyledButton>
    );
};

export default Button; 