import styled from "styled-components";
import banner from '../../../images/full/mate.jpg'
import pixelToRem from "../../../utils/pxToRem";
import { device } from '../../../utils/responsive'

export const SectionBg = styled.section`
  padding: calc(5rem + var(--header-height)) 0;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center ;
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


`;

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-top: ${pixelToRem(20)};

  @media ${device.laptop} {
  max-width: ${pixelToRem(1024)};
  }
  
`;

export const ContainerBook = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${pixelToRem(3.6)};
  margin-top: ${pixelToRem(32)};
  padding-bottom: ${pixelToRem(32)};

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
    gap: ${pixelToRem(7.2)};
  }
`;

export const ContainerLink = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${pixelToRem(3.6)};
  margin-top: ${pixelToRem(32)};
  padding-bottom: ${pixelToRem(96)};

  @media ${device.laptop} {
    margin-top: 3rem;
    gap: ${pixelToRem(7.2)};
    margin-left: auto;
    margin-right: auto;
    max-width: ${pixelToRem(610)};
  }
`;