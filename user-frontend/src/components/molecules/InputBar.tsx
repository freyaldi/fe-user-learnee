import React from "react";
import InputText from "../atoms/InputText";
import Error from "../atoms/Error";

type InputBarProps = {
  className?: string;
  label?: string;
  placeholder: string;
  value?: string;
  typeInput?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  error: boolean;
  errorMessage: string;
  isDisabled?: boolean;
};

const InputBar = (props: InputBarProps): JSX.Element => {
  return (
    <div>
      <InputText
        className={props.className}
        placeholder={props.placeholder}
        value={props.value}
        typeInput={props.typeInput}
        isDisabled={props.isDisabled}
      />
      <Error error={props.error} errorMessage={props.errorMessage} />
    </div>
  );
};

export default InputBar;
