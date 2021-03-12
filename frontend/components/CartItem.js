import { CartItemStyles } from "./styles/CartItemStyles";
import formatMoney from "../lib/formatMoney";
import RemoveFromCart from "./RemoveFromCart";

const CartItem = ({ cartItem }) => {
  const product = cartItem.product;
  if (!product) return null;
  return (
    <CartItemStyles>
      <div>
        <img
          src={product?.photo?.image?.publicUrlTransformed}
          alt={product.name}
          width={150}
        />
        <div className="div-column">
          <h3>{product.name}</h3>
          <p>
            {formatMoney(product.price * cartItem.quantity) + " |" + " "}
            <em>
              {cartItem.quantity} &times; {formatMoney(product.price)}
            </em>
          </p>
        </div>
        <RemoveFromCart id={cartItem.id} />
      </div>
    </CartItemStyles>
  );
};

export default CartItem;
