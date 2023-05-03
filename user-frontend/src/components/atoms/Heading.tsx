import React from 'react'

type HeadingProps = {
    className?: string;
    text: string;
};

const Heading = (props: HeadingProps): JSX.Element => {
  return (
    <h1 className={props.className}>{props.text}</h1>
  )
}

export default Heading;