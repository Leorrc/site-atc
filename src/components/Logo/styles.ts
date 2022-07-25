import styled from "styled-components";
import pixelToRem from '../../utils/pxToRem'
import { device } from '../../styles/responsive'

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

export const LogoAtc = styled.image<GalleryFlexContainerProps>`
  width: ${pixelToRem(300)};
  height: ${pixelToRem(41)};
  background-image: url("/images/logo-atc.svg");
  background-repeat: no-repeat;
`;