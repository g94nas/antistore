import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import useForm from "../lib/useForm";
import { GET_USER_QUERY } from "./User";
import { FormStyles } from "./styles/FormStyles";
import { H1 } from "./FeaturedProducts";
import useUser from "./User";
import { useRouter } from "next/router";

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
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });

  const [login, { data, loading }] = useMutation(LOGIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: GET_USER_QUERY }],
  });

  const user = useUser();
  const router = useRouter();

  if (loading) return "Loading...";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login();
    resetForm();
    router.push(`/`);
  };

  const loginError =
    data?.authenticateUserWithPassword.__typename ===
    "UserAuthenticationWithPasswordFailure"
      ? data?.authenticateUserWithPassword
      : undefined;

  return (
    <>
      <h1>.</h1>
      <H1>Login</H1>
      <p>{loginError?.message}</p>
      <FormStyles method="POST" onSubmit={handleSubmit}>
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              autoComplete="email"
              value={inputs.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
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
