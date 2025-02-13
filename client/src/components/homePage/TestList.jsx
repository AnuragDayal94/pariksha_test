import React from "react";
import { motion } from "framer-motion";
import TestCard from "./TestCard";
import { PuffLoader } from "react-spinners";

const TestList = ({ tests, isLoading }) => {
  return (
    <motion.section
      className="py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-4xl font-extrabold text-center text-blue-400 mb-12">
        {tests?.length ? "Available Tests" : "No Tests Available"}
      </h2>
      {isLoading ? (
        <div className="w-full h-80 flex items-center justify-center">
          <PuffLoader color="#3671d6" size={60} />
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {tests.map((test, index) => (
            <motion.div
              key={test.id || index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <TestCard test={test} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.section>
  );
};

export default TestList;
