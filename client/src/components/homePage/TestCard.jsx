import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTestById } from "../../store/test-slice";

const TestCard = ({ test }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStartTest = () => {
    dispatch(getTestById(test?._id)).then((res) => {
      if (res?.payload?._id) {
        navigate(`/user/test/${test?._id}`);
      }
    });
  };

  return (
    <motion.div
      className="p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="flex items-end space-x-4 mb-4">
        <img
          src={test.educatorImg}
          alt={test.educatorName}
          className="w-14 h-14 rounded-full object-cover shadow-lg"
        />
        <div>
          <h3 className="text-lg font-bold text-white">{test.educatorName}</h3>
        </div>
      </div>
      <h4 className="text-2xl font-semibold text-blue-400 mb-2">
        {test.testName}
      </h4>
      <p className="mt-2 text-sm text-gray-300 leading-6">{test.description}</p>
      <p className="mt-4 text-gray-400">
        <span className="font-semibold text-blue-300">Class:</span> {test.class}
      </p>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-green-400 font-mono">
          {test.duration}
        </span>
        <button
          onClick={handleStartTest}
          className="px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
        >
          Start Test
        </button>
      </div>
    </motion.div>
  );
};

export default TestCard;
