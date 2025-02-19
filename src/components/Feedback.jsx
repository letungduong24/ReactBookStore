import React from 'react'

const Feedback = ({avatar, name, feedback}) => {
  return (
    <div className="flex flex-col gap-3 shadow-2xl rounded-2xl p-5 bg-white">
        <div className='flex gap-2'>
            <img src={avatar} className='rounded-4xl w-15 h-15 object-cover object-center' alt="" />
            <div className="flex items-center col-span-2 text text-[20px] font-bold">{name}</div>
        </div>
        <div className="">{feedback}</div>
    </div>
  )
}

export default Feedback