import styled from "styled-components";
import { device } from "../../../utils/responsive";
import banner from '../../../images/full/bgbanner.svg'

export const ContainerSection = styled.section`
  padding: calc(5rem + var(--header-height)) 0;
  display: flex;
  background: #6AAEB9; 
  background: -webkit-linear-gradient(to right, #548b94, #5f9ca6);  
  background: linear-gradient(to right, #548b94, #5f9ca6); 

  p {
    color: rgba(255, 255, 255, 0.6);
  }

  @media (min-width: 992px) {
    padding: calc(10rem + var(--header-height)) 0;
    background: var(--body-color);

    /* background-image: url(${banner});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center ;
    width: 100%;
    height: 100%; */
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
    max-width: 912px;
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

  h2 {
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
    

    span {
    color: var(--att-color);
  }
  

    h2 {
      color: var(--title-color);
    }
    order: 0;
    max-width: 32rem;
    text-align: left;
    

  
    
  button {
    margin: auto 0;
  }
  }


`;




