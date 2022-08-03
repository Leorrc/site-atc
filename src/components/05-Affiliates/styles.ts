import styled from "styled-components";
import pixelToRem from '../../utils/pxToRem'
import { device } from "../../utils/responsive";


interface GalleryFlexContainerProps4 {
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

export const SectionAffiliates = styled.section<GalleryFlexContainerProps4>`
  display: flex;
  /* flex-direction: ${(props) => props.flex}; */
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  /* align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent}; */

  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    margin: ${pixelToRem(17)};
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerTitle = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: center;
`;

export const DivText = styled.div`

  h2 {
    font: 700 var(--title-font-size) var(--title-font);
    color: var(--title-color);
    -webkit-font-smoothing: auto;
  }
`;

export const Cards = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 3rem;
`;

export const Card = styled.div`
  padding: 3.625rem 2rem;
  box-shadow: 0px 0px 12px rgb(0 0 0 / 8%);
  border-bottom: 0.25rem solid var(--base-color);
  border-radius: 0.25rem 0.25rem 0 0;
  text-align: center;
  padding-left: 3rem;
  padding-right: 3rem;

  h3 {
    display: block;
    margin-bottom: 1.5rem;
    font-weight: 500;
    font-size: 20px;
    color: var(--base-color);
  }

  ul, li {
    display: list-item;
    text-align: left;
    padding: 0.3rem 0;
  }

  button {
    margin-top: 1.5rem;
  }
`;
