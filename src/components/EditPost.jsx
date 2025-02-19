import React from 'react'
import NavBar from './NavBar'
import Button from './Button'
import About from './About'
import Field from './Field'

const EditProfile = () => {
  return (
    <div className=''>
        <NavBar />
        <div className='py-10 bg-gradient-to-r from-amber-50 to-orange-200'>
        <div className="container px-10 md:px-20 w-full mx-auto">
                <div className="bg-white mx-auto w-full rounded-3xl p-12">
                    <div className="lg:grid grid-cols-2 grid-rows-4 gap-4">
                        <div className="row-span-4 flex items-center justify-center p-5 mb-5 lg:mb-0">
                            <img src="/images/matbiec.jpg" className='md:h-120 hover:scale-110 transition-transform duration-300 shrink-0 w-fit object-cover object-center shadow-2xl rounded-3xl' alt="" />
                        </div>
                        <div className="">
                            <div className=" flex flex-col gap-4">
                                <div className="flex justify-between">
                                    <p className='font-bold text-3xl'>Sửa thông tin</p>
                                </div>
                                <form className="flex flex-col gap-3">
                                    <p className='font-medium text-2xl'>Thông tin</p>
                                    <Field
                                        label='Tên' 
                                        type='text'
                                        name='name'
                                        value='Lê Tùng Dương'
                                    />
                                    <Field
                                        label='Địa chỉ' 
                                        type='text'
                                        name='address'
                                        value='17/785 Trương Định, Hoàng Mai, Hà Nội'
                                    />
                                    <Field
                                        label='Email' 
                                        type='email'
                                        name='email'
                                        value='duong.lt1604@gmail.com'
                                    />
                                    <Field
                                        label='SĐT' 
                                        type='number'
                                        name='phone'
                                        value='0865641682'
                                    />
                                    <div className="w-fit">
                                        <Button 
                                            name='Lưu'
                                            type='button'
                                        />
                                    </div> 
                                </form>

                                <div className="flex flex-col gap-3">
                                    <p className='font-medium text-2xl'>Mật khẩu</p>
                                    <Field
                                        label='Mật khẩu cũ' 
                                        type='password'
                                        name='oldpassword'
                                    />
                                    <Field
                                        label='Mật khẩu mới' 
                                        type='password'
                                        name='newpassword'
                                    />
                                    <div className="w-fit">
                                        <Button 
                                            name='Lưu'
                                            type='button'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            <div className="container px-10 md:px-20 w-full mx-auto">
                <div className="bg-white mx-auto w-full rounded-3xl p-12">
                    <div className="">
                        <div className=" flex flex-col gap-4">
                            <div className="flex justify-between">
                                <p className='font-bold text-3xl'>Sửa thông tin</p>
                            </div>
                            <form className="flex flex-col gap-3">
                                <p className='font-medium text-2xl'>Thông tin</p>
                                <Field
                                    label='Tên' 
                                    type='text'
                                    name='name'
                                    value='Lê Tùng Dương'
                                />
                                <Field
                                    label='Địa chỉ' 
                                    type='text'
                                    name='address'
                                    value='17/785 Trương Định, Hoàng Mai, Hà Nội'
                                />
                                <Field
                                    label='Email' 
                                    type='email'
                                    name='email'
                                    value='duong.lt1604@gmail.com'
                                />
                                <Field
                                    label='SĐT' 
                                    type='number'
                                    name='phone'
                                    value='0865641682'
                                />
                                <div className="w-fit">
                                    <Button 
                                        name='Lưu'
                                        type='button'
                                    />
                                </div> 
                            </form>

                            <div className="flex flex-col gap-3">
                                <p className='font-medium text-2xl'>Mật khẩu</p>
                                <Field
                                    label='Mật khẩu cũ' 
                                    type='password'
                                    name='oldpassword'
                                />
                                <Field
                                    label='Mật khẩu mới' 
                                    type='password'
                                    name='newpassword'
                                />
                                <div className="w-fit">
                                    <Button 
                                        name='Lưu'
                                        type='button'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>  
        <About />
    </div>
  )
}

export default EditProfile