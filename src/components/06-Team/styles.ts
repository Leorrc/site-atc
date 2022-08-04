import styled from "styled-components";
import { device } from "../../utils/responsive";
import pixelToRem from '../../utils/pxToRem'
interface GalleryFlexContainerProps5 {
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

export const SectionTeam = styled.section<GalleryFlexContainerProps5>`
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

  background: var(--body-color);
`;

