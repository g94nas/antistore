import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { GET_USER_QUERY } from "./User";

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;

const AddToCart = ({ id }) => {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: {
      id,
      refetchQueries: [{ query: GET_USER_QUERY }],
    },
  });

  const handleClick = (e) => {
    e.stopPropagation();
    addToCart();
  };

  return (
    <button disabled={loading} type="button" onClick={handleClick}>
      Add{loading && "ing"} To Cart
    </button>
  );
};

export default AddToCart;
