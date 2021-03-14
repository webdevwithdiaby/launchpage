import styled, { css } from "styled-components";

const CTAStyles = css`
  border: 1px solid #e52f37;
  background-color: #e52f37;
  font-weight: 700;
  color: #fff;

  &:hover {
    color: #e52f37;
    background-color: #fff;
  }
`;

const PrimaryButtonStyles = css`
  background-color: #e52f37;
  font-weight: 700;
  color: #fff;

  &:hover {
    box-shadow: 0 2rem 4rem rgba(0,0,0,.4);
  }
`;

const getButtonStyle = (props) => {
  if (props.asCTA) return CTAStyles;
  if (props.variant === 'primary') return PrimaryButtonStyles;

  return;
};

export const ButtonContainer = styled.button`
  font-size: 1.6rem;
  padding: 1.2rem 2rem;
  border-radius: 10rem;
  background-color: transparent;
  border: none;
  outline: none;
  ${getButtonStyle}
`;
