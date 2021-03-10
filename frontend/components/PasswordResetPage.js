import useForm from "../lib/useForm";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { FormStyles } from "./styles/FormStyles";

const RESET_PASSWORD_MUTATION = gql`
  mutation RESET_PASSWORD_MUTATION(
    $email: String!
    $token: String!
    $password: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
      message
    }
  }
`;

const PasswordResetPage = ({ token }) => {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    password: "",
    token,
  });

  const [reset, { data, loading, error }] = useMutation(
    RESET_PASSWORD_MUTATION,
    {
      variables: inputs,
    }
  );

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await reset().catch(console.log(error));
    console.log(res);
    resetForm();
  }

  const successfulError = data?.redeemUserPasswordResetToken.code
    ? data?.redeemUserPasswordResetToken
    : undefined;

  return (
    <FormStyles method="POST" onSubmit={handleSubmit}>
      <h2>Reset Your Password</h2>
      <p>{error || successfulError}</p>
      <fieldset>
        {data?.redeemUserPasswordResetToken === null && (
          <p>You can sign in now!</p>
        )}
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
            type="password"
            name="password"
            placeholder="Your Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Request Reset</button>
      </fieldset>
    </FormStyles>
  );
};

export default PasswordResetPage;
