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
  max-width: 39rem;
  text-align: left;

  h1 {
    font: 700 3rem var(--title-font);
    color: var(--title-color);
    line-height: 3.5rem;
    -webkit-font-smoothing: auto;
    margin-bottom: 1rem;
  }

    
  

  span {
    color: var(--base-color);
  }

  p {
    margin-bottom: 2rem;
    color: var(--title-color);
    font-weight: 500 bold;
    font-size: 1.25rem;
  }

  Button {
    color: white;
  }
`;



