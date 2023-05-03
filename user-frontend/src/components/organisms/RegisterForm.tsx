import React, { useContext } from "react";
import { AuthContext } from "../../hooks/AuthContext";
import { useNavigate } from "react-router-dom";
import Heading from "../atoms/Heading";
import InputBar from "../molecules/InputBar";
import Button from "../atoms/Button";

const RegisterForm = () => {
  const { setAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = async () => {
    setAuthenticated(true);
    navigate("/");
  };

  return (
    <div className="mx-auto my-32 w-1/2  grid grid-cols-2 gap-8 border border-black p-8 backdrop-blur-lg bg-white bg-opacity-20 shadow-2xl">
      <Heading
        text="Get Started as Learnee"
        className="font-semibold text-3xl col-span-2"
      />
      <InputBar
        label="Name"
        placeholder="Al B. Cupid"
        error={false}
        errorMessage="name field must be field"
      />
      <InputBar
        label="Email"
        placeholder="abcupid@gmail.com"
        error={false}
        errorMessage="email field must be field"
      />
      <InputBar
        label="Password"
        placeholder="************"
        typeInput="Password"
        error={false}
        errorMessage="password field must be field"
      />
      <InputBar
        label="Password Confirmation"
        placeholder="************"
        typeInput="Password"
        error={false}
        errorMessage="password confirmation field must be field"
      />
      <InputBar
        label="Phone Number"
        placeholder="6281234567890"
        error={false}
        errorMessage="phone number field must be field"
      />
      <InputBar
        label="Referral Code"
        placeholder="e.g. REF-201A3"
        error={false}
        errorMessage="referral code is invalid"
      />
      <InputBar
        label="Address"
        placeholder="Jl. Fifty Fifty"
        error={false}
        errorMessage="address field must be field"
        className="col-span-2"
      />
      <Button
        name="Register"
        className="text-white rounded-sm px-3 py-2 bg-violet-800 font-bold hover:bg-violet-500 m-auto col-span-2"
        onClick={handleRegister}
      />
    </div>
  );
};

export default RegisterForm;
