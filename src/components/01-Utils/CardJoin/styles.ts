import styled from "styled-components";


export const CardDefault = styled.div`
  padding: 3.625rem 2rem;
  box-shadow: 0px 0px 12px rgb(0 0 0 / 8%);
  border-bottom: 0.25rem solid var(--att-color);
  border-radius: 0.25rem 0.25rem 0 0;
  padding: 1.875rem 1.875rem;

  h3 {
    display: block;
    margin-bottom: 1.5rem;
    font-weight: 500;
    font-size: 20px;
    color: var(--att-color);

  }

  ul {
    text-align: left;
  }

  li {
    
  }

  button {
    margin-top: 1.5rem;
  }

  span {
    color: var(--att-color);
  }

  @media (max-width: 1200px){
    width: 100%;
  }
`;

