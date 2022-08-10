import styled from "styled-components";

interface TitleContainerProps {
  marginLeft?: string;
  marginRight?: string;
  textAlign?: string;
  maxWidth?: string;
  paddingBotton?: string;
}

export const TitleContainer = styled.div<TitleContainerProps>`
  max-width: ${(props) => props.maxWidth ? props.maxWidth : '32rem'};
  margin-left: ${(props) => props.marginLeft ? props.marginLeft : 'auto'};
  margin-right: ${(props) => props.marginRight ? props.marginRight : 'auto'};
  text-align: ${(props) => props.textAlign ? props.textAlign : 'center'};
  padding-bottom: ${(props) => props.paddingBotton};

  h2{
    font: 700 var(--title-font-size) var(--title-font);
    color: var(--title-color);
    -webkit-font-smoothing: auto;
  }


`;

