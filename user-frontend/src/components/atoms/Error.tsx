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
        <div className="text-red-500 absolute">{props.errorMessage}</div>
      )}
    </>
  );
};

export default Error;
