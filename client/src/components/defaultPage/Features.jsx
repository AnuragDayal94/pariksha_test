import React from "react";
import { FaCheckCircle, FaChartPie, FaBookReader, FaUsersCog } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    title: "Engaging Test Environment",
    description: "Intuitive UI designed for seamless test-taking.",
    icon: <FaCheckCircle />,
  },
  {
    title: "Data-Driven Insights",
    description: "Track your progress with visually appealing graphs.",
    icon: <FaChartPie />,
  },
  {
    title: "Well-Structured Study Materials",
    description: "Find and organize resources effortlessly.",
    icon: <FaBookReader />,
  },
  {
    title: "Robust User Management",
    description: "Efficiently handle users and system settings.",
    icon: <FaUsersCog />,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-[#f1f5f9]">
      <h2 className="text-4xl font-extrabold text-center text-[#1E3A8A] mb-12">
        Our Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div className="text-5xl text-[#FF3B30]">{feature.icon}</div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="mt-4 text-sm text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;