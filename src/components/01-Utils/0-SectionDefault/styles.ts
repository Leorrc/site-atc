import styled from "styled-components";



interface SectionContainerProps {
  padding?: string;
  paddingTop?: string
  paddingBotton?: string
  margin?: string;
  maxWidth?: string
  textAlign?: string
  backgroundColor?: string
  marginTop?: string
}

export const SectionContainer = styled.section<SectionContainerProps>`
  padding: ${(props) => props.padding ? props.padding : '10rem 0'} ;
  padding-top: ${(props) => props.paddingTop} ;
  padding-bottom: ${(props) => props.paddingBotton} ;
  margin: ${(props) => props.margin} ;
  margin-top: ${(props) => props.marginTop} ;
  max-width: ${(props) => props.maxWidth} ;
  text-align: ${(props) => props.textAlign} ;
  background-color: ${(props) => props.backgroundColor} ;
`;



