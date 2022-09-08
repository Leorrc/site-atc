import styled from "styled-components";

export const Section = styled.section`
  padding: calc(5rem + var(--header-height)) 0;

  @media (min-width: 992px) {
    padding: calc(10rem + var(--header-height)) 0;
    background: var(--body-color);

  }
`;