import styled from "styled-components";
import banner from '../../../images/full/party.svg'
import pixelToRem from "../../../utils/pxToRem";

export const Section = styled.section`
  padding: calc(12rem + var(--header-height)) 0;

  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center ;
  width: 100%;
  height: 100%;

  @media (min-width: 1440px) {
    padding: calc(12rem + var(--header-height)) 0;
    margin-top: ${pixelToRem(72)}
  }
`;

