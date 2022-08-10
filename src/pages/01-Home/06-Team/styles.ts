import styled from "styled-components";


export const ContainerMember = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  :hover {
    cursor: pointer;
  }
`;

export const Member = styled.div`
  display: flex;
  align-items: flex-start;

  position: relative;
  box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
  padding: 0.938rem;
  border-radius: 0.313rem;
  background: #fff;
  transition: 0.5s;
  
`;

export const Pic = styled.div`
  overflow: hidden;
  width: 11.25rem;
  border-radius: 50%;
`;

export const MemberInfos = styled.div`
  padding: 1.875rem;
  font: var(--title-font);

  h4 {
  font-weight: 700;
  margin-bottom: 0.313rem;
  font-size: 1.25rem;
  color: #37517e;
}

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
    width: 50px;
    height: 1px;
    background: #cbd6e9;
    bottom: 0;
    left: 0;
  }
  }

  p {
  margin: 0.625rem 0 0 0;
  font-size: 0.938rem;
  font-weight: 500;
  }
`;

export const Social = styled.div`
  margin-top: 0.75rem;
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

