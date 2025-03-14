import React from 'react'
import CANCELIMG from '../assest/cancel.gif'
import { Link } from 'react-router-dom';
const Cancel = () => {
  return (
    <div className=' w-full max-w-md mx-auto flex justify-center items-center flex-col p-4  m-2 rounded'>
            <img src={CANCELIMG} alt="success" width={450} height={450} className='mix-blend-multiply'/>
            <p className='text-2xl font-semibold text-red-600'>payment Canceled</p>
            <Link to="/cart" className='p-2 px-3 mt-5 border-2 border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white'>Go to Cart</Link>
        </div>
  )
}

export default Cancel