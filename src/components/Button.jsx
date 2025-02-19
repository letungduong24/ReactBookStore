import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ href, name, color = "bg-amber-600", textColor = "text-white" }) => {
    const navigate = useNavigate();

    return (
      <button
        onClick={() => navigate(href)} 
        className={`block cursor-pointer ${color} p-1 px-4 py-2 rounded-2xl ${textColor} hover:scale-110 transition-transform duration-300`}
      >
        {name}
      </button>
    );
}

export default Button;
