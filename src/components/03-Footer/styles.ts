import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'

import bgemail from '../../images/full/pontefooter.svg'

export const Footer1 = styled.footer`
  width: 100%;
  background: #FAFAFA;
`;

export const SectionEmail = styled.section`
  padding: 3.125rem 0;

  background-image: url(${bgemail});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center ;
  width: 100%;
  height: 100%; 

  @media (min-width: 992px) {
    padding: 3.125rem 0;
    display: grid;
}
`;

export const Container = styled.div`
  display: grid;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  text-align: center;


  @media (min-width: 992px) {
    margin-left: 12rem;
    margin-right: 12rem;
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

export const Email = styled.label`
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
  padding: 1rem 0;
  background-color: var(--base-color-second);

  span {
    color: var(--att-color);
  }

  p {
    text-align: center;
    color: var(--text-color);
    
  }
`;

export const Container2 = styled.div`
  display: grid;
  margin-left: 1.5rem;
  margin-right: 1.5rem;


  img {
    margin-bottom: 2rem; 
  }

  @media (min-width: 832px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-left: 10rem;
    margin-right: 10rem;


    img {
      width: auto;
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
    margin: 0 auto;

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

export const Scroll = styled(LinkS)`
  text-decoration: none;
  color: var(--title-color);
  margin-bottom: 0.75rem;
  cursor: pointer;

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
  margin-bottom: 2rem;
  margin: 0 auto;

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

  h3 {
    position: relative;
    margin-bottom: 1rem;

    
    color: var(--title-color)  ;
    font: 700 1.31rem var(--title-font);

    :after {
    content: '';
    position: absolute;
    display: block;
    width: 148px;
    height: 2px;
    background: var(--att-color);
    top: -10;
  }
  }
`;

export const Social = styled.div`
  display: flex;

  gap: 2rem;

  svg {

  font-size: 3rem;
  color: var(--att-color);
}
`;