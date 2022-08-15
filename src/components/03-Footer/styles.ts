import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

type Props = {
  isOpen: boolean
}


export const FooterDefault = styled.footer`
  background: var(--body-color);
  height: 30rem;
  box-sizing: border-box;
`;


export const ContainerGridFooter = styled.section`
  display: grid;
  gap: 2rem;
  grid-auto-flow: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5rem;
`;

// box email //
export const BoxEmail = styled.div`
  padding: 4rem 4rem;
  box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
  border-radius: 0.7rem 0.7rem 0.7rem 0.7rem;
  text-align: center;
  margin: 0 auto;
  background: #FFFFFF;


  h4 {
    font: 700 1.31rem var(--title-font);
    margin-bottom: 0.313rem;
    color: #37517e;
  }

  p {
    display: block;
    font-size: 0.938rem;
    padding-bottom: 0.625rem;
    position: relative;
    font-weight: 500;
  }
`;

export const FormEmail = styled.form`
  
  input[type="submit"] {
    width: 7.5rem;
    border: 0;
    background: none;
    font-size: 1rem;
    padding: .2rem 0.5rem;
    background: #47b2e4;
    color: #fff;
    transition: 0.3s;
    border-radius: 50px;
    box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
  }
  
  input[type="email"] {
    width: 10rem;
    padding: .2rem 0.5rem;
    border: 0;
    transition: 0.3s;
    border-radius: 50px;
    box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
  }
`;
// box email //

// box links //
export const DivLinks = styled.div`
  
  h4 {
    font: 700 1.31rem var(--title-font);
    margin-bottom: 0.313rem;
    color: #37517e;
  }
`;

export const DivUl = styled.ul`
  display: grid;
  margin-top: 1rem;
`;

export const ListMe = styled(LinkR)`
  display: flex;
  justify-content: start;
  font: 400 1rem var(--title-font);
  margin-bottom: 0.313rem;
  transition: 0.2s ease-in-out;
  color: black;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const DivRedeSociais = styled.div`
  
  `;

export const DivText = styled.div`
  margin-bottom: 7rem;

  h4 {
    font: 700 1.31rem var(--title-font);
    margin-bottom: 0.313rem;
    color: #37517e;
  }

  p {
    display: block;
    font-size: 0.938rem;
    padding-bottom: 0.625rem;
    position: relative;
    font-weight: 500;
  }
`;

export const DivSocial = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 3rem;
  


  a {
    transition: ease-in-out 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 2rem;
    height: 2rem;
    background: #eff2f8;
  }
  

  svg {
    color: #37517e;
    font-size: 1.2rem;
    margin: 0 0.125rem;
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  background-color: var(--base-color);
  padding: 1.25rem 0;
`;

export const Copyright = styled.div`
  color: #fff;
  margin-left: 2rem;
`;





