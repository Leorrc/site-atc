import styled from "styled-components";



interface SectionContainerProps {
  padding?: string;
  margin?: string;
  maxWidth?: string
  textAlign?: string

}

export const SectionContainer = styled.section<SectionContainerProps>`
  padding: ${(props) => props.padding ? props.padding : '10rem 0'} ;
  margin: ${(props) => props.margin} ;
  max-width: ${(props) => props.maxWidth} ;
  text-align: ${(props) => props.textAlign} ;
`;

