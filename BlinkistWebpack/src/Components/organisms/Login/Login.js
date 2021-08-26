import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CustomButton from "../../atoms/Button/Button";

const LoginButton = () => {
  const { loginWithRedirect ,isAuthenticated} = useAuth0();

  return (
      !isAuthenticated && (
  <CustomButton onClick={() => loginWithRedirect()} variant="contained" name="Log In" color="primary" data-testId="button"/>));
};

export default LoginButton;