import { HeaderStyle } from "./styles/HeaderStyle";
import React from "react";
import Link from "next/link";
import useUser from "./User";
import Logout from "./Logout";
import Cart from "./Cart";
import { useCart } from "../lib/cartState";
import CartNumber from "./CartNumber";

const Header = () => {
  const user = useUser();
  const { toggleCartState } = useCart();

  return (
    <>
      <HeaderStyle>
        <div className="div-antistore">
          <h1 className="h1-logo">ANTISTORE</h1>
        </div>
        {user && (
          <div>
            <li>
              <ul>
                <button type="button" onClick={toggleCartState}>
                  CART
                  <CartNumber />
                </button>
                <Link href="/">PRODUCTS</Link>
                <Logout />
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
      <Cart />
    </>
  );
};

export default Header;
