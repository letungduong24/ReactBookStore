import React, { useState, useContext } from "react";
import Button from './Button';
import Field from './Field';
import NavBar from './NavBar';
import About from './About';
import api from '../config/api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !password) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return false;
    }
    setError("");
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; 

    api.get('/sanctum/csrf-cookie').then(() => {
      api.post(`/auth/login`, { email, password })
        .then(response => {
          if (response && response.data && response.data.error) {
            setError(response.data.error);
          } else {
            login(response.data.user, response.data.token);
            navigate('/');
          }
        })
        .catch(err => {
          console.error('Error during login request:', err);
          setError("Thông tin không hợp lệ, vui lòng thử lại!");
        });
    });
  };

  return (
    <div className='m-0'>
      <NavBar />
      <div className='py-10 bg-gradient-to-r from-amber-50 to-orange-200'>
        <div className="h-[80%] w-[100%] container px-10 md:px-20 mx-auto">
          <div className="container h-[100%] w-[100%] rounded-3xl bg-white grid grid-cols-3 grid-rows-1 gap-4 items-center">
            <div className="h-[100%] rounded-l-3xl hidden lg:block">
              <img className='hidden lg:block rounded-l-3xl object-center object-cover h-[100%]' src="/images/login.jpg " alt="" />
            </div>
            <div className="col-span-3 lg:col-span-2 p-6 w-full max-w-lg mx-auto">
              <p className='text-4xl font-bold text-center pb-8'>Đăng nhập</p>
              <form onSubmit={handleLogin} className='w-[100%] flex flex-col items-center gap-8'>
                <Field
                  label='Tài khoản / Email'
                  type='text'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Field
                  label='Mật khẩu'
                  type='password'
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="text-red-500">{error}</p>}
                <div className="w-fit form-control flex flex-col">
                  <Button
                    name="Đăng nhập"
                    handleFunction={handleLogin}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <p>Chưa có tài khoản? <a href="/register" className='font-bold'>Đăng ký</a></p>
                  <a href="/" className='font-bold'>Quên mật khẩu</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
}

export default Login;
