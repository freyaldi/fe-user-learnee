import React, { useContext, useState } from "react";
import InputBar from "../molecules/InputBar";
import Button from "../atoms/Button";
import { AuthContext } from "../../hooks/AuthContext";
import { useNavigate } from "react-router-dom";
import Heading from "../atoms/Heading";
import { setCookie } from "../../helpers/Cookie";
import axios from "axios";
import { CreateInputState, HandleBlur, handleInputChange } from "../../helpers/InputHandler";

type LoginFormProps = {
  className?: string;
};

const LoginForm = (props: LoginFormProps): JSX.Element => {
    const { setAuthenticated } = useContext(AuthContext);

    const navigate = useNavigate();
  
    const [email, setEmail] = CreateInputState();
    const [password, setPassword] = CreateInputState();
    const [, setError] = useState('');
  
    const handleLogin = async () => {
      const requestBody = {
        Email: email.value,
        Password: password.value,
      };

      try {
        const response = await axios.post<{ message: string, data: any }>(
          'http://localhost:8080/api/v1/login',
          requestBody,
        );
        const expire_at = new Date(new Date().getTime() + 60 * 60 * 1000);
        setCookie('token', response.data.data.token, expire_at);
        alert(response.data.message)
        setAuthenticated(true);
        navigate('/');
      } catch (err: any) {
        setError(err.message);
      }
    };

  return (
    <div className="mx-auto my-32 w-1/4  flex flex-col gap-8 border border-black p-8 backdrop-blur-lg bg-white bg-opacity-20 shadow-2xl">
      <Heading text="Login to Learnee" className="font-semibold text-3xl" />
      <InputBar
        label="Email"
        placeholder="abcupid@gmail.com"
        error={email.hasError}
        errorMessage="email field must be field"
        className="mx-auto w-3/4"
        onChange={(e) => handleInputChange(email, setEmail, e)}
        onBlur={() => HandleBlur(email, setEmail)}
      />
      <InputBar
        label="Password"
        placeholder="************"
        typeInput="Password"
        error={password.hasError}
        errorMessage="password field must be field"
        className="mx-auto w-3/4"
        onChange={(e) => handleInputChange(password, setPassword, e)}
        onBlur={() => HandleBlur(password, setPassword)}
      />
      <Button
        name="Login"
        className="text-white rounded-sm px-3 py-2 bg-violet-800 font-bold hover:bg-violet-500 m-auto"
        onClick={handleLogin}
      />
    </div>
  );
};

export default LoginForm;
