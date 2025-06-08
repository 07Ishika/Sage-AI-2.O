import React from "react";
import { motion } from "framer-motion";
import ExpertNtwkimg from "../assets/ExpertNtwkimg.png"; // Update path as needed

function ExpertSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0b1e3d] to-[#11382e] text-white px-6 md:px-16 py-16 flex items-center justify-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-14">

        {/* Left Section — Image */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 flex flex-col items-center md:items-start mt-6 md:mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <h2 className="text-green-400 text-2xl font-semibold text-center md:text-left">
            Empowering Conversations, Anytime, Anywhere
          </h2>

          <div className="w-full max-w-xl overflow-hidden">
            <img
              src={ExpertNtwkimg}
              alt="Expert Network"
              className="w-full h-auto object-cover rounded-b-[200px] transition duration-500"
            />
          </div>
        </motion.div>

        {/* Right Section — Text Content */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Tag */}
          <div className="inline-block bg-green-700/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
            ⚡ AI Expert Network
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Why Choose Our <span className="text-purple-400">AI Expert</span>{" "}
            <span className="text-green-400">Network?</span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-base">
            Tap into a community of trusted experts across various domains — from design and business strategy to cybersecurity. Whether you're solving complex challenges or scaling fast, our AI-powered expert matching ensures you're connected to the right professional. Get real-time answers, tailored guidance, and actionable insights — all in one seamless experience. With SageAI, expert help is just a conversation away.
          </p>

          {/* Button */}
          <button className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-6 py-3 rounded-md font-semibold shadow hover:scale-105 transition mt-2 cursor-pointer flex items-center gap-2 mx-auto md:mx-0">
            💬 Find Your Expert Now
          </button>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 text-sm pt-6 text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Connect within 60 seconds
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span> 1000+ verified experts
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span> 24/7 availability
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span> 4.9/5 average rating
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ExpertSection;
