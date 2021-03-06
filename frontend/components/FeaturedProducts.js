import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import FeaturedProduct from "./FeaturedProduct";
import styled from "styled-components";

const FeaturedStyles = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  justify-content: center;
  height: 500px;
`;

const FEATURED_PRODUCTS = gql`
  query FEATURED_PRODUCTS {
    allProducts(where: { featured: true }) {
      id
      price
      name
      description
      photo {
        altText
        image {
          publicUrlTransformed(transformation: { width: "120", crop: "limit" })
        }
      }
      featured
    }
  }
`;

const FeaturedProducts = () => {
  const { data, loading, error } = useQuery(FEATURED_PRODUCTS);

  if (loading) return "loading...";

  return (
    <FeaturedStyles>
      {data.allProducts.map((product) => (
        <FeaturedProduct key={product.id} product={product} />
      ))}
    </FeaturedStyles>
  );
};

export default FeaturedProducts;
