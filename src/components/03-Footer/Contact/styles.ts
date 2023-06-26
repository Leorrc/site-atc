import styled from "styled-components";
import { device } from "../../../utils/responsive";

export const Background = styled.section`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  letter-spacing: 1.4px;
  display: flex;
  padding: 0 0 3rem 0;
  background: #F3F4F4;
`;

export const Titulo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  text-align: center;

  h3 {
    font: var(--font-mobile-heading-1);
    color: var(--title-color);
    -webkit-font-smoothing: auto;
  }

  p {
    font: var(--subtitle-font-size);
  }

  @media ${device.tablet} {
    h1 {
      font: var(--font-heading-1);
    }
  }

`;

export const Container1 = styled.div`
  flex: 0 1 700px;
  margin: auto;
  padding: 10px;
`;

export const Screen1 = styled.div`
  position: relative;
  background: #e7e7e7;
  border-radius: 15px;

  .Screen1:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    bottom: 0;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    z-index: -1;
  }
`;

export const ScreenHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px;
  background: #19baaaa6;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const ScreenHeaderLeft = styled.div`
  margin-right: auto;

  @media screen and (max-width: 520px) {
    margin-bottom: 30px;
  }
`;

export const ScreenHeaderButton = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: var(--att-color);

  .close {
    background: #ed1c6f;
    width: 8px;
    height: 8px;
    margin-right: 3px;
    border-radius: 8px;
  }
  .maximize {
    background: #e8e925;
    width: 8px;
    height: 8px;
    margin-right: 3px;
    border-radius: 8px;
  }
  .minimize {
    background: #74c54f;
    width: 8px;
    height: 8px;
    margin-right: 3px;
    border-radius: 8px;
  }
`;

export const ScreenHeaderRight = styled.div`
  display: flex;

  .screen-header-ellipsis {
    width: 5px;
    height: 5px;
    margin-left: 2px;
    border-radius: 8px;
    background: #999;
  }
`;

export const ScreenBody = styled.div`
  display: flex;

  @media screen and (max-width: 520px) {
    flex-direction: column;
  }

  @media screen and (max-width: 600px) {
    padding: 40px;
  }
`;

export const ScreenBodyItem = styled.div`
  flex: 1;
  padding: 50px;

  .left {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 520px) {
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const AppTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: var(--att-color);
  font-size: 26px;

  :after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 25px;
    height: 4px;
    background: var(--att-color);
  }

  @media screen and (max-width: 520px) {
    flex-direction: row;

    span {
      margin-right: 12px;
    }

    :after {
      display: none;
    }
  }
`;

export const AppFormGroup = styled.div`
  margin-bottom: 15px;
`;

export const AppFormGroupMessage = styled.div`
  margin-top: 40px;
`;

export const AppFormGroupButtons = styled.div`
  margin-bottom: 0;
  text-align: right;
`;

export const AppFormControl = styled.div`
  input {
    font-family: "Montserrat", sans-serif;
    width: 100%;
    padding: 10px 0;
    background: none;
    border: none;
    border-bottom: 1px solid #666;
    color: var(--title-color);
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;

    ::placeholder {
      color: #666;
    }
    :focus {
      border-bottom-color: var(--title-color);
    }
  }
`;

export const AppFormButton = styled.button`
  background: none;
  border: none;
  color: var(--att-color);
  font-size: 14px;
  cursor: pointer;
  outline: none;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  padding: 0 1rem;

  :hover {
    color: var(--att-color2);
  }
`;
