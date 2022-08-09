import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';


export const Nav = styled.nav`
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 2rem;
  display: flex;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: var(--body-color);
  width: 100%;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const NavLogo = styled(LinkR)`
  color: var(--red);
  justify-self: flex-start;
  cursor: pointer;
  font: 700 1.31rem var(--title-font);
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  
`;

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -1.375rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: var(--text-color);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf ;
  }

  &:hover {
    color: #9EDFE9;
    transition: 0.2s ease-in-out;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 150px;
  background: #9EDFE9;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--base-color);
    color: #010606;
  }
`


