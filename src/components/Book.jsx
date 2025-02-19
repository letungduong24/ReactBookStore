import React from 'react'
import Button from './Button'

const Book = React.memo(({ name, author, price, image, link, animaton }) => {
  if(animaton=="true"){
    return ( 
      <div data-aos="zoom-out" className="rounded-2xl item p-3 flex flex-col justify-center items-center">
        <img src={image} className='mb-4 hover:scale-110 transition-transform duration-300 shrink-0 h-60 w-40 lg:h-80 lg:w-55 object-cover object-center shadow-2xl rounded-2xl' alt="" />
        <p className='font-bold flex-1'>{name}</p>
        <p className='flex-1 font-medium'>{author}</p>
        <p className='flex-1 text-amber-900'>{price}</p>
        <div className="w-fit mt-2">
            <Button 
              name="Chi tiết"
              href={link}
            />
        </div>
      </div>
    )
  }
  if(animaton=="false"){
    return ( 
      <div className="rounded-2xl item p-3 flex flex-col justify-center items-center">
        <img src={image} className='mb-4 hover:scale-110 transition-transform duration-300 shrink-0 h-60 w-40 lg:h-80 lg:w-55 object-cover object-center shadow-2xl rounded-2xl' alt="" />
        <p className='font-bold flex-1 text-center'>{name}</p>
        <p className='flex-1 font-medium'>{author}</p>
        <p className='flex-1 text-amber-900'>{price}</p>
        <div className="w-fit mt-2">
            <Button 
              name="Chi tiết"
              href={link}
            />
        </div>
      </div>
    )
  }
})

export default Book