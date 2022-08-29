import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

import bgemail from '../../images/full/pontefooter.svg'

export const Footer1 = styled.footer`

`;

export const SectionEmail = styled.section`
  padding: var(--header-height) 0;

  background-image: url(${bgemail});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center ;
  width: 100%;
  height: 100%; 

  @media (min-width: 992px) {
    padding: 8rem 0;
    display: grid;
}
`;

export const Container = styled.div`
  display: grid;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  text-align: center;


  @media (min-width: 992px) {
    margin: 0 auto;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

export const TitleEmail = styled.div`
  h2 {
    font: 700 var(--title-font-size) var(--title-font);
    color: var(--text-color-light);
    -webkit-font-smoothing: auto;
  }

  p {
    color: var(--text-color-light);
    margin-bottom: 1rem;
  }

  @media (min-width: 992px) {
    width: 100%;
  }
`;

export const Email = styled.form`
  margin-top: 30px;
  background: #fff;
  padding: 6px 10px;
  position: relative;
  border-radius: 50px;
  box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
  text-align: left;
  width: 90%;
  margin: 0 auto;

  input[type="email"] {
    border: 0;
    padding: 4px 8px;
    width: calc(100% - 100px);
  }

  input[type="submit"] { 
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    border: 0;
    background: none;
    font-size: 16px;
    padding: 0 20px;
    background: var(--att-color);
    color: #fff;
    transition: 0.3s;
    border-radius: 50px;
    box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
    cursor: pointer;
  }

  @media (min-width: 992px) {
    width: 60%;
    margin: 0 auto;
  }
`;

export const SectionInfo = styled.section`
  padding: 4rem 0;
  
  span {
    color: var(--att-color);
  }

  p {
    text-align: center;
    color: var(--title-color);
  }
  
  @media (min-width: 576px) {

}
`;

export const Container2 = styled.div`
  display: grid;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  img {
    margin-bottom: 2rem;
    width: auto;
  }
  


  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-left: auto;
    margin-right: auto;

    img {
      margin: 0 auto;
    }

  }

`;

export const Links = styled.div`
  display: grid;
  margin-bottom: 2rem;
  
  font: 600 1.375rem ;
  font-family: var(--title-font);
  font-style: normal;
  font-weight: 600;

  h4 {
    display: inline-block;
    margin-bottom: 1rem;
    position: relative;
    color: var(--title-color)  ;
    font: 700 1.31rem var(--title-font);

    :after {
    content: '';
    position: absolute;
    display: block;
    width: 56px;
    height: 2px;
    background: var(--att-color);
    bottom: 0;
    left: 0;
  }
  }

  @media (min-width: 576px) {
  text-align: left;

  h4 {
    justify-content: center;
    position: relative;

    :after {
    content: '';
    position: absolute;
    display: block;
    width: 56px;
    height: 2px;
    background: var(--att-color);
    bottom: 0;
  }
}
}
`;

export const Link = styled(LinkR)`
  text-decoration: none;
  color: var(--title-color);
  margin-bottom: 0.75rem;

  &:hover {
    color: var(--att-color);
    transition: color 0.3s ease-in-out;
  }

  @media (min-width: 576px) {
    text-align: left;

  }
`;

export const Socials = styled.div`
  display: grid;
  
  font: 600 1.375rem ;
  font-family: var(--title-font);
  font-style: normal;
  font-weight: 600;

  h4 {
    display: inline-block;
    margin-bottom: 1rem;
    position: relative;
    color: var(--title-color)  ;
    font: 700 1.31rem var(--title-font);

    :after {
    content: '';
    position: absolute;
    display: block;
    width: 148px;
    height: 2px;
    background: var(--att-color);
    bottom: 0;
    left: 0;
  }
}
  svg {
  display: inline-block;
  margin-top: 1rem;
  font-size: 2rem;
  color: var(--att-color);
}
  
    @media (min-width: 576px) {

    
  }
`;

export const Social = styled.a`

`;
