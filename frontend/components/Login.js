import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import useForm from "../lib/useForm";
import { GET_USER_QUERY } from "./User";
import { FormStyles } from "./styles/FormStyles";

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

const Login = () => {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    email: "",
    password: "",
  });

  const [authenticateUserWithPassword, { data, loading, error }] = useMutation(
    LOGIN_MUTATION,
    {
      variables: {
        inputs,
      },
      refetchQueries: [{ query: GET_USER_QUERY }],
    }
  );

  if (loading) return "Loading...";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await authenticateUserWithPassword();
    resetForm();
  };

  const error =
    data?.authenticateUserWithPassword.__typename ===
    "UserAuthenticationWithPasswordFailure"
      ? data?.authenticateUserWithPassword
      : undefined;

  return (
    <>
      <h1>.</h1>
      <H1>Login</H1>
      <p>{error.message}</p>
      <FormStyles method="POST" onSubmit={handleSubmit}>
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="email">
            Email
            <input
              required
              id="email"
              placeholder="Email"
              onChange={handleChange}
              type="email"
              value={inputs.email}
              name="email"
            />
          </label>
          <label htmlFor="description">
            Password
            <input
              required
              id="password"
              placeholder="Password"
              onChange={handleChange}
              type="password"
              value={inputs.password}
              name="password"
            />
          </label>

          <button type="submit">Login</button>
        </fieldset>
      </FormStyles>
    </>
  );
};

export default Login;
