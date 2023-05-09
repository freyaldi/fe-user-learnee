import React from "react";
import InputText from "../atoms/InputText";
import Error from "../atoms/Error";
import Label from "../atoms/Label";

type InputBarProps = {
  className?: string;
  label: string;
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
    <div className={props.className}>
      <Label label={props.label} className="float-left"/>
      <InputText
        className="rounded-sm w-full p-3 border border-black"
        placeholder={props.placeholder}
        value={props.value}
        typeInput={props.typeInput}
        isDisabled={props.isDisabled}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      <Error error={props.error} errorMessage={props.errorMessage} />
    </div>
  );
};

export default InputBar;
