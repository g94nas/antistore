import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

export const GET_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
      }
    }
  }
`;

const useUser = () => {
  const { data } = useQuery(GET_USER_QUERY);

  return data?.authenticatedItem;
};

export default useUser;
