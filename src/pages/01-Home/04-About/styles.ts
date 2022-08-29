import styled from "styled-components";
import { Link as LinkS} from 'react-scroll';

import banner from '../../../images/full/n1.svg'
import mobile from '../../../images/full/mobile.svg'


export const ContainerSection = styled.section`
  padding: calc(5rem + var(--header-height)) 0;

  background-image: url(${mobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center ;
  width: 100%;
  height: 100%; 


  @media (min-width: 992px) {
    padding: 7rem 0;
    display: grid;

  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center ;
  width: 100%;
  height: 100%; 
  }
`;


export const Container = styled.div`
  display: grid;
  gap: 2rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  text-align: center;

  @media (min-width: 992px) {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    margin: 0 auto;
  }
`;

export const Box = styled.div`
  display: grid;
  padding: 1.875rem 1.875rem;
  box-shadow: 0px 0px 12px rgb(0 0 0 / 8%);
  border-bottom: 0.25rem solid var(--att-color);
  border-radius: 0.25rem 0.25rem 0 0;
  background: #FAFAFA;

  span {
    color: var(--att-color);
  }

  li {
    gap: 1rem;
    align-items: center;
  }

  button {
    margin: 0 auto;
  }

  @media (min-width: 992px) {



  }
`;

export const Ul = styled.ul`
  text-align: left;

@media (min-width: 992px) {

  gap: 1rem;
  
}
`;

export const Title = styled.div`
  text-align: center;

  h2 {
    font: 700 var(--title-font-size) var(--title-font);
    color: var(--title-color);
    -webkit-font-smoothing: auto;
}

  h4 {
    font-size: 1rem;
    color: var(--title-color);
    margin-bottom: 2rem;
}
  span {
    color: var(--att-color);
}


  @media (min-width: 992px) {
    

    h2 {
    font: 700 var(--title-font-size) var(--title-font);
    color: var(--title-color);
    -webkit-font-smoothing: auto;
    margin-bottom: 0.75rem;
    }

    h4 {
    font-size: 1.25rem;
    color: var(--title-color);
    margin-bottom: 2rem;
    }

    span {
      color: var(--att-color);
    }
  }
`;

export const TitleIcon = styled.div`



  
  i {
  display: block;
  font-size: 3rem;
  color: var(--att-color);
  }
  
  h3 {
    color: var(--att-color);
  }

@media (min-width: 992px) {
  margin-bottom: 1rem;

  i {
  color: var(--att-color);
  
  }
  
  h5 {
    color: var(--title-color);
  }
}
`;


export const Div1 = styled.div`
  display: grid;
  margin: 1rem 0;
  text-align: center;


  @media (min-width: 992px) {
  display: inline-flex;
  gap: 12px;

  
  }
`;

export const Div2 = styled.div`
  display: grid;
  margin: 1rem 0;
  text-align: center;

  @media (min-width: 992px) {
  display: inline-flex;
  gap: 12px;


  
  }
`;

export const Div3 = styled.div`
  display: grid;
  margin: 1rem 0;
  text-align: center;

  @media (min-width: 992px) {
  display: inline-flex;
  gap: 12px;
  }
`;


