import React from 'react'
import NavBar from './NavBar'
import About from './About'
import Book from './Book'
import ShowAllBooks from './ShowAllBooks'

const AllBooks = () => {
  return (
    <div className='h-screen'>
        <NavBar />
        <div className='py-10 bg-gradient-to-r from-amber-50 to-orange-200'>
            <div className="container px-10 md:px-20 w-full mx-auto">
                <div className="bg-white mx-auto w-full rounded-3xl p-8">
                    <p className='text-4xl font-bold text-center pb-4'>Tất cả sách</p>
                    <ShowAllBooks />
                </div>
            </div>
        </div>  
        <About />
    </div>
  )
}

export default AllBooks