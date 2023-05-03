import React, { useContext } from "react";
import InputBar from "../molecules/InputBar";
import Button from "../atoms/Button";
import { AuthContext } from "../../hooks/AuthContext";
import { useNavigate } from "react-router-dom";
import Heading from "../atoms/Heading";

type LoginFormProps = {
  className?: string;
};

const LoginForm = (props: LoginFormProps): JSX.Element => {
  const { setAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setAuthenticated(true);
    navigate("/");
  };
  return (
    <div className="mx-auto w-1/4  flex flex-col gap-8 border border-black p-10 backdrop-blur-lg bg-white bg-opacity-20 shadow-lg">
      <Heading text="Login to Learnee" className="font-semibold text-3xl" />
      <InputBar
        label="Email"
        placeholder="abcupid@gmail.com"
        error={false}
        errorMessage="email field must be field"
        className="rounded-sm w-3/4 p-3 border border-black p-auto"
      />
      <InputBar
        label="Password"
        placeholder="************"
        typeInput="Password"
        error={false}
        errorMessage="password field must be field"
        className="rounded-sm w-3/4 p-3 border border-black p-auto"
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
