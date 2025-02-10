import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1E3A8A] text-white py-8 text-center">
      <p className="text-sm">&copy; 2025 <span className="font-semibold">PrepPro</span>. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-6">
        <a href="#" className="text-lg hover:text-gray-300"><FaFacebookF /></a>
        <a href="#" className="text-lg hover:text-gray-300"><FaTwitter /></a>
        <a href="#" className="text-lg hover:text-gray-300"><FaLinkedinIn /></a>
        <a href="#" className="text-lg hover:text-gray-300"><FaInstagram /></a>
      </div>
    </footer>
  );
};

export default Footer;
