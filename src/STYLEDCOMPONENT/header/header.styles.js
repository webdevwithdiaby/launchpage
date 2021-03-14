import styled, { css } from "styled-components";

import { MdMenu, MdClose } from "react-icons/md";

export const HeaderContainer = styled.header`
  min-height: 8vh;
  background-color: #fff;
`;

export const Brand = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #e52f37;
`;

export const HeaderNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const NavigationContainer = styled.nav`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  position: fixed;
  top: 12.5vh;
  left: 0;
  right: 0;
  gap: 1.5rem;
  padding: 2rem 0;
  height: 470px;
  transition: all 0.3s ease-in;

  @media only screen and (min-width: 1000px) {
    all: unset;
    display: flex !important;
    align-items: center;
  }
`;

export const Link = styled.a`
  font-size: 1.7rem;
  text-transform: uppercase;
  font-weight: 600;
  color: #071e55;
  cursor: pointer;

  &:hover {
    color: #e52f37;
  }
  @media only screen and (min-width: 1000px) {
    margin-right: 1.5rem;
  }
`;

export const MenuBox = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid #e52f37;
  color: #e52f37;
`;

const IconStyles = css`
  font-size: 4rem;
  color: #e52f37;

  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export const MenuIcon = styled(MdMenu)`
  ${IconStyles}
`;

export const CloseIcon = styled(MdClose)`
  ${IconStyles}
`;
