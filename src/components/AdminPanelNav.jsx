import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const AdminPanelNav = () => {
  const location = useLocation();

  return (
    <div>
      <div className="flex lg:h-screen flex-col justify-between bg-white">
        <div className="p-6">
          <p className="text-2xl font-bold text-center mb-3">TSMH</p>
          <ul className="space-y-1 grid grid-cols-3 lg:flex lg:flex-col justify-between">
            <li className="flex justify-center lg:justify-start">
              <NavLink
                to="/admin"
                className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                  location.pathname === "/admin"
                    ? "bg-gray-100 text-gray-700 font-semibold"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                Trang chủ
              </NavLink>
            </li>
            <li className="flex justify-center lg:justify-start">
              <NavLink
                to="/admin/books"
                className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                  location.pathname.startsWith("/admin/books")
                    ? "bg-gray-100 text-gray-700 font-semibold"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                Quản lý sách
              </NavLink>
            </li>
            <li className="flex justify-center lg:justify-start">
              <NavLink
                to="/admin/users"
                className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                  location.pathname.startsWith("/admin/users")
                    ? "bg-gray-100 text-gray-700 font-semibold"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                Quản lý người dùng
              </NavLink>
            </li>
            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                  className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Quản lý đơn hàng </span>
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <NavLink
                      to="/admin/users"
                      className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                        location.pathname.startsWith("/admin/users")
                          ? "bg-gray-100 text-gray-700 font-semibold"
                          : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      }`}
                    >
                      Đơn hàng đang xử lí
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin/users"
                      className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                        location.pathname.startsWith("/admin/users")
                          ? "bg-gray-100 text-gray-700 font-semibold"
                          : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      }`}
                    >
                      Đơn hàng đang giao
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin/users"
                      className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                        location.pathname.startsWith("/admin/users")
                          ? "bg-gray-100 text-gray-700 font-semibold"
                          : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      }`}
                    >
                      Đơn hàng đã giao
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li className="flex justify-center lg:justify-start">
              <NavLink
                to="/admin"
                className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                  location.pathname === "/admin"
                    ? "bg-gray-100 text-gray-700 font-semibold"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                Quản lý nhập hàng
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelNav;
