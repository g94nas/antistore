import styled from "styled-components";

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    background: var(--primaryColor);
    color: var(--secondaryColor);
    padding: 2rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 600;
    margin: auto;
    margin-top: 3rem;
    cursor: pointer;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    outline: none;
    border: none;
    border-left: solid 4px var(--primaryColor);
    padding: 2rem;
    justify-content: flex-start;
  }

  label {
    text-transform: uppercase;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    font-weight: 600;
  }

  input {
    display: flex;
    justify-content: flex-start;
    outline: none;
    margin: 0 0 2rem 0rem;
    min-width: 800px;
    border: 2px solid var(--primaryColor);
    padding: 0.5rem;
    border-radius: 3px;
  }
`;
