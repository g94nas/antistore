import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteProduct));
}

const DeleteProduct = ({ id, children }) => {
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: {
      id,
    },
    update,
  });

  const handleDelete = (e) => {
    e.stopPropagation();
    if (confirm("Are you sure you want to delete this product?")) {
      deleteProduct().catch((err) => alert(err.message));
    }
  };

  return (
    <button className="button-erase" onClick={handleDelete}>
      {children}
    </button>
  );
};

export default DeleteProduct;
