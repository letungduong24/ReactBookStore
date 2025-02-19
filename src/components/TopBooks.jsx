import React from 'react'
import Book from './Book'
import Button from './Button'

const TopBooks = () => {
  return (
    <div className='py-10'>
        <div className="container px-10 md:px-20 mx-auto flex flex-col items-center">
            <div className="md:pb-10 pb-5 text-center md:text-start">
                <p className='text-3xl font-bold flex justify-center'>Sách bán chạy</p>
                <p className='flex justify-center'>Những cuốn sách được yêu thích nhất tại Tiệm sách Mùa hạ</p>
            </div>
            <div className="grid md:grid-cols-3 md:gap-10">
                <Book
                    name="Tôi thấy hoa vàng trên cỏ xanh"
                    author="Nguyễn Nhật Ánh"
                    price="50.000vnđ"
                    image="/images/tthvtcx.jpg"
                    link="/details"
                />
                <Book
                    name="Mắt biếc"
                    author="Nguyễn Nhật Ánh"
                    price="50.000vnđ"
                    image="/images/matbiec.jpg"
                />
                <Book
                    name="Cô gái đến từ hôm qua"
                    author="Nguyễn Nhật Ánh"
                    price="50.000vnđ"
                    image="/images/cgdthq.jpg"
                />
            </div>
            <div className="w-fit mt-10">
                <Button 
                    name="Xem tất cả sách"
                    image="/books"
                />
            </div>
        </div>
    </div>
  )
}

export default TopBooks