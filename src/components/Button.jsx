import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
      className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500"
    >
      {children}
    </button>
  );
};

export default Button;
