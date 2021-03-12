import styled from "styled-components";

const CartStyles = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background: var(--secondaryColor);
  position: fixed;
  overflow-y: scroll;
  transform: translateX(100%);
  transition: all 0.4s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 20;
  ${(props) => props.open && `transform: translateX(0);`};
  max-width: 700px;
  padding-right: 5rem;

  div {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }

  h1 {
    display: flex;
    justify-content: flex-start;
    margin-top: 3rem;
    font-size: 2rem;
    text-transform: uppercase;
    margin-left: 5rem;
    margin-bottom: 3rem;
    padding-left: 1rem;
    border-left: 3px solid var(--primaryColor);
  }

  h2 {
    display: flex;
    justify-content: flex-start;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-left: 5rem;
    margin-bottom: 3rem;
    padding-left: 1rem;
    border-left: 4px solid green;
    box-shadow: 2px 5px 10px 3px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  h3 {
    display: flex;
    justify-content: flex-end;
    font-size: 2.5rem;
    font-weight: 700;
    cursor: pointer;
  }

  ul {
    display: flex;
    flex-direction: column;
    height: 50px;
    padding-left: 5rem;
  }

  .button-cart {
    display: flex;
    cursor: pointer;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 3px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 160px;
    margin-left: 5rem;
    outline: none;
    border: none;
    background: var(--primaryColor);
    color: var(--secondaryColor);
    padding: 1rem;
  }
`;

export default CartStyles;
