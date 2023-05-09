import { useState } from "react";

export interface InputState {
  value: string;
  hasError: boolean;
  touched: boolean;
}

export type InputSetter = React.Dispatch<React.SetStateAction<InputState>>;

export const handleInputChange = (
  input: InputState,
  setInput: InputSetter,
  e: React.ChangeEvent<HTMLInputElement>
) => {
  setInput((currentValue) => ({
    ...currentValue,
    value: e.target.value,
    hasError: currentValue.touched && e.target.value === "",
  }));
};

export const HandleBlur = (input: InputState, setInput: InputSetter) => {
  setInput((currentValue) => ({
    ...currentValue,
    touched: true,
    hasError: currentValue.value === "",
  }));
};

export const CreateInputState = () => useState<InputState>({
  value: '',
  hasError: false,
  touched: false,
});
