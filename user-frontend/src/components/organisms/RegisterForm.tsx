import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../atoms/Heading";
import InputBar from "../molecules/InputBar";
import Button from "../atoms/Button";
import axios from "axios";
import { CreateInputState, HandleBlur, handleInputChange } from "../../helpers/InputHandler";

const RegisterForm = () => {

    const navigate = useNavigate();

    const [name, setName] = CreateInputState();
    const [email, setEmail] = CreateInputState();
    const [password, setPassword] = CreateInputState();
    const [passwordConfirmation, setPasswordConfirmation] = CreateInputState();
    const [phoneNumber, setPhoneNumber] = CreateInputState();
    const [address, setAddress] = CreateInputState();
    const [referral, setReferral] = CreateInputState();
    const [, setError] = useState('');
  
    const handleRegister = async () => {
      const requestBody = {
        email: email.value,
        password: password.value,
        fullname: name.value,
        address: address.value,
        phone_number: phoneNumber.value,
      };

      try {
        const response = await axios.post<{ message: string, data: any }>(
          'http://localhost:8080/api/v1/register',
          requestBody,
        );
        alert(response.data.message)
        navigate('/login');
      } catch (err: any) {
        setError(err.message);
        console.log(err)
      }
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
        error={name.hasError}
        errorMessage="name field must be field"
        onChange={(e) => handleInputChange(name, setName, e)}
        onBlur={() => HandleBlur(name, setName)}
      />
      <InputBar
        label="Email"
        placeholder="abcupid@gmail.com"
        error={email.hasError}
        errorMessage="email field must be field"
        onChange={(e) => handleInputChange(email, setEmail, e)}
        onBlur={() => HandleBlur(email, setEmail)}
      />
      <InputBar
        label="Password"
        placeholder="************"
        typeInput="Password"
        error={password.hasError}
        errorMessage="password field must be field"
        onChange={(e) => handleInputChange(password, setPassword, e)}
        onBlur={() => HandleBlur(password, setPassword)}
      />
      <InputBar
        label="Password Confirmation"
        placeholder="************"
        typeInput="Password"
        error={passwordConfirmation.hasError}
        errorMessage="password confirmation field must be field"
        onChange={(e) => handleInputChange(passwordConfirmation, setPasswordConfirmation, e)}
        onBlur={() => HandleBlur(passwordConfirmation, setPasswordConfirmation)}
      />
      <InputBar
        label="Phone Number"
        placeholder="6281234567890"
        error={phoneNumber.hasError}
        errorMessage="phone number field must be field"
        onChange={(e) => handleInputChange(phoneNumber, setPhoneNumber, e)}
        onBlur={() => HandleBlur(phoneNumber, setPhoneNumber)}
      />
      <InputBar
        label="Referral Code"
        placeholder="e.g. REF-201A3"
        error={referral.hasError}
        errorMessage="referral code is invalid"
        onChange={(e) => handleInputChange(referral, setReferral, e)}
      />
      <InputBar
        label="Address"
        placeholder="Jl. Fifty Fifty"
        error={address.hasError}
        errorMessage="address field must be field"
        className="col-span-2"
        onChange={(e) => handleInputChange(address, setAddress, e)}
        onBlur={() => HandleBlur(address, setAddress)}
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
