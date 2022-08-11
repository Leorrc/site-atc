import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';


export interface ButtonProps {
  text?: string
  fullWidth?: boolean
}

export const ContainerText = styled.div`
  padding: 3.625rem 2rem;
  box-shadow: 0px 0px 12px rgb(0 0 0 / 8%);
  border-bottom: 0.25rem solid var(--base-color);
  border-radius: 0.25rem 0.25rem 0 0;
  text-align: center;
  padding-left: 3rem;
  padding-right: 3rem;
  background: #FAFAFA;

  h3 {
    display: block;
    margin-bottom: 1.5rem;
    font-weight: 500 bold;

    font-size: 1.25rem;
    
  }

  span {
    color: var(--base-color);
  }

  ul, li {
    display: list-item;
    text-align: left;
    padding: 0.3rem 0;
    margin-top: 1rem;
  }

  p {
    font: 700 1.5rem var(--title-font);
    color: var(--title-color);
    text-align: left;
    margin-top: 3rem;
  }
`;

export const DivButton = styled.div`
   margin-top: 1.5rem;

   float: left;

   
`;

export const ButtonAbout = styled(LinkS)`
  background-color: var(--base-color);

  color: red;
  padding: 1.3rem 2rem;
  border: none;
  border-radius: 0.375rem;
  color: white;
  font: var(--text-3);
  font-weight: 700;
  transition: background 0.3s;
  
  &:hover {
    cursor: pointer;
    background: var(--base-color-alt);
  }
`;


