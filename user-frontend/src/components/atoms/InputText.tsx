import React from "react";

type InputTextProps = {
  className?: string;
  placeholder: string;
  value?: string;
  typeInput?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  isDisabled?: boolean;
};

const InputText = (props: InputTextProps): JSX.Element => {
  return (
    <div className="w-full">
      <input
        placeholder={props.placeholder}
        className={props.className}
        disabled={props.isDisabled}
        type={props.typeInput}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default InputText;
