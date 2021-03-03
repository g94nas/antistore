import { createGlobalStyle } from "styled-components";
// import Header from "./Header";

const GlobalStyles = createGlobalStyle`
    html {
        --primaryColor: #000;
        --secondaryColor: #fff;
        --maxWidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
				font-size: 62.5%;
    };

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        font-family: 'Poppins',--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2
    }
    a {
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
      {/* <Header /> */}
      <h2>I am the page component</h2>
      {children}
    </div>
  );
};

export default Layout;
