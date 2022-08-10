import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';


export interface ButtonProps {
  text?: string
  fullWidth?: boolean
}

export const DivPs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const DivP1 = styled.div`

`;

export const DivP2 = styled.div`

  button {
    margin-top: 2rem;
  }

  span {
    font: 700 1.35rem var(--title-font);
    color: var(--title-color);
    -webkit-font-smoothing: auto;
  }
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

export const DivButton = styled.div`
   margin-top: 2rem;
`;

