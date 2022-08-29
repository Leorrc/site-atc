import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';



export const ContainerHeader = styled.header`
  height: var(--header-height);
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--body-color);
  border-bottom: 1px solid #e4e4e4;
  transition: all .3s ease-out;
  width: 100%;
  position: fixed;


  @media (min-width: 992px) {
    
  }

`;

export const Container = styled.div`
  z-index: 100;
  align-items: center;
  margin: 0 1.5rem;
  width: 1120px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 992px) {

  }
`;

export const LogoA = styled.a`
  width: 250px;
  height: 71px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
`;

export const Nav = styled.nav`


  @media (max-width: 992px) {

  }
`;

export const MobileIcon = styled.div`


color: var(--base-color);
    font-size: 1.5rem;
    cursor: pointer;
  svg {
    color: var(--att-color);

  }
  
  @media (max-width: 992px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const Item = styled.li`
  height: 5rem;


`;

export const ItemLink = styled(LinkR)`
  color: var(--text-color);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font: 400 1rem var(--body-font);

  &.active {
    border-bottom: 3px solid var(--base-color-alt) ;
  }

  &:hover {
    color: var(--att-color);
    transition: 0.2s ease-in-out;
  }

`;





