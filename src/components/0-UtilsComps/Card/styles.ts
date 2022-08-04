import styled from "styled-components";

interface CardProps {
  
}

export const CardDefault = styled.div<CardProps>`
  padding: 3.625rem 2rem;
  box-shadow: 0px 0px 12px rgb(0 0 0 / 8%);
  border-bottom: 0.25rem solid var(--base-color);
  border-radius: 0.25rem 0.25rem 0 0;
  text-align: center;
  padding-left: 3rem;
  padding-right: 3rem;

  h3 {
    display: block;
    margin-bottom: 1.5rem;
    font-weight: 500;
    font-size: 20px;
    color: var(--base-color);

  }

  ul, li {
    display: list-item;
    text-align: left;
    padding: 0.3rem 0;
  }

  button {
    margin-top: 1.5rem;
  }
`;

