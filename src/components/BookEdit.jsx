import React from "react";
import Button from "./Button";
import Field from "./Field";
import ImageUpload from "./ImageUpload";
import { AuthContext } from "../context/AuthContext";

const BookEdit = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <p className="md:text-2xl font-bold">Sửa sách</p>

      </div>
      <div className="">
        <div className="grid grid-cols-2 grid-rows-1 gap-4">
            <div >
              <div className=" flex flex-col gap-4">
                <form className="flex flex-col items-center lg:items-start gap-3">
                  <Field label="Tên" type="text" name="name" value="Mắt biếc" />
                  <Field
                    label="Giá"
                    type="number"
                    name="price"
                    value="200000"
                  />
                  <Field
                    label="Tác giả"
                    type="text"
                    name="author"
                    value="Nguyễn Nhật Ánh"
                  />
                  <div className="form-control flex flex-col w-[90%] md:w-[80%] lg:w-[90%]">
                      <label htmlFor="">Mô tả</label>
                      <textarea className="h-30 rounded-2xl border-amber-600 focus:border-amber-800 focus:ring-amber-800" 
                        value="Một tác phẩm được nhiều người bình chọn là hay nhất của nhà văn này. Một tác phẩm đang được dịch và giới thiệu tại Nhật Bản (theo thông tin từ các báo)… Bởi sự trong sáng của một tình cảm, bởi cái kết thúc rất, rất buồn khi suốt câu chuyện vẫn là những điều vui, buồn lẫn lộn (cái kết thúc không như mong đợi của mọi người). Cũng bởi, mắt biếc… năm xưa nay đâu (theo lời một bài hát)"
                        name="" id="">
                      </textarea>
                    </div>
                  <div className="w-fit">
                    <Button name="Lưu" type="button" />
                  </div>
                </form>
              </div>
            </div>
            <div >
              <div className="row-span-4 flex flex-col items-center justify-center p-5 mb-5 lg:mb-0">
                <ImageUpload />
              </div>  
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default BookEdit;
