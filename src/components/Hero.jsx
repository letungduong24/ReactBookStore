import React from 'react'
import { FaBagShopping } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='py-8 bg-gradient-to-r from-amber-50 to-orange-200'>
        <div className="px-10 container md:px-20 mx-auto">
            <div className="container flex items-center mx-auto gap-3">
                <div className="flex-1 flex flex-col gap-3">
                    <p className='text-4xl md:text-5xl font-bold' data-aos="zoom-out" data-aos-duration="500">Tiệm sách Mùa hạ</p>
                    <p data-aos="zoom-out" data-aos-duration="500">"Khơi nguồn tri thức, mở rộng chân trời – Mỗi cuốn sách là một cánh cửa dẫn lối bạn đến những vùng đất mới, những câu chuyện đầy cảm hứng và những ý tưởng thay đổi cuộc đời."</p>
                    <div className='w-fit items-center flex gap-0.5 bg-amber-600 p-2 rounded-2xl' data-aos="zoom-out" data-aos-duration="500">
                            <a href='/books' className='text-white'>Xem sản phẩm</a>
                            <FaBagShopping className="!fill-white"/>
                        </div>
                </div>
                <div className="flex-1 md:flex justify-end hidden" data-aos="zoom-out" data-aos-duration="500">
                    <img className='shadow-2xl max-h-100 rounded-2xl' src="/images/hero.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero