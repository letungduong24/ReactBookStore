import React from "react";
import BookManager from './BookManager'
import BookEdit from './BookEdit'
import { Routes, Route } from "react-router-dom";

const BookDashboard = () => {
  return (
    <div>
      <div className="container p-6 flex flex-col gap-4">
        <div className="">
        <Routes>
            <Route path='/' element={<BookManager />} /> 
            <Route path='/edit' element={<BookEdit />} /> 
        </Routes>
        </div>
      </div>
    </div>
  );
};

export default BookDashboard;
