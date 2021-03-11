import styled from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: var(--primaryColor);
  position: fixed;
  z-index: 15;

  button {
    text-decoration: none;
    text-align: center;
    font-family: "Poppins";
    font-weight: 600;
    margin: 0 2rem;
    justify-self: center;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
    list-style: none;
    text-decoration: none;
    line-height: 30px;
    border: none;
    background: var(--primaryColor);
    color: var(--secondaryColor);
    text-transform: uppercase;
    outline: none;
  }

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
    text-decoration: none;
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

  a:link {
    text-decoration: none;
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
