import {React, useState, useEffect} from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import SMLoading from "./SMLoading";
import api from "../config/api";
import { FaBoxesPacking } from "react-icons/fa6";
import { FaBoxArchive } from "react-icons/fa6";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const { data } = await api.get(`/admin`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setData(data);
        } else {
          setData(null);
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setData(null);
      } finally {
        setLoading(false);

      }
    };

    fetchData();
  },[]);
  if (loading) {
    return (
      <div className="flex items-center justify-center p-6">
        <SMLoading />
      </div>
    );
  }
  return (
    <div>
      <div className="container p-6 flex flex-col gap-4">
        <p className="text-2xl font-bold">Bảng quản trị</p>
        <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6">
          <div className="inline-flex gap-2 self-end rounded-sm bg-green-100 p-1 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>

            <span className="text-xs font-medium"> {data.percentageIncrease} % </span>
          </div>

          <div>
            <strong className="block text-sm font-medium text-gray-500">
              {" "}
              Doanh thu tháng này{" "}
            </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900">
                {" "}
                {data.revenueThisMonth} vnđ{" "}
              </span>

              <span className="text-xs text-gray-500"> từ {data.revenueLastMonth} vnđ </span>
            </p>
          </div>
        </article>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <article className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-6">
            <FaCircleUser className="text-3xl" />
            <div>
              <p className="text-2xl font-medium text-gray-900">{data.userCount}</p>
              <p className="text-sm text-gray-500">Người dùng</p>
            </div>
          </article>
          <article className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-6">
            <FaBook  className="text-3xl" />
            <div>
              <p className="text-2xl font-medium text-gray-900">200</p>
              <p className="text-sm text-gray-500">Loại sách</p>
            </div>
          </article>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <article className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-6">
            <FaBoxArchive className="text-3xl" />
            <div>
              <p className="text-2xl font-medium text-gray-900">{data.userCount}</p>
              <p className="text-sm text-gray-500">Đơn hàng đang chờ duyệt</p>
            </div>
          </article>
          <article className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-6">
            <FaBoxesPacking  className="text-3xl" />
            <div>
              <p className="text-2xl font-medium text-gray-900">200</p>
              <p className="text-sm text-gray-500">Đơn hàng đang vận chuyển</p>
            </div>
          </article>
          <article className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-6">
            <FaBoxOpen  className="text-3xl" />
            <div>
              <p className="text-2xl font-medium text-gray-900">200</p>
              <p className="text-sm text-gray-500">Đơn hàng đã giao</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
