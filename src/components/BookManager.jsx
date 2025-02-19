import { React, useState, useEffect } from "react";
import { FaEye } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import Button from "./Button";
import api from "../config/api";
import { useNavigate } from 'react-router-dom';
import SMLoading from "./SMLoading";

const BookManager = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const fetchBooks = async (page = 1) => {
    setLoading(true);
    try {
      const { data } = await api.get(`/books?page=${page}`);
      setBooks(data.data); 
      setCurrentPage(data.current_page); 
      setLastPage(data.last_page); 
    } catch (err) {
      console.error("Error fetching books data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= lastPage) {
      setCurrentPage(page);
    }
  };
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <SMLoading />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <p className="md:text-2xl font-bold">Quản lý sách</p>
        <Button name="Thêm sách" type="a" />
      </div>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Mã sách
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Tên sách
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Giá
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Tác giả
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Số lượng
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {books && books.map((book) => (
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {book.id}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {book.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {book.price}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {book.author}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {book.InventoryQuantity}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-xs">
                    <button
                      onClick={() => {navigate(`/book/${book.id}`)}}
                      className="inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative cursor-pointer"
                      title="Edit Product"
                    >
                      <FaEye />
                    </button>

                    <a
                      href="/admin/books/edit"
                      className="inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                      title="Delete Product"
                    >
                      <FaPenToSquare />
                    </a>

                    <button
                      className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                      title="Delete Product"
                    >
                      <FaTrash />
                    </button>
                  </span>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1 || loading}
          className="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50"
        >
          Trước
        </button>

        {[...Array(lastPage)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={loading}
            className={`px-4 py-2 border rounded ${
              currentPage === index + 1 ? "bg-gray-200" : ""
            } hover:bg-gray-100`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === lastPage || loading}
          className="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50"
        >
          Sau
        </button>
      </div>

    </div>
  );
};

export default BookManager;
