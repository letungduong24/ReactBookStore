import React, { useState, useEffect, useContext } from "react"; import { FaCaretDown } from "react-icons/fa6";
import OrderButton from "./OrderButton";
import api from "../config/api";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const MenuItems = [
    { id: 1, name: "Trang chủ", link: "/#" },
  ];

  const DropDownItems = [
    { id: 1, name: "Đăng nhập", link: "/login" },
    { id: 2, name: "Đăng ký", link: "/register" },
  ];

  const AuthDropDownItems = [
    { id: 1, name: "Thông tin", link: "/profile" },
  ];

  const handleLogout = async (event) => {
    event.preventDefault();
    await logout();
    navigate('/login');
  };

  return (
    <div className="shadow-2xl py-2 items-center flex">
      <div className="container px-10 md:px-20 p-2 mx-auto">
        <div className="flex justify-between items-center">
          <div className="font-bold md:text-2xl">TSMH</div>
          <div>
            <ul className="flex gap-3 items-center">
              {MenuItems.map((MenuItem) => (
                <li key={MenuItem.id}>
                  <button className="cursor-pointer" onClick={() => {navigate(MenuItem.link)}}>{MenuItem.name}</button>
                </li>
              ))}
              <li className="group flex items-center gap-0.5 relative">
                <a href="#">Tài khoản</a>
                <FaCaretDown className="group-hover:rotate-180 transition duration-300" />
                <div className="absolute hidden bg-white p-4 rounded z-10 group-focus-within:block top-7">
                  <ul>
                    {(user ? AuthDropDownItems : DropDownItems).map((DropDownItem) => (
                      <li key={DropDownItem.id}>
                        <button className="cursor-pointer hover:text-white transition duration-150 hover:bg-amber-600 w-24 inline-block p-2 rounded" onClick={() => {navigate(DropDownItem.link)}}>
                          {DropDownItem.name}
                        </button>
                      </li>
                    ))}
                    {user && user.role === 0 && (
                      <li>
                        <button className="cursor-pointer hover:text-white transition duration-150 hover:bg-amber-600 w-24 inline-block p-2 rounded" onClick={() => {navigate('/admin')}}>
                          AdminPanel
                        </button>
                      </li>
                    )}
                    {user && (
                      <li>
                        <form onSubmit={handleLogout}>
                          <button className="cursor-pointer hover:text-white transition duration-150 hover:bg-red-600 w-24 inline-block p-2 rounded" type="submit">
                            Đăng xuất
                          </button>
                        </form>
                      </li>
                    )}
                  </ul>
                </div>
              </li>
              <li>
                <OrderButton />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
