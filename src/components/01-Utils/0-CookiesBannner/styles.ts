import styled from 'styled-components';
import { Link as LinkR } from "react-router-dom";

export const CookieBannerWrapper = styled.div`
  background-color: #32323A;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 12px;
  min-width: 100%;
  height: auto;
  z-index: 100000;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`;

export const CookieBannerDiv = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const CookieBannerMessage = styled.p`
  margin: 0;
  font-size: 14px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CookieBannerButton = styled.button`
  padding: 8px 16px;
  background-color: #19BAAA;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const CookieBannerButton2 = styled(LinkR)`
  padding: 8px 16px;
  background-color: #19BAAA;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const DivIcon = styled.div`
  position: absolute;
  color: #fff;
  right: 15px;
  top: 40%;
  margin-top: -10px;
  width: 25px;
  height: 25px;
  opacity: .7;
  padding: 10px;
  outline: none;
  cursor: pointer;
  font-size: 20px;
`;