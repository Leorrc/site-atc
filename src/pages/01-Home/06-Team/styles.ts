import styled from "styled-components";

export const ContainerSection = styled.section`
  padding: calc(5rem + var(--header-height)) 0;

  @media (min-width: 992px) {
    padding: 10rem 0;
    display: grid;
  }
`;

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  span {
    color: var(--att-color);
  }
  @media (min-width: 992px) {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    margin: 0 auto;
  }
`;

export const ContainerMember = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: auto;
    margin-right: auto;
    margin: 0 auto;
  }
`;