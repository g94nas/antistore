import styled from "styled-components";

export const CartItemStyles = styled.li`
  display: flex;
  padding: 1rem 0;
  flex-direction: row;
  margin-bottom: 4rem;
  box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  div {
    display: flex;
    flex-direction: row;
  }

  img {
    display: flex;
    border-right: 3px solid var(--primaryColor);
    padding-right: 2rem;
    padding-left: 2rem;
  }
  h3 {
    display: flex;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  p {
    display: inline-block;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .div-column {
    display: flex;
    flex-direction: column;
  }
`;
