import React from "react";

type LabelProps = {
  className?: string;
  label: string;
};

const Label = (props: LabelProps): JSX.Element => {
  return (
    <label htmlFor={props.label} className={props.className}>
      {props.label}
    </label>
  );
};

export default Label;
