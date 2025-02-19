import {React, useState, useEffect} from "react";
import NavBar from './NavBar'
import About from './About'
import { FaRegStar } from "react-icons/fa6";
import Field from './Field';
import { useParams } from "react-router-dom";
import SMLoading from './SMLoading';
import api from "../config/api";
import ShowDetailBook from "./ShowDetailBook";

const DetailBook = () => {
  
  return (
    <div className=''>
        <NavBar />
        <div className='py-10 bg-gradient-to-r from-amber-50 to-orange-200'>
            <div className="container px-10 md:px-20 w-full mx-auto">
                <div className="bg-white mx-auto w-full rounded-3xl p-12">
                    <ShowDetailBook />
                 </div>
            </div>
        </div>  
        <About />
    </div>
  )
}

export default DetailBook