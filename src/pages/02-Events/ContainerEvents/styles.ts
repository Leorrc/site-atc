import styled from "styled-components";
import banner from "../../../images/full/evento.png";
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

  @media ${device.laptop} {
    max-width: ${pixelToRem(1024)};
    padding: 0 64px; 
  }
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

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-right: auto;
  margin-left: auto;
  padding-top: ${pixelToRem(20)};
  padding-bottom: ${pixelToRem(90)};

  .title1 {
    font: var(--font-mobile-text-1);
  }

  @media ${device.laptop} {
    max-width: ${pixelToRem(1024)};
    display: flex;
    flex-direction: row;

    img {
      width: 50%;
    } 
  }
`;

export const Paragrafo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  p {
    text-align: justify;
  }

  span {
    font-weight: 700;
    color: black;
  }

  button {
    margin-top: 2rem;
  }

  @media ${device.laptop} {
    button {
      margin-right: 2rem;
    }
  }
`;
