import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

import pixelToRem from "../../../utils/pxToRem";
import { device } from "../../../utils/responsive";

export const ContainerHeader = styled.header`
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 2rem;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: var(--body-color);
  width: 100%;
  max-height: ${pixelToRem(72)};

  @media ${device.laptop} {
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  height: 72px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;
`;

export const LogoA = styled(LinkR)`
  width: auto;
  height: 72px;

  img {
    width: auto;
    height: 72px;
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
  gap: ${pixelToRem(10)};
  align-items: center;
  justify-content: center;

  a {
    font: 400 1rem var(--body-font);
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const Item = styled.li`
  text-align: center;
`;

export const ItemLink = styled(LinkR)`
  color: var(--text-color);
  text-decoration: none;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid var(--base-color-alt);
  }
  &:hover {
    color: var(--att-color);
    transition: 0.2s ease-in-out;
  }
`;

export const Wrapper = styled.a`
  background-color: var(--att-color);
  color: white;
  align-items: center;
  justify-content: center;
  border-radius: ${pixelToRem(9)};
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: 700;
  font-size: ${pixelToRem(16)};

  :hover {
    background: var(--att-color2);
    color: var(--shape-hover);
    transition: all 0.85s;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ItemScroll = styled(LinkS)`
  color: var(--text-color);
  text-decoration: none;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid var(--base-color-alt);
  }
  &:hover {
    color: var(--att-color);
    transition: 0.2s ease-in-out;
  }
`;
