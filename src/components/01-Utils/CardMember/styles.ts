import styled from "styled-components";
import { device } from "../../../utils/responsive";
import pixelToRem from "../../../utils/pxToRem";

export const CardDefault = styled.div`
  display: flex;
  align-items: flex-start;
  box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
  padding: 0.938rem;
  border-radius: 0.313rem;
  background: #fff;
  transition: 0.5s;

  @media (max-width: 576px) {
    display: grid;
  }
`;

export const Pic = styled.div`
  overflow: hidden;
  width: 30%;
  border-radius: 50%;

  @media (max-width: 576px) {
    width: 50%;
    margin: 0 auto;
  }
`;

export const MemberInfos = styled.div`
  padding: 1rem;

  font: var(--title-font);

  h4 {
    font-weight: 700;
    margin-bottom: 0.313rem;
    font-size: 1.25rem;
    color: var(--att-color);
  }

  span {
    display: block;
    font-size: 0.938rem;
    padding-bottom: 0.625rem;
    position: relative;
    font-weight: 500;

    :after {
      content: "";
      position: absolute;
      display: block;
      width: 50px;
      height: 1.5px;
      background: var(--att-color);
      bottom: 0;
      left: 0;
    }
  }

  p {
    margin: 0.625rem 0 0 0;
    font-size: 0.938rem;
    font-weight: 500;
  }
`;

export const Audio = styled.div`
  width: 15rem;
  margin-top: 0.75rem;

  @media ${device.mobileL} {
    width: 20rem;
  }

  @media ${device.laptopS} {
    width: 25rem;
  }
`;

export const Social = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  a {
    transition: ease-in-out 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 2rem;
    height: 2rem;
    background: #eff2f8;
  }

  svg {
    color: var(--att-color);
    font-size: 1.5rem;
    margin: 0 0.125rem;
  }
`;
