import styled from "styled-components";
import React from "react";
import Link from "next/link";

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
    flex: 0.5;
    padding-right: 8rem;
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
  }

  li {
    display: flex;
    justify-content: center;
    list-style: none;
  }

  ul {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  a {
    text-align: center;
    font-family: "Poppins";
    font-weight: 600;
    margin: 0 2rem;
    justify-self: center;
    align-items: center;
    font-size: 1.5rem;
    color: var(--secondaryColor);
    cursor: pointer;
    list-style: none;
    text-decoration: none;
    line-height: 30px;
  }

  .div-antistore {
    display: flex;
    height: 100%;
    flex: 0.5;
    width: 100%;
    padding-left: 8rem;
    justify-content: flex-start;
  }

  .h1-logo {
    display: flex;
    justify-self: center;
    align-items: center;
    height: 80%;
    border-radius: 3px;
    font-size: 4rem;
    padding: 0 2rem;
    color: var(--primaryColor);
    background: var(--secondaryColor);
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <div className="div-antistore">
        <h1 className="h1-logo">ANTISTORE</h1>
      </div>
      <div>
        <li>
          <ul>
            <Link href="/">CART</Link>
            <Link href="/">PRODUCTS</Link>
            <Link href="/">REGISTER</Link>
            <Link href="/">LOGIN</Link>
          </ul>
        </li>
      </div>
    </Wrapper>
  );
};

export default Header;
