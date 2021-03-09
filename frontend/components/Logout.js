import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { GET_USER_QUERY } from "./User";

const LOGOUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

const Logout = () => {
  const [logout] = useMutation(LOGOUT_MUTATION, {
    refetchQueries: [{ query: GET_USER_QUERY }],
  });

  return (
    <button type="button" onClick={logout}>
      Logout
    </button>
  );
};

export default Logout;
