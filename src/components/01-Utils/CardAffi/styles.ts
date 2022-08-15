import styled from "styled-components";

export const CardDefault = styled.div`
  box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
  padding: 0.75rem;
  border-radius: 0.313rem;
  background: #fff;
  max-width: 100%;
`;

export const Name = styled.div`
  margin-left: 1.5rem;
  
  h4 {
    font: 700 1.25rem var(--title-font);
    color: #37517e;
}
`;

export const Infos = styled.div`
  margin-left: 1.5rem;
`;

export const DivDescription = styled.div`

span {
  display: block;
  font-size: 0.938rem;
  padding-bottom: 0.625rem;
  position: relative;
  font-weight: 500;

  :after {
    content: '';
    position: absolute;
    display: block;
    width: 3.125rem;
    height: 0.063rem;
    background: #cbd6e9;
    bottom: 0;
    left: 0;
  }
}
`;

export const DivContact = styled.div`

  display: grid;
  padding-top: 0.625rem;
  font-size: 0.938rem;
  padding-bottom: 0.625rem;
  position: relative;
  font-weight: 500;
  gap: 0.3rem;
  font: bold;

`;

export const Social = styled.div`
  margin-top: 0.15rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;


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