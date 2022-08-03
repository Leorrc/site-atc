import React from 'react';
import styled from "styled-components";
import pixelToRem from '../../utils/pxToRem'
import { device } from "../../utils/responsive";

import bg from '../../images/Cloudy.jpg'

interface GalleryFlexContainerProps2 {
  grid?: string;
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

export const ContainerBanner = styled.section<GalleryFlexContainerProps2>`
  display: flex;
  flex-direction: ${(props) => props.flex};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};

  @media ${device.mobile} {
    margin: ${pixelToRem(17)};
    align-items: center;
    justify-content: center;
  } 
`;

export const Bg = styled.div`
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;


`;

export const DivGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
`;


export const DivImage = styled.div`
  order: 1;
  width: 100%;

`;

export const DivText = styled.div`
  order: 0;

  h1 {
    font: 700 var(--title-font-size) var(--title-font);
    color: white;
    -webkit-font-smoothing: auto;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
  }

  Button {
    color: white;
  }
`;



