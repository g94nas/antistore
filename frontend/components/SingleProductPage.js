//TODO
//1. Manage Error
//2. Add Cart State
//3. Add some sort of footer

import { useQuery } from "@apollo/client";
import styled from "styled-components";
import gql from "graphql-tag";
import formatMoney from "../lib/formatMoney";

const ONE_PRODUCT_QUERY = gql`
  query ONE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      id
      photo {
        altText
        image {
          publicUrlTransformed(transformation: { width: "500", crop: "limit" })
        }
      }
    }
  }
`;

const SingleProductStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .div-right {
    display: flex;
    flex: 0.5;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    border-left: 5px solid black;

    h1 {
      font-size: 3rem;
      margin-bottom: 3rem;
    }

    span {
      background: var(--primaryColor);
      padding: 0 4rem;
      font-size: 3rem;
      font-weight: 600;
      border-radius: 3px;
      color: var(--secondaryColor);
      margin-bottom: 3rem;
    }

    button {
      cursor: pointer;
      border: none;
      outline: none;
      border-radius: 3px;
      background: var(--primaryColor);
      color: var(--secondaryColor);
      text-transform: uppercase;
      font-size: 4rem;
      font-family: "Poppins";
      font-weight: 600;
      padding: 0 4rem;
      margin-top: 1rem;
    }
  }

  div {
    display: flex;
    flex: 0.5;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      margin-top: 5rem;
      margin-bottom: 3rem;
      border: 3px solid var(--primaryColor);
    }
  }
`;

const SingleProductPage = ({ id }) => {
  const { data, loading, error } = useQuery(ONE_PRODUCT_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return "Loading...";

  return (
    <>
      <SingleProductStyles>
        <div>
          <img
            src={data?.Product?.photo?.image?.publicUrlTransformed}
            alt={data?.Product?.name}
          />
        </div>
        <div className="div-right">
          <span>{data?.Product?.name}</span>
          <h1>{data?.Product?.description}</h1>
          <span>{formatMoney(data?.Product?.price)}</span>
          <button>Don't Add To Cart</button>
        </div>
      </SingleProductStyles>
    </>
  );
};

export default SingleProductPage;
