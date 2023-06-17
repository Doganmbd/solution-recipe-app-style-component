import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./Login.style";
import mealSvg from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const userInfo = {
    name: "bilal",
    password: 123,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
    navigate(-1);
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />
        <Header>{"<M.B.D/>"}Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="username" required />
          <StyledInput type="password" placeholder="password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
