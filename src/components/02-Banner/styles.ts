import styled from "styled-components";


export const ContainerBannerGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

`;


export const DivImage = styled.div`
  order: 1;
  width: 100%;

`;

export const DivText = styled.div`
  order: 0;
  max-width: 24rem;
  text-align: left;

  h1 {
    font: 700 var(--title-font-size) var(--title-font);
    color: var(--title-color);
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



