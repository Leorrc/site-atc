import styled from "styled-components";

export const DivUlNav = styled.div`
  ul { 
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0 10px 30px;
    font-size: 15px;
    font-weight: 500;
    font: 400 1rem;
    color: #0f241D;
    white-space: nowrap;
    transition: 0.3s;
    text-decoration: none;
  }

  li {
    position: relative;
  }
`;