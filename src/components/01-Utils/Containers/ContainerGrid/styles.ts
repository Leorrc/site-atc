import styled from "styled-components";


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
  marginTop?: string
  maxWidth?: string;
  gap?: string
  columns?: string
}

export const MainContainer = styled.div<GalleryGridContainerProps>`
  display: grid;
  grid-auto-flow: ${(props) => props.grid};
  grid-template-columns: ${(props) => props.columns};
  gap: ${(props) => props.gap};
  margin-top: ${(props) => props.marginTop};
  justify-content: ${(props) => props.justifyContent};
  margin: ${(props) => props.margin ? props.margin : '0 auto'};
  max-width: ${(props) => props.margin ? props.maxWidth : '75rem'};
`;
