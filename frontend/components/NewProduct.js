import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import useForm from "../lib/useForm";
import styled from "styled-components";
import { H1 } from "./FeaturedProducts";
import { ALL_PRODUCTS_QUERY } from "./AllProducts";
import { FEATURED_PRODUCTS } from "./FeaturedProducts";
import { useRouter } from "next/router";
import { FormStyles } from "./styles/FormStyles";

const CREATE_NEW_PRODUCT = gql`
  mutation CREATE_NEW_PRODUCT(
    $name: String!
    $description: String!
    $price: Int!
    $featured: Boolean!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        featured: $featured
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

const NewProduct = () => {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: "",
    name: "COOL",
    price: 1000,
    featured: false,
    description: "TEST!",
  });

  const router = useRouter();

  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_NEW_PRODUCT,
    {
      variables: inputs,
      refetchQueries: [
        { query: ALL_PRODUCTS_QUERY },
        { query: FEATURED_PRODUCTS },
      ],
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createProduct();
    clearForm();
    router.push(`/product/${res.data.createProduct.id}`);
  };

  if (loading) return "loading...";
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h1>.</h1>
      <H1>Create Product</H1>
      <FormStyles onSubmit={handleSubmit}>
        <fieldset disabled={loading} aria-busy={loading}>
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
          <label htmlFor="image">
            Image
            <input
              id="image"
              onChange={handleChange}
              type="file"
              required
              name="image"
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
          <button type="submit">Add New Product</button>
        </fieldset>
      </FormStyles>
    </>
  );
};

export default NewProduct;
