import React from 'react'
import Feedback from './Feedback'

const FeedBacks = () => {
  return (
    <div className='py-10 bg-gradient-to-r from-amber-50 to-orange-200'>
        <div data-aos="zoom-in" className="container px-10 md:px-20 mx-auto flex flex-col items-center">
            <div className="md:pb-10 pb-5 text-center md:text-start">
                <p className='text-3xl font-bold flex justify-center'>Trải nghiệm của khách hàng</p>
                <p className='flex justify-center'>Cảm ơn quý khách đã luôn tin tưởng và ủng hộ Tiệm sách Mùa hạ!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                <Feedback 
                    avatar="/images/erik.jpg"
                    name="Erik"
                    feedback="Erik rất hài lòng khi mua hàng tại Tiệm sách Mùa hạ. Nố nô nồ!!"
                />
                <Feedback 
                    avatar="/images/soobin.jpg"
                    name="Soobin Hoàng Sơn"
                    feedback="GIÁ NHƯ Soobin biết đến Tiệm sách Mùa hạ sớm hơn. Mua sách quá đã!"
                />
                <Feedback 
                    avatar="/images/mark.jpg"
                    name="Mark Zuckerberg"
                    feedback="Very good!! I will promote Tiem sach Mua He on Meta"
                />
                <Feedback 
                    avatar="/images/jisoo.jpg"
                    name="Kim Jisoo"
                    feedback="I love Tiem sach Mua he. I will buy books for my Blackpink girls"
                />
            </div>
        </div>
    </div>
  )
}

export default FeedBacks