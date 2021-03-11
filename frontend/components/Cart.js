import CartStyles from "./styles/CartStyles";
import useUser from "./User";
import formatMoney from "../lib/formatMoney";
import styled from "styled-components";
import cartTotal from "../lib/cartTotal";

const CartItemStyles = styled.li`
  display: flex;
  padding: 1rem 0;
  flex-direction: row;
  margin-bottom: 4rem;
  box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  div {
    display: flex;
    flex-direction: row;
  }

  img {
    display: flex;
    border-right: 3px solid var(--primaryColor);
    padding-right: 2rem;
    padding-left: 2rem;
  }
  h3 {
    display: flex;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  p {
    display: inline-block;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .div-column {
    display: flex;
    flex-direction: column;
  }
`;

const CartItem = ({ cartItem }) => {
  const product = cartItem.product;
  if (!product) return null;
  return (
    <CartItemStyles>
      <div>
        <img
          src={product?.photo?.image?.publicUrlTransformed}
          alt={product.name}
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
      </div>
    </CartItemStyles>
  );
};

const Cart = () => {
  const user = useUser();
  if (!user) return null;
  return (
    <CartStyles open>
      <div>
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
