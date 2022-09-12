import styled from "styled-components";
import pixelToRem from "../../../utils/pxToRem";

export const Container = styled.div`
  box-shadow: 0px 2px 5px rgb(0 0 0 / 10%);
  padding: 1rem;
  border-radius: 0.313rem;
  background: #fff;
  max-width: 100%;
  display: grid;
  gap: ${pixelToRem(14)};

`;

export const Name = styled.div`
  display: grid;
  font: var(--font-mobile-text-1);
`;

export const Left = styled.div`
  color: var(--att-color);


  span {
    font-size: ${pixelToRem(18)};
  }

  svg {
    font-size: ${pixelToRem(18)};
  }
`;

export const Author = styled.div`
  display: grid;
  font: var(--font-mobile-text-1);

`;

export const Right = styled.div`
  color: var(--att-color);
  
  span {
    font-size: ${pixelToRem(18)};
  }

  svg {
    font-size: ${pixelToRem(18)};
  }
`;

export const Purchase = styled.div`
  color: var(--att-color);

  button {
    width: 12.5rem;
    height: 2.35rem;
  }

  span {
    font-size: ${pixelToRem(18)};
  }

  svg {
    font-size: ${pixelToRem(18)};
    margin: 0 auto;
  }
`;