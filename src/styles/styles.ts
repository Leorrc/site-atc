import styled from "styled-components";
import pixelToRem from "../utils/pxToRem";
import { device } from "./responsive";

interface GalleryFlexContainerProps {
  flex?: "row" | "column";
  width?: string;
  margin?: string;
  padding?: string;
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
}
interface ImageGalleryProps {
  width?: number;
  height?: number;
  src: string;
  borderRadius?: number;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

export const Container = styled.div<GalleryFlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flex};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  @media ${device.mobile} {
    margin: ${pixelToRem(17)};
    align-items: center;
    justify-content: center;
  }
`;

export const Header = styled.div`
  display: flex;
  padding-bottom: ${pixelToRem(75)};
  @media ${device.mobile} {
    padding-bottom: ${pixelToRem(78)};
  }
`;


export const Main = styled.div<GalleryFlexContainerProps>`
  display: flex;
  flex-direction: column;
  max-width: ${pixelToRem(815)};
  padding-bottom: ${pixelToRem(103)};
  @media ${device.mobile} {
    max-width: 100vw;
    align-items: center;
    justify-content: center;
  }
`;

export const FirstTitle = styled.div`
  color: var(--sun);
  font: var(--text-4);
  text-transform: uppercase;
  letter-spacing: ${pixelToRem(5)};
  @media ${device.mobile} {
    font: var(--font-mobile-text-1);
    letter-spacing: ${pixelToRem(5)};
    padding-bottom: ${pixelToRem(11)};
  }
`;

export const SecondTitle = styled.p`
  color: var(--text);
  font: var(--font-display);
  @media ${device.mobile} {
    font: var(--font-mobile-heading-1);
    text-align: center;
  }
`;

export const StateFlag = styled.image`
  width: ${pixelToRem(619)};
  height: ${pixelToRem(420)};
  position: absolute;
  background-image: url("/images/hero-img.png");
  background-repeat: no-repeat;
  right: ${pixelToRem(100)};
  top: ${pixelToRem(150)};
  max-width: ${pixelToRem(815)};
  @media ${device.mobile} {
    position: relative;
    order: 4;
    width: ${pixelToRem(307)};
    left: ${pixelToRem(55)};
  }
  @media (max-width: ${pixelToRem(1200)}) {
    position: relative;
    order: 4;
    width: ${pixelToRem(472)};
    height: ${pixelToRem(600)};
    left: 0;
  }
`;

export const DivButton = styled.div`
  width: ${pixelToRem(264)};
  padding-top: ${pixelToRem(32)};
  @media ${device.mobile} {
    padding-bottom: ${pixelToRem(63)};
  }
`;