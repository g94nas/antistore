import { createContext, useContext, useState } from "react";

const CartStateContext = createContext();
const StateProvider = CartStateContext.Provider;

function CartStateProvider({ children }) {
  const [cartOpen, setCartOpen] = useState(false);

  function toggleCartState() {
    setCartOpen(!cartOpen);
  }

  return (
    <StateProvider value={{ toggleCartState, cartOpen }}>
      {children}
    </StateProvider>
  );
}

function useCart() {
  const all = useContext(CartStateContext);
  return all;
}

export { CartStateProvider, useCart };
