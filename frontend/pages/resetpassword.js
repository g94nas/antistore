import PasswordReset from "../components/PasswordReset";
import PasswordResetPage from "../components/PasswordResetPage";

const ResetPasswordPage = ({ query }) => {
  if (!query?.token) {
    return (
      <div>
        <h1>.</h1>
        <p>You must supply a token to reset your password</p>
        <PasswordReset />
      </div>
    );
  }
  return (
    <div>
      <h1>.</h1>
      <p>This is your token: {query.token}</p>
      <PasswordResetPage token={query.token} />
    </div>
  );
};

export default ResetPasswordPage;
