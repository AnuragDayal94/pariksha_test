import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { logout } from "../../store/auth-slice";

const Header = ({ onMenuToggle, isMenuOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    toast.success("Logout successful");
  };

  return (
    <motion.header
      className="bg-gray-800 text-white px-4 sm:px-8 py-4 flex justify-between items-center shadow-md"
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo */}
      <motion.div
        className="text-2xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Link to="/user/home" aria-label="Home">
          TestPrep
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex space-x-6 items-center">
        <Link to="/user/home" className="hover:text-blue-400">
          Home
        </Link>
        <Link to="/user/bookmarks" className="hover:text-blue-400">
          Bookmarks Questions
        </Link>
        <Link to="/user/test-history" className="hover:text-blue-400">
          Test History
        </Link>
        <Link to="/user/test-upcoming" className="hover:text-blue-400">
          Upcoming Tests
        </Link>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button
          onClick={onMenuToggle}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          className="btn btn-circle swap swap-rotate"
        >
          <svg
            className={`${isMenuOpen ? "hidden" : "block"} swap-off fill-current`}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className={`${isMenuOpen ? "block" : "hidden"} swap-on fill-current`}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.nav
          className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col space-y-4 px-6 py-4 z-20 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/user/home" className="hover:text-blue-400">
            Home
          </Link>
          <Link to="/user/bookmarks" className="hover:text-blue-400">
            Bookmarks Questions
          </Link>
          <Link to="/user/test-history" className="hover:text-blue-400">
            Test History
          </Link>
          <Link to="/user/test-upcoming" className="hover:text-blue-400">
            Upcoming Tests
          </Link>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
