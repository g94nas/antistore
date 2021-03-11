import useUser from "./User";

const CartNumber = () => {
  const user = useUser();

  const cartQuantities = user.cart.map((cart) => cart.quantity);
  const count = cartQuantities.reduce((total, item) => total + item, 0);

  return <p>{count}</p>;
};
export default CartNumber;
