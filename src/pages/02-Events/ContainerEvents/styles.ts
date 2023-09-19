import styled from "styled-components";
import banner from "../../../images/full/noticia.webp";
import pixelToRem from "../../../utils/pxToRem";
import { device } from "../../../utils/responsive";

export const SectionBg = styled.section`
  padding: calc(5rem + var(--header-height)) 0;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;

  @media ${device.laptopS} {
    padding: calc(10rem + var(--header-height)) 0;
    display: grid;
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
  padding-bottom: ${pixelToRem(90)};

  .title1 {
    font: var(--font-mobile-text-1);
  }

  @media ${device.laptop} {
    max-width: ${pixelToRem(1024)};
  }
`;
