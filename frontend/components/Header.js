import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: var(--primaryColor);

  div {
    height: 100%;
    width: 100%;
    display: flex;
    flex: 50%;
    padding-right: 2rem;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
  }

  ul {
    height: 100%;
    display: flex;
    flex-direction: row;
    text-decoration: none;
  }

  h1 {
    text-align: center;
    margin: 0 1rem;
    justify-self: center;
    align-items: center;
    font-size: 1rem;
    color: var(--secondaryColor);
  }

  .div-antistore {
    height: 100%;
    flex: 50%;
    width: 100%;
    justify-content: flex-start;
    align-self: center;
    padding-left: 2rem;

    div {
      width: 80%;
      height: 80%;
      background-color: var(--secondaryColor);
    }

    h1 {
      height: 100%;
      text-align: center;
      font-size: 5rem;
      color: var(--primaryColor);
    }
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <div classname="div-antistore">
        <div>
          <h1>ANTISTORE</h1>
        </div>
      </div>
      <div>
        <li>
          <ul>
            <h1>Cart</h1>
            <h1>Products</h1>
            <h1>Register</h1>
            <h1>Login</h1>
          </ul>
        </li>
      </div>
    </Wrapper>
  );
};

export default Header;
