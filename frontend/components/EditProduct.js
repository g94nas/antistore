import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/client";
import useForm from "../lib/useForm";
import { H1 } from "./FeaturedProducts";
import { useRouter } from "next/router";
import { FormStyles } from "./styles/FormStyles";

const SINGLE_PRODUCT = gql`
  query SINGLE_PRODUCT($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
      featured
    }
  }
`;

const UPDATE_PRODUCT = gql`
  mutation UPDATE_PRODUCT(
    $id: ID!
    $name: String
    $description: String
    $price: Int
    $featured: Boolean
  ) {
    updateProduct(
      id: $id
      data: {
        name: $name
        description: $description
        price: $price
        featured: $featured
      }
    ) {
      id
      name
      description
      price
    }
  }
`;

const EditProduct = ({ id }) => {
  const router = useRouter();

  const { data, loading, error } = useQuery(SINGLE_PRODUCT, {
    variables: {
      id,
    },
  });

  const [
    updateProduct,
    { data: editData, loading: editLoading, error: editError },
  ] = useMutation(UPDATE_PRODUCT);

  const { inputs, handleChange, clearForm, resetForm } = useForm(data?.Product);
  if (loading) return "Loading...";
  if (error) return <p>{error.message || editError.message}</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await updateProduct({
      variables: {
        id,
        name: inputs.name,
        description: inputs.description,
        price: inputs.price,
        featured: inputs.featured,
      },
    });
    clearForm();
    router.push(`/`);
  };

  return (
    <>
      <h1>.</h1>
      <H1>Edit Product</H1>
      <FormStyles onSubmit={handleSubmit}>
        <fieldset disabled={editLoading} aria-busy={editLoading}>
          <label htmlFor="name">
            Name
            <input
              required
              id="name"
              placeholder="Product Name"
              onChange={handleChange}
              type="text"
              value={inputs.name}
              name="name"
            />
          </label>
          <label htmlFor="featured">
            Featured
            <input
              id="featured"
              placeholder="Featured"
              onChange={handleChange}
              type="checkbox"
              value={inputs.featured}
              name="featured"
            />
          </label>
          <label htmlFor="description">
            Description
            <input
              required
              id="description"
              placeholder="Product Description"
              onChange={handleChange}
              type="text"
              value={inputs.description}
              name="description"
            />
          </label>
          <label htmlFor="price">
            Price
            <input
              required
              id="price"
              placeholder="Product Price"
              onChange={handleChange}
              type="number"
              value={inputs.price}
              name="price"
            />
          </label>
          <button type="submit">Update Product</button>
        </fieldset>
      </FormStyles>
    </>
  );
};

export default EditProduct;
