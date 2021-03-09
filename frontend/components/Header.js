import { HeaderStyle } from "./styles/HeaderStyle";
import React from "react";
import Link from "next/link";
import useUser from "./User";

const Header = () => {
  const user = useUser();

  return (
    <HeaderStyle>
      <div className="div-antistore">
        <h1 className="h1-logo">ANTISTORE</h1>
      </div>
      {user && (
        <div>
          <li>
            <ul>
              <Link href="/">CART</Link>
              <Link href="/">PRODUCTS</Link>
              <Link href="/">SIGN OUT</Link>
            </ul>
          </li>
        </div>
      )}
      {!user && (
        <div>
          <li>
            <ul>
              <Link href="/">PRODUCTS</Link>
              <Link href="/register">REGISTER</Link>
              <Link href="/">LOGIN</Link>
            </ul>
          </li>
        </div>
      )}
    </HeaderStyle>
  );
};

export default Header;
