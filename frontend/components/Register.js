//TODO
// 1. Handle error
// 2. Reroute if user is logged in already
import useForm from "../lib/useForm";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { FormStyles } from "./styles/FormStyles";
import { H1 } from "./FeaturedProducts";
import { useRouter } from "next/router";

const REGISTER_MUTATION = gql`
  mutation REGISTER_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`;

export default function SignUp() {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    name: "",
    password: "",
  });

  const router = useRouter();

  const [register, { data, loading, error }] = useMutation(REGISTER_MUTATION, {
    variables: inputs,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await register().catch(console.log(error));
    resetForm();
    router.push("/login");
  }

  if (loading) return "Loading...";

  return (
    <>
      <h2>.</h2>
      <H1>Register an account</H1>
      <FormStyles method="POST" onSubmit={handleSubmit}>
        <p>{error}</p>
        <fieldset>
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
          <label htmlFor="name">
            Your name
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              autoComplete="name"
              value={inputs.name}
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
          <button type="submit">Register!</button>
        </fieldset>
      </FormStyles>
    </>
  );
}
