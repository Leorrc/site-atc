import styled from "styled-components";

interface TitleContainerProps {
  marginLeft?: string;
  marginRight?: string;
  textAlign?: string;
}

export const TitleContainer = styled.div<TitleContainerProps>`
  margin-left: ${(props) => props.marginLeft ? props.marginLeft : '1.5rem'};
  margin-right: ${(props) => props.marginRight ? props.marginRight : '1.5rem'};
  text-align: ${(props) => props.textAlign ? props.textAlign : 'center'};

  h2{
    font: 700 var(--title-font-size) var(--title-font);
    color: var(--title-color);
    -webkit-font-smoothing: auto;
  }
`;

