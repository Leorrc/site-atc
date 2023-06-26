import styled from "styled-components";
import banner from "../../../images/full/cookie.png";
import pixelToRem from "../../../utils/pxToRem";
import { device } from "../../../utils/responsive";

export const SectionBg = styled.section`
  padding: calc(2rem + var(--header-height)) 0;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 80%;

  @media ${device.laptopS} {
    padding: calc(10rem + var(--header-height)) 0;
    display: grid;
  }

  @media ${device.mobile} {
  background-position: center;

  }
`;

export const Section = styled.section`
  display: flex;
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;
  max-width: 1120px;
`;

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-top: ${pixelToRem(20)};


  .title1 {
    font: var(--font-mobile-text-1);
  }

  @media ${device.laptop} {
    max-width: ${pixelToRem(1024)};
  }
`;

export const DivP = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-top: ${pixelToRem(20)};
  padding-bottom: ${pixelToRem(90)};
  p {
    font-size: 0.938rem;
    font-weight: 500;
  }

  strong {
    color: var(--title-color)
  }

  .title1 {
    font: var(--font-mobile-text-1);
  }

  @media ${device.laptop} {
    max-width: ${pixelToRem(1024)};
  }
`;

export const Tittle = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font: 700 var(--title-font-size) var(--title-font);
    color: var(--title-color);
    -webkit-font-smoothing: auto;

    span {
      color: var(--att-color);
    }
  }
`

