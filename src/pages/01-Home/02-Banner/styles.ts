import styled from "styled-components";
import { device } from "../../../utils/responsive";
import banner from "../../../images/hero.jpg";

export const ContainerSection = styled.section`
  padding: calc(5rem + var(--header-height)) 0;
  display: flex;
  background: #6aaeb9;
  background: -webkit-linear-gradient(to right, #548b94, #5f9ca6);
  background: linear-gradient(to right, #548b94, #5f9ca6);

  p {
    color: rgba(255, 255, 255, 0.6);
  }

  @media (min-width: 992px) {
    padding: calc(10rem + var(--header-height)) 0;
    background-image: url(${banner});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;

    h2 {
      color: white;
    }

    p {
      color: var(--title-color);
      -webkit-font-smoothing: antialiased;
    }
  }
`;

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  margin: 0 auto;

  @media (min-width: 992px) {
    gap: 0;
    max-width: 1120px;
    margin-left: auto;
    margin-right: auto;
    grid-auto-flow: column;
    justify-content: space-between;
    margin: 0 auto;
  }
`;

export const DivImage = styled.div`
  @media (min-width: 992px) {
    order: 1;
  }
`;

export const DivText = styled.div`
  display: grid;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  text-align: center;

  h1 {
    font: 700 var(--title-font-size) var(--title-font);
    color: white;
    -webkit-font-smoothing: auto;
    margin-bottom: 1rem;
  }

  span {
    color: var(--att-color);
  }

  p {
    margin-bottom: 2rem;
  }

  button {
    margin: 0 auto;
  }

  @media (min-width: 992px) {
    text-align: left;
    order: 0;
    max-width: 32rem;
    gap: 0;
    display: flex;
    flex-direction: column;

    span {
      color: var(--att-color);
    }

    h1 {
      color: var(--title-color);
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 56px;
      line-height: 84px;
      margin-bottom: 1rem;
    }

    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 0rem;
    }

    button {
      margin: auto 0;
    }
  }
`;
