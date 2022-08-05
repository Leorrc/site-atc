import styled from "styled-components";


interface GalleryFlexContainerProps {
  flex?: "row" | "column";
  flexWrap?: "wrap" | "nowrap";
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

export const MainContainer = styled.div<GalleryFlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flex};
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContent};
  margin: ${(props) => props.margin};
  max-width: ${(props) => props.maxWidth};
  gap: ${(props) => props.gap};
`;



