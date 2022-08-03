import styled from "styled-components";
import pixelToRem from '../../utils/pxToRem'
import { device } from "../../utils/responsive";


interface GalleryFlexContainerProps3 {
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

export const SectionAbout = styled.section<GalleryFlexContainerProps3>`
  display: flex;
  flex-direction: ${(props) => props.flex};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};

  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    margin: ${pixelToRem(17)};
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerAbout = styled.div`
  display: grid;
  margin-left: auto;
  margin-right: auto;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const DivTitle = styled.div`
  margin: 0 auto;
  margin-bottom: 2rem;
  justify-content: center;

  h2{
    font: 700 var(--title-font-size) var(--title-font);
    color: var(--title-color);
    -webkit-font-smoothing: auto;
  }
`;

export const DivPs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const DivP1 = styled.div`

`;

export const DivP2 = styled.div`

  button {
    margin-top: 2rem;
  }

  span {
    font: 700 1.35rem var(--title-font);
    color: var(--title-color);
    -webkit-font-smoothing: auto;
  }
`;


