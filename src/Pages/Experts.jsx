import React from "react";
import { motion } from "framer-motion";
import expertvideo from "../assets/Expertvideo.mp4";

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
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0b1e3d] to-[#11382e] text-white px-6 md:px-16 py-12 flex flex-col md:flex-row gap-10 items-center justify-between">

      {/* Left Section — Video */}
      <motion.div 
        className="md:w-1/2 mt-12 md:mt-0 space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Heading */}
        <h2 className="text-green-400 text-3xl font-semibold  md:ml-6">Meet Our Experts</h2>
        <p className="text-sm text-gray-400  md:ml-6">
          Real professionals ready to help you right now
        </p>

        {/* Medium-Sized Video Container */}
        <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-lg border border-white/10  md:ml-6">
          <video
            src={expertvideo}
            type="video/mp4"
            autoPlay
            loop
            muted
            className="w-full h-80 object-cover"
          />
        </div>
      </motion.div>

      {/* Right Section — Text, Button, Features */}
      <motion.div 
        className="md:w-1/2 space-y-6 md:-ml-18"
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
        <h2 className="text-3xl md:text-3xl font-bold leading-tight">
          Why Choose Our <span className="text-purple-400">AI Expert</span>{" "}
          <span className="text-green-400">Network?</span>
        </h2>

        {/* Subheading */}
        <p className="text-gray-400 text-base">
          Tap into a community of trusted experts across various domains — from design and business strategy to cybersecurity. Whether you're solving complex challenges or scaling fast, our AI-powered expert matching ensures you're connected to the right professional.
          Get real-time answers, tailored guidance, and actionable insights — all in one seamless experience. With SageAI, expert help is just a conversation away.
        </p>

        {/* Button */}
        <button className=" bg-gradient-to-r from-blue-500 to-green-400 text-white px-6 py-3 rounded-md font-semibold shadow hover:scale-105 transition mt-2">
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
  );
}

export default ExpertSection;
