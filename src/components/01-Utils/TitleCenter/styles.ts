import styled from "styled-components";

interface TitleContainerProps {
  marginLeft?: string;
  marginRight?: string;
  textAlign?: string;
  maxWidth?: string;
  paddingBotton?: string;
  marginBotton?: string;
}

export const TitleContainer = styled.div<TitleContainerProps>`
  max-width: ${(props) => props.maxWidth};
  margin-left: ${(props) => props.marginLeft ? props.marginLeft : 'auto'};
  margin-right: ${(props) => props.marginRight ? props.marginRight : 'auto'};
  text-align: ${(props) => props.textAlign ? props.textAlign : 'center'};
  padding-bottom: ${(props) => props.paddingBotton};
  margin-bottom: ${(props) => props.marginBotton};


  h2{
    font: 700 var(--title-font-size) var(--title-font);
    color: var(--title-color);
    -webkit-font-smoothing: auto;
    margin-bottom: 1rem;
  }

  p {
    font: var(--subtitle-font-size);
  }
`;
