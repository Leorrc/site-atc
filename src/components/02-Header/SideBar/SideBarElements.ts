import styled from "styled-components";
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';


type Props = {
  isOpen: boolean
}

export const SidebarContainer = styled.aside<Props>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: var(--body-color);
  display: grid;
  align-items: center;
  left: 0;
  top: 0;
  transition: 0.3s ease-in-out;
  opacity: ${(props) => props.isOpen ? '1': '0'};
  top: ${(props) => props.isOpen ? '0': '-100rem'};

`;

export const CloseIcon = styled(FaTimes)`
  color: var(--att-color);
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: var(--att-color);
`;

export const SidebarMenu = styled.ul`
  display: grid;
  gap: 4rem;
  place-content: center;
  text-align: center;
`;

export const SidebarRoute = styled(LinkR)`
  font: 700 var(--title-font-size) var(--title-font);
  color: var(--title-color);
  -webkit-font-smoothing: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  transition: color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--att-color);
    transition: color 0.2s ease-in-out;
}

`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarScroll = styled.div`
  border-radius: 50px;
  background: var(--att-color);
  white-space: nowrap;
  padding: 1rem 4rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  a {
    font: 700 var(--title-font-size) var(--title-font);
  color: white;
  }

  &:hover {
    transition: 0.2s ease-in-out;
    background: #23d9c7;
    color: white;
  }
`;







