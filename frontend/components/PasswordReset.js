import useForm from "../lib/useForm";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { FormStyles } from "./styles/FormStyles";

const PASSWORD_RESET_MUTATION = gql`
  mutation PASSWORD_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

const PasswordReset = () => {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
  });

  const [signup, { data, loading, error }] = useMutation(
    PASSWORD_RESET_MUTATION,
    {
      variables: inputs,
    }
  );

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await signup().catch(console.log(error));
    console.log(res);
    resetForm();
  }

  return (
    <FormStyles method="POST" onSubmit={handleSubmit}>
      <h1 style={{ marginTop: "5rem" }}>Request a Password Reset</h1>
      <p>{error}</p>
      <fieldset>
        {data?.sendUserPasswordResetLink === null && (
          <p>Success! Check your email for a link!</p>
        )}
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Request Reset</button>
      </fieldset>
    </FormStyles>
  );
};

export default PasswordReset;
