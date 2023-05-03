import React from 'react';
import NotFoundImage from "../assets/404.png";
import Heading from '../components/atoms/Heading';

const NotFound = () => {
  return (
    <div className='flex flex-col'>
      <img src={NotFoundImage} alt="" className='w-1/3 mx-auto'/>
      <Heading text={'Page you looked for is not found'} className="font-semibold text-4xl"/>
    </div>
  )
}

export default NotFound