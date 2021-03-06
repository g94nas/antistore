import { createGlobalStyle } from "styled-components";
import Header from "./Header";

const GlobalStyles = createGlobalStyle`
    html {
        --primaryColor: #000;
        --secondaryColor: #fff;
        --maxWidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.29);
				font-size: 62.5%;
    };

    * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

    body {
        font-family: 'Poppins',--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1.5rem;
        line-height: 2
    }
    a {
      font-family: 'Poppins';
        text-decoration: none;
        color: var(--black);
    }
    a:hover {
        text-decoration: underline;
    }
    button {
        font-family: 'Poppins',--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
