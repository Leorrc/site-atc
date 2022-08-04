import styled from "styled-components";
import pixelToRem from '../../../utils/pxToRem'

import { ButtonProps } from ".";

export const ButtonComponent = styled.button<ButtonProps>`
  background-color: var(--base-color);
  color: var(--text-color-light);
  width: ${({ fullWidth }) => (fullWidth ? "100%" : pixelToRem(200))};
  height: ${pixelToRem(60)};
  border: none;
  border-radius: ${pixelToRem(6)};
  color: white;
  font: var(--text-3);
  font-weight: 700;
  transition: background 0.3s;
  
  &:hover {
    cursor: pointer;
    background: var(--base-color-alt);
  }
`;