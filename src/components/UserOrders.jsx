import {React, useState, useEffect} from "react";
import api from "../config/api";
import SMLoading from "./SMLoading";
import dayjs from "dayjs";
const UserOrders = () => {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const { data } = await api.get(`/orders`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setOrders(data);
        } else {
          setOrders(null);
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setOrders(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserOrders();
  },[]);
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <SMLoading />
      </div>
    );
  }
  return (
    <div>
      <p className="font-medium text-2xl pb-3">Lịch sử mua hàng</p>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead>
            <tr>
              <th className="px-4 py-2 font-medium text-gray-900">
                Mã đơn hàng
              </th>
              <th className="px-4 py-2 font-medium text-gray-900">Ngày tạo</th>
              <th className="px-4 py-2 font-medium text-gray-900">
                Tên sản phẩm
              </th>
              <th className="px-4 py-2 font-medium text-gray-900">Số lượng</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders && orders.map((order) => {
              return (
                <tr className='text-center'>
                  <td className="px-4 py-2 font-medium text-gray-900">{order.id}</td>
                  <td className="px-4 py-2 text-gray-700">
                    {dayjs(order.createdAt).format("DD/MM/YYYY")}
                  </td>                  
                  <td className="px-4 py-2 text-gray-700">{order.book.name}</td>
                  <td className="px-4 py-2 text-gray-700">{order.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserOrders;
