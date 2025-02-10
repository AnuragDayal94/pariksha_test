import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { loginUser, registerUser } from "../store/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const AuthComponent = () => {
  const { mode } = useParams();
  const [isSignUp, setIsSignUp] = useState(mode === "register");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userType, setUserType] = useState("student");
  const { user, isLoading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    class: "",
    stream: "jee",
  });

  const [passwordStrength, setPasswordStrength] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      if (value.length < 6) setPasswordStrength("Weak");
      else if (value.length < 10) setPasswordStrength("Medium");
      else setPasswordStrength("Strong");
    }
  };

  const validateInputs = () => {
    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match");
        return false;
      }
      if (!formData.email.includes("@")) {
        toast.error("Invalid email format");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    if (isSignUp) {
      dispatch(registerUser({ ...formData, userType })).then((result) => {
        if (result?.payload?.userData) {
          result?.payload?.userData?.userType === "student"
            ? navigate("/user/home")
            : navigate("/teacher/dashboard");
        }
      });
    } else {
      dispatch(
        loginUser({
          email: formData.email,
          password: formData.password,
          userType,
        })
      ).then((result) => {
        if (result?.payload?.userData) {
          result?.payload?.userData?.userType === "student"
            ? navigate("/user/home")
            : navigate("/teacher/dashboard");
        }
      });
    }
  };

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    navigate(isSignUp ? "/auth/login" : "/auth/register");
    setFormData({
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      class: "",
      stream: "jee",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#0D1117] via-[#1E293B] to-[#0D1117] text-white">
      <div className="w-full max-w-lg bg-[#121826] rounded-xl p-8 shadow-xl border border-gray-700">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-[#3B82F6]">
          {isSignUp ? "Create Your Account" : "Welcome Back!"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-around mb-6">
            {[
              { type: "student", label: "Student" },
              { type: "teacher", label: "Teacher" },
            ].map(({ type, label }) => (
              <button
                key={type}
                type="button"
                onClick={() => setUserType(type)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
      userType === type ? "bg-[#3B82F6] text-white" : "bg-gray-700 text-gray-300"
    }`}
              >
                {label}
              </button>
            ))}
          </div>

          {isSignUp && (
            <>
              {[
                { name: "fullname", type: "text", placeholder: "Full Name" },
                { name: "email", type: "email", placeholder: "Email Address" },
                { name: "password", type: "password", placeholder: "Password" },
                { name: "confirmPassword", type: "password", placeholder: "Confirm Password" },
              ].map(({ name, type, placeholder }) => (
                <div key={name} className="relative">
                  <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-800 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                    required
                  />
                  {name === "password" && (
                    <span
                      className={`absolute right-4 top-3 text-sm ${
                        passwordStrength === "Strong"
                          ? "text-green-500"
                          : passwordStrength === "Medium"
                          ? "text-yellow-500"
                          : "text-red-500"
                      }`}
                    >
                      {passwordStrength}
                    </span>
                  )}
                </div>
              ))}

              {userType === "student" && (
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  required
                >
                  <option value="">Select Class</option>
                  {[9, 10, 11, 12].map((cls) => (
                    <option key={cls} value={cls}>{`Class ${cls}`}</option>
                  ))}
                </select>
              )}

              <select
                name="stream"
                value={formData.stream}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              >
                <option value="jee">JEE</option>
                <option value="neet">NEET</option>
              </select>
            </>
          )}

          {!isSignUp && (
            ["email", "password"].map((field) => (
              <input
                key={field}
                name={field}
                type={field === "password" ? "password" : "text"}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                required
              />
            ))
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-3 bg-[#3B82F6] rounded-lg font-bold text-white hover:bg-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition duration-300"
          >
            {isLoading ? "Processing..." : isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className="text-center mt-6">
          <button
            onClick={toggleAuthMode}
            className="text-[#84CC16] hover:underline transition duration-300"
          >
            {isSignUp
              ? "Already have an account? Login"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
