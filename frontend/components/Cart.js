import CartStyles from "./styles/CartStyles";
import useUser from "./User";
import formatMoney from "../lib/formatMoney";
import cartTotal from "../lib/cartTotal";
import CartItem from "./CartItem";
import { useCart } from "../lib/cartState";

const Cart = () => {
  const user = useUser();
  const { cartOpen, toggleCartState } = useCart();

  if (!user) return null;
  return (
    <CartStyles open={cartOpen}>
      <div>
        <h3 onClick={toggleCartState}>&times;</h3>
        <h1>{user.name}'s Cart</h1>
        <h2>{<p>TOTAL : {formatMoney(cartTotal(user?.cart))}</p>}</h2>
        <ul>
          {user.cart.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </ul>
      </div>
    </CartStyles>
  );
};

export default Cart;
