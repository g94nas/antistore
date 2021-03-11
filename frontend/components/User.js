import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

export const GET_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        cart {
          id
          quantity
          product {
            id
            price
            name
            description
            photo {
              image {
                publicUrlTransformed(
                  transformation: { width: "120", crop: "limit" }
                )
              }
            }
          }
        }
      }
    }
  }
`;

const useUser = () => {
  const { data } = useQuery(GET_USER_QUERY);

  return data?.authenticatedItem;
};

export default useUser;
