import { HeaderStyle } from "./styles/HeaderStyle";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderStyle>
      <div className="div-antistore">
        <h1 className="h1-logo">ANTISTORE</h1>
      </div>
      <div>
        <li>
          <ul>
            <Link href="/">CART</Link>
            <Link href="/">PRODUCTS</Link>
            <Link href="/register">REGISTER</Link>
            <Link href="/">LOGIN</Link>
          </ul>
        </li>
      </div>
    </HeaderStyle>
  );
};

export default Header;
