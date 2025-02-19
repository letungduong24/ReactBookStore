import { React, useState, useEffect } from "react";
import api from "../config/api";
import SMLoading from "./SMLoading";
import Button from "./Button";
import { FaRegStar } from "react-icons/fa6";
import Field from "./Field";
import { useParams } from "react-router-dom";

const ShowDetailBook = () => {
  const { slug } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetailBook = async () => {
      try {
        const { data } = await api.get(`/books/${slug}`);
        setBook(data);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setBook(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDetailBook();
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <SMLoading />
      </div>
    );
  }
  return (
    <div className="lg:grid grid-cols-2 grid-rows-3 gap-4">
      <div className="row-span-4 flex items-center justify-center p-5 mb-5 lg:mb-0">
        <img
          src={book.image}
          className="md:h-120 hover:scale-110 transition-transform duration-300 shrink-0 w-fit object-cover object-center shadow-2xl rounded-3xl"
          alt=""
        />
      </div>
      <div className="">
        <div className="flex justify-between">
          <p className="font-bold text-3xl">{book.name}</p>
        </div>
        <p className="font-medium text-2xl">{book.author}</p>
        <p className="text-2xl text-amber-900">{book.price} vnđ</p>
        <div className="flex gap-3 items-center my-3">
          <div className="w-fit">
            <label className="flex-1 block" htmlFor="">
              Số lượng
            </label>
          </div>
          <div className="flex-1">
            <Field label="" name="quantity" type="number" />
          </div>
        </div>
      </div>
      <div className="row-span-2 col-start-2 flex flex-col gap-5">
        <div className="">
          <p>Tác giả: {book.author}</p>
          <p>Số trang: {book.numOfPages}</p>
          <p>Ngày in: {book.printDate}</p>
        </div>
        <div className="">
          <p>
            {book.description}
          </p>
        </div>
      </div>
      <div className="col-start-2 row-start-4 flex justify-between items-end">
        <div className="font-bold flex gap-2 items-center">
          <p>Đánh giá: {book.rate} </p>
          <FaRegStar className="fill-amber-400" />
        </div>
        <div className="">
          <div className="">
            <form action="" className="">
              <Button name="Mua ngay" href="/" type="a" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetailBook;
