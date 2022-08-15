import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const ContainerLivros = styled.div`
  order: 0;
`;

export const Livro = styled.div`
  padding: 2rem 2rem;
  box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
  border-radius: 0.7rem 0.7rem 0.7rem 0.7rem;
  background: #FFFFFF;
`;

export const ContainerLinks = styled.div`
  order: 1;
`;

export const Link = styled.div`
  padding: 2rem 2rem;
  box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
  border-radius: 0.7rem 0.7rem 0.7rem 0.7rem;
  background: #FFFFFF;

`;
