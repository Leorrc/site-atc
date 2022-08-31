import styled from "styled-components";

export const Divider1 = styled.div`
  height: 1px;
  background: linear-gradient(
    270deg,
    hsla(174, 36%, 57%, 1),
    hsla(174, 65%, 88%, 0.34) 
  );
`

export const Divider2 = styled.div`
  height: 1px;
  background: linear-gradient(
    270deg,
    hsla(174, 65%, 88%, 0.34),
    hsla(174, 36%, 57%, 1)
  );

`

export const Divider3 = styled.div`
  height: 1px;
  background: linear-gradient(
    270deg,
    hsla(174, 65%, 88%, 0.34),
    hsla(174, 36%, 57%, 1)
  );

  @media (min-width: 992px) {
    display: none;
  }
`