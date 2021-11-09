import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { setLocalStorageUser } from "../context/auth-2";
import Spinner from "../components/Spinner";

import {
  StyledLoginWrapper,
  StyledLoginContainer,
  StyledFormControl,
  FormInput,
  FormButton,
  FormText,
} from "./styles/StyledForm";
import { StyledErrors } from "./styles/StyledErrors";

const EMAIL_FIELD = "emailField";
const PASSWORD_FIELD = "passwordField";
const loginUserEndpoint = "http://localhost:5000/users/login";

const Login = (props) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const onChange = (e, field) => {
    const { value } = e.target;
    if (field == EMAIL_FIELD) setEmailInput(value);
    else if (field == PASSWORD_FIELD) setPasswordInput(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: emailInput,
      password: passwordInput,
    };
    try {
      const { data } = await axios.post(loginUserEndpoint, payload);
      console.log(' data => ', data)
      setLocalStorageUser(data.user);
      history.push("/");
    } catch (e) {
      setLocalStorageUser(null);
      setErrors({
        error: "Wrong email or password!",
      });
    }
  };

  if (loading) return <Spinner />;

  return (
    <StyledLoginWrapper>
      <StyledLoginContainer>
        <h1>Log in to your account</h1>
        {Object.keys(errors).length > 0 && (
          <StyledErrors>
            <ul>
              {Object.values(errors).map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </StyledErrors>
        )}
        <form onSubmit={(e) => onSubmit(e)} autoComplete="off" noValidate>
          <StyledFormControl>
            <FormInput
              name="email"
              value={emailInput}
              type="email"
              required
              autoComplete="none"
              onChange={(e) => onChange(e, EMAIL_FIELD)}
              error={errors.username ? true : false}
            />
            <label htmlFor="username">Email</label>
          </StyledFormControl>
          <StyledFormControl>
            <FormInput
              name="password"
              value={passwordInput}
              type="password"
              autoComplete="none"
              required
              onChange={(e) => onChange(e, PASSWORD_FIELD)}
              error={errors.password ? true : false}
            />
            <label htmlFor="password">Password</label>
          </StyledFormControl>

          <FormButton type="submit">Login</FormButton>

          <FormText>
            Don't have an account? <a href="/register">Register</a>
          </FormText>
        </form>
      </StyledLoginContainer>
    </StyledLoginWrapper>
  );
};

export default Login;
