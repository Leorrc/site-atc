import styled from "styled-components";
import banner from '../../../images/full/affi.svg'

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
  

  @media (min-width: 992px) {
    padding: 5rem 0;
    display: grid;
    
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
  width: 70%;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin: 0 auto;

  @media (min-width: 992px) {
    width: 60%;
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
    grid-template-columns: 1fr 1fr;


  }
`;