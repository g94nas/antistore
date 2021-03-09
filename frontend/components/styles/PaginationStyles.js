import styled from "styled-components";

export const PaginationStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  span {
    display: flex;
    color: var(--primaryColor);
    font-size: 2rem;
    font-weight: 600;
    margin: auto;
  }

  a {
    display: flex;
    color: var(--primaryColor);
    font-size: 2rem;
    font-weight: 600;
    margin: auto;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      transform: translateY(-10px);
      transition: 0.3s;
    }
  }

  a[aria-disabled="true"] {
    color: white;
    pointer-events: none;
  }

  div[aria-disabled="true"] {
    border: none;
    pointer-events: none;
  }

  .div-first {
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border: 3px solid var(--primaryColor);
    font-weight: 600;
    margin-left: 11rem;
    height: 100px;
    border-radius: 3px;
    flex: 0.33;
    margin-bottom: 3rem;
    align-items: center;
  }

  .div-second {
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: 3px solid var(--primaryColor);
    font-weight: 600;
    margin: 0 10rem;
    margin-top: 3rem;
    height: 100px;
    border-radius: 3px;
    flex: 0.33;
    margin-bottom: 3rem;
    align-items: center;
  }

  .div-third {
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    border: 3px solid var(--primaryColor);
    font-weight: 600;
    height: 100px;
    border-radius: 3px;
    flex: 0.33;
    margin-right: 10rem;

    margin-bottom: 3rem;
  }
`;
