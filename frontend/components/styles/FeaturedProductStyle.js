import styled from "styled-components";

export const FeaturedProductStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 0 4rem;
  margin-top: 3rem;

  .div-bg {
    padding-top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background: var(--primaryColor);
    width: 325px;
    height: 425px;
    box-shadow: var(--bs);
  }

  .div-main {
    position: relative;
    padding-top: 2rem;
    height: 375px;
    border-radius: 3px;
    width: 275px;
    margin-bottom: 1rem;
    background-color: white;
    cursor: pointer;

    div {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      height: 200px;

      img {
        display: flex;
      }
    }

    h3 {
      color: var(--secondaryColor);
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;

      span {
        background: var(--primaryColor);
        font-weight: bold;
        padding: 0 2rem;
        border-radius: 3px;
        font-size: 2rem;
      }
    }

    span {
      margin-top: 1rem;
      text-transform: uppercase;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 1rem;
    }

    button {
      position: absolute;
      background: var(--secondaryColor);
      font-weight: bold;
      padding: 0 2rem;
      border-radius: 3px;
      font-size: 2rem;
      color: var(--primaryColor);
      border: none;
      outline: none;
      cursor: pointer;
      box-shadow: var(--bs);
      text-transform: uppercase;
      bottom: -40px;
      left: 50%;
      margin-left: -85.5px;
    }

    .button-erase {
      position: absolute;
      padding: 1rem 2rem;
      color: var(--secondaryColor);
      background: linear-gradient(to right, #f2709c, #ff9472);
      border-radius: 500px;
      font-size: 1.5rem;
      left: 120%;
      bottom: 98%;
    }
  }
`;
