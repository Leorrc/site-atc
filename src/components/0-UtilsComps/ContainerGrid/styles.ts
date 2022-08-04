import styled from "styled-components";
import pixelToRem from '../../../utils/pxToRem'
import { device } from "../../../utils/responsive";


interface GalleryGridContainerProps {
  grid?: "row" | "column";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";

  margin?: string;
  maxWidth?: string;
  gap?: string
}

export const MainContainer = styled.div<GalleryGridContainerProps>`
  display: grid;
  grid-auto-flow: ${(props) => props.grid};
  justify-content: ${(props) => props.justifyContent ? props.justifyContent : 'space-between'};
  margin: ${(props) => props.margin ? props.margin : '0 auto'};
  max-width: ${(props) => props.margin ? props.maxWidth : '1200px'};
  gap: ${(props) => props.gap};
`;

