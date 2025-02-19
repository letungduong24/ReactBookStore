import React from "react";
import { FaEye } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import Button from "./Button";

const UserManager = () => {
  return (
    <div>
      <div className="container p-6 flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="md:text-2xl font-bold">Quản lý người dùng</p>
          <Button name="Thêm người dùng" type="a" />
        </div>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Mã người dùng
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Tên
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Email
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Số điện thoại
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Địa chỉ
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  001
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  Lê Tùng Dương
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  duong.lt1604@gmail.com
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                   0865641682
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                   17/785 Trương Định, Hoàng Mai, Hà Nội
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-xs">
                    <button
                      className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                      title="Delete Product"
                    >
                      <FaTrash />
                    </button>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

        <ol className="flex justify-center gap-1 text-xs font-medium">
          <li>
            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded-sm border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded-sm border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              1
            </a>
          </li>

          <li className="block size-8 rounded-sm border-amber-600 bg-amber-600 text-center leading-8 text-white">
            2
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded-sm border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              3
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded-sm border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              4
            </a>
          </li>

          <li>
            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded-sm border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default UserManager;
