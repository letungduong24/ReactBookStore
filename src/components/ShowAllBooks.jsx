import { React, useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../config/api";
import SMLoading from "./SMLoading";
import Book from "./Book";

const ShowAllBooks = () => {
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
    <div className="">
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
      {books &&
        books.map((book) => {
          return (
            <Book
              key={book.id}
              name={book.name}
              author={book.author}
              price={`${book.price} vnđ`}
              image={book.image}
              link={`/book/${book.id}`}
              animaton="false"
            />
          );
        })}
    
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

export default ShowAllBooks;
