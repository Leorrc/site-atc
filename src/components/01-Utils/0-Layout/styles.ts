import styled from "styled-components";

interface LayoutProps {
  maxWidth?: string
  padding?: string
  width?: string
  margin?: string
  children?: JSX.Element | JSX.Element[]
}

export const Container = styled.div<LayoutProps>`
  max-width: ${(props) => props.maxWidth ? props.maxWidth : '904px'};
  padding: ${(props) => props.padding ? props.padding : '0 20px'};
  width: ${(props) => props.width ? props.width : '100%'};
  margin: ${(props) => props.margin ? props.margin : '0 auto'};
`;