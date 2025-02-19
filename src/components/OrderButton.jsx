import React from 'react'
import { FaBagShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'
const OrderButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => {navigate('/books')}} className='cursor-pointer items-center flex gap-0.5 bg-amber-600 p-1 sm:p-2 rounded-2xl'>
        <span className='text-white hidden md:block'>Đặt hàng</span>
        <FaBagShopping className="!fill-white"/>
    </button>
  )
}

export default OrderButton