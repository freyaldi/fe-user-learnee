import React from 'react';

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  name: string;
  className?: string;
};

const Button = (props: ButtonProps): JSX.Element => {
  return (
    <button className={`${props.className}`} onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default Button;