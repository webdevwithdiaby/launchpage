import styled from "styled-components";

export const Input = styled.input`
  display: inline-block;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 1.4rem;
  color: #333;
  background-color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 10rem;

  &:focus {
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.24);
  }

  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`;
