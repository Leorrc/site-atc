import styled from "styled-components";
import banner from '../../../images/full/service.jpg'

export const SectionBg = styled.section`
  padding: 6rem 0;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center ;
  width: 100%;
  height: 100%;

  @media (min-width: 992px) {
    padding: calc(10rem + var(--header-height)) 0;
    display: grid;
  }
`;

export const ContainerSection = styled.section`
  padding: var(--header-height) 0;
  display: grid;
  
  @media (min-width: 992px) {
    padding: 5rem 0;

  }
`;

export const Tittle = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font: 700 var(--title-font-size) var(--title-font);
    color: var(--title-color);
    -webkit-font-smoothing: auto;


    span {
      color: var(--att-color);
    }

}
`;

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  padding: 0 2rem;
  margin: 0 auto;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
`;

export const Parceiro = styled.div`
  display: grid;
  grid-template-columns: 1fr ;
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 992px) {
    
  }
`;

export const Pic = styled.div`
  margin: 0 auto;
  width: 70%;

  @media (min-width: 576px) {
    width: 50%;
  }

  @media (min-width: 992px) {
    width: 80%;
  }

`;

export const Infos = styled.div`
  text-align: center;
  a {
    font: var(--text-4);
    color: var(--att-color);
  }

  p {
    font: var(--text-2);
  }
  
`;



