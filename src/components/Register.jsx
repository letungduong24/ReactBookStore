import React from 'react'
import Button from './Button'
import Field from './Field'
import NavBar from './NavBar'
import About from './About'

const Register = () => {
  return (
    <div className='h-screen'>
    <NavBar />
    <div className='py-10 bg-gradient-to-r from-amber-50 to-orange-200'>
        <div className="h-[80%] w-[100%] container px-10 md:px-20 mx-auto">
            <div className="container h-[100%] w-[100%] rounded-3xl bg-white grid grid-cols-3 grid-rows-1 gap-4 items-center">
                <div className="h-[100%] rounded-l-3xl hidden lg:block">
                    <img className='hidden lg:block rounded-l-3xl object-center object-cover h-[100%]' src="/images/register.jpg " alt="" />
                </div>
                <div className="col-span-3 lg:col-span-2 p-6 w-full max-w-lg mx-auto">
                    <p className='text-4xl font-bold text-center pb-8'>Đăng ký</p>
                    <form action="" className='w-[100%] flex flex-col items-center gap-8'>
                        <Field
                            label='Tài khoản' 
                            type='text'
                            name='username'
                        />
                        <Field
                            label='Email' 
                            type='email'
                            name='email'
                        />
                        <Field
                            label='Mật khẩu' 
                            type='password'
                            name='password'
                        />
                        <div className="w-fit form-control flex flex-col">
                            <Button 
                                name="Đăng nhập"
                                href="/"
                                type="button"
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <p>Đã có tài khoản? <a href="/login" className='font-bold'>Đăng nhập</a></p>
                            <a href="/" className='font-bold'>Quên mật khẩu</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <About />
    </div>
  )
}

export default Register