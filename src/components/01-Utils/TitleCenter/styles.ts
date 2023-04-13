import styled from "styled-components";
import { device } from "../../../utils/responsive";

interface TitleContainerProps {
  marginLeft?: string;
  marginRight?: string;
  textAlign?: string;
  maxWidth?: string;
  padding?: string;
  marginBotton?: string;
  marginTop?: string;
}

export const TitleContainer = styled.div<TitleContainerProps>`
  max-width: ${(props) => props.maxWidth};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  padding: ${(props) => (props.padding ? props.padding : "1rem 0")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "2rem")};
  margin-bottom: ${(props) => props.marginBotton};

  h1 {
    font: var(--font-mobile-heading-1);
    color: var(--title-color);
    -webkit-font-smoothing: auto;
  }

  p {
    font: var(--subtitle-font-size);
  }

  @media ${device.tablet} {
    h1 {
      font: var(--font-heading-1);
    }
  }
`;
