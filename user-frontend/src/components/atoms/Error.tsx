import React from "react";

type ErrorProps = {
  className?: string;
  error: boolean;
  errorMessage: string;
};

const Error = (props: ErrorProps): JSX.Element => {
  return (
    <>
      {props.error && (
        <span className={props.className}>{props.errorMessage}</span>
      )}
    </>
  );
};

export default Error;
