//TODO
//1. Pagination
//2. Try to not fetch the already featured items

import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Product from "./Product";
import { H1 } from "./FeaturedProducts";
import styled from "styled-components";
import { productsPerPage } from "../config";

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip, sortBy: name_DESC) {
      id
      name
      price
      description
      photo {
        image {
          publicUrlTransformed(transformation: { width: "120", crop: "limit" })
        }
      }
    }
  }
`;

const AllProductsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 3rem;
`;

const AllProducts = ({ page }) => {
  const { loading, error, data } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * productsPerPage - productsPerPage,
      first: productsPerPage,
    },
  });

  if (loading) return "Loading...";
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <H1>PRODUCTS</H1>
      <AllProductsStyle>
        {data?.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </AllProductsStyle>
    </>
  );
};

export default AllProducts;
