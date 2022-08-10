import styled from "styled-components";

export const Cards = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 3rem;

  @media (max-width: 1200px){
    grid-template-columns: 1fr; 
  }

`;