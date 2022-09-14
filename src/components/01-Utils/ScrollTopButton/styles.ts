import styled from "styled-components";

export const Container = styled.div`
  .top-to-btm{
  position: relative;
}
.icon-position{
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 20;
}

.icon-style{
  background-color: var(--att-color);
  border: 2px solid #fff;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  color: #fff;
  cursor: pointer;
  transition: all .5s ease-in-out;
}

.icon-style:hover{
  animation: none;
  background: #fff;
  color: var(--att-color);
  border: 2px solid var(--att-color);
}

`;

