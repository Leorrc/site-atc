import styled from "styled-components";
import { Link as LinkS} from 'react-scroll';

import banner from '../../../images/full/about5.svg'
import mobile from '../../../images/full/mobile.svg'
import { device } from "../../../utils/responsive";


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

  @media ${device.laptopS} {
    max-width: 992px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Box = styled.div`
  display: grid;
  padding: 1.875rem 1.875rem;
  box-shadow: 0px 0px 12px rgb(0 0 0 / 8%);
  border-bottom: 0.25rem solid var(--att-color);
  border-radius: 0.25rem 0.25rem 0 0;
  background-color: rgba(250, 250, 250, 0.96);

  span {
    color: var(--att-color);
  }

  li {
    margin-bottom: 0.5rem;
    
  }

  button {
    margin: 0 auto;
  }

  @media (min-width: 992px) {
    padding: 0 1.875rem 1rem;

  
    li {
      font: var(--text-2);
      
    }


  }
`;

export const Title = styled.div`
  text-align: center;

  h2 {
    font: 700 var(--title-font-size) var(--title-font);
    color: var(--title-color);
    -webkit-font-smoothing: auto;
    position: relative;
}

  h4 {
    font-size: 1rem;
    color: var(--title-color);
    margin-bottom: 0.5rem;
}
  span {
    color: var(--att-color);
}

  @media (min-width: 992px) {
    padding: 0.5rem;
    
    h2 {
    font: 700 var(--title-font-size) var(--title-font);
    color: var(--title-color);
    -webkit-font-smoothing: auto;
    }

    h4 {
    font-size: 1.25rem;
    color: var(--title-color);
    margin: 0;
    }

    span {
      color: var(--att-color);
    }
  }
`;

export const TitleIcon = styled.div`
  padding: 1rem;
  margin: 0 auto;
  text-align: center;

  i {
  font-size: 3rem;
  color: var(--att-color);
  
  }
  
  h3 {
    color: var(--att-color);
    display: flex;

  }


@media (min-width: 992px) {


}
`;

export const Div1 = styled.div`
  display: grid;
  text-align: left;
  padding: 1rem 0;

  a {
    color: var(--att-color);
  }

  svg {
    color: var(--att-color);
  }

  @media (min-width: 992px) {
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 0;
  gap: 1.45rem;
  
  ul {
    
    padding: 0.5rem 0;
    text-align: justify;
  }

  }
`;

export const Div2 = styled.div`
  display: grid;
  padding: 1rem 0;
  text-align: left;

  a {
    color: var(--att-color);
  }

  svg {
    color: var(--att-color);
  }

  @media (min-width: 992px) {
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 0;
  gap: 1.45rem;
  text-align: left;

  ul {
    padding-top: 0.313rem;
    margin: auto;
    text-align: justify;
  }

  }
`;

export const TitleIcon2 = styled.div`
  padding: 1rem;
  margin: auto auto;
  text-align: center;

  i {
  font-size: 3rem;
  color: var(--att-color);
  
  }
  
  h3 {
    color: var(--att-color);
    display: flex;

  }


  @media (min-width: 992px) {


  }
`;




export const Scroll = styled(LinkS)`
  
  button {
    margin-top: 1.875rem;
  }

  @media (min-width: 992px) {
  button {
    margin-top: 1rem;
  }

}
`;

