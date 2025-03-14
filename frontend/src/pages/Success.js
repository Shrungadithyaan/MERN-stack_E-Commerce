import React from 'react'
import SUCESSIMG from '../assest/success.gif';
import { Link } from 'react-router-dom';
const Success = () => {
  return (
    <div className=' w-full max-w-md mx-auto flex justify-center items-center flex-col p-4  m-2 rounded'>
        <img src={SUCESSIMG} alt="success" width={450} height={450} className='mix-blend-multiply'/>
        <p className='text-2xl font-semibold text-green-600'>payment successful</p>
        <Link to="/order" className='p-2 px-3 mt-5 border-2 border-green-600 text-green-600 font-semibold hover:bg-green-600 hover:text-white'>See Order</Link>
    </div>
  )
}

export default Success