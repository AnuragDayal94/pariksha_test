import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center px-10 py-5 bg-[#1E3A8A] text-white shadow-lg">
      <div className="text-3xl font-bold text-white flex items-center space-x-3">
        <img src="./logo.png" width={50} height={50} className='rounded-md' alt="logo" />
        <span>Pariksha</span>
      </div>
      <div className="space-x-4">
        <button onClick={() => navigate("/auth/login")} className="px-6 py-2 bg-white text-[#1E3A8A] font-semibold rounded-lg hover:bg-gray-200 transition">
          Login
        </button>
        <button onClick={() => navigate("/auth/register")} className="px-6 py-2 bg-[#FF3B30] text-white font-semibold rounded-lg hover:bg-[#E63946] transition">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;