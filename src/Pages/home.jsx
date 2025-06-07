import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import video from "../assets/video.mp4"; // Update this path if needed
import smallvideo from "../assets/smallvideo.mp4"; // Update this path if needed
import {
  FaBalanceScale,
  FaBrain,
  FaAppleAlt,
  FaGraduationCap,
  FaMicrophone,
  FaRobot,
  FaUsers,
} from "react-icons/fa";
import logo from "../assets/logo.png"; // Update this path if needed

function Home() {
  const cardsTop = [
    { title: "Education Counselor", icon: <FaGraduationCap /> },
    { title: "Legal Advisor", icon: <FaBalanceScale /> },
    { title: "Career Mentor", icon: <FaGraduationCap /> },
    { title: "Therapy Consultant", icon: <FaBrain /> },
    { title: "School Consultant", icon: <FaGraduationCap /> },
    { title: "Student Coach", icon: <FaGraduationCap /> },
  ];

  const cardsBottom = [
    { title: "Nutritionist", icon: <FaAppleAlt /> },
    { title: "Child Psychologist", icon: <FaBrain /> },
    { title: "Diet Expert", icon: <FaAppleAlt /> },
    { title: "Mindfulness Coach", icon: <FaBrain /> },
    { title: "Mental Wellness", icon: <FaBrain /> },
    { title: "Health Advisor", icon: <FaAppleAlt /> },
  ];

  const expertDomains = ["Doctor", "Education", "Legal", "Nutrition", "Accountant"];
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDomainIndex((prev) => (prev + 1) % expertDomains.length);
    }, 3000); // Change domain every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#17649a] to-[#0b1e3d] text-white flex flex-col overflow-hidden">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-[#0a1540]">
        <h1 className="text-2xl font-bold">
          <span className="text-white">Sage</span>
          <span className="text-green-400">AI</span>
        </h1>
        <button className="bg-white text-[#0a1540] px-4 py-2 rounded font-semibold hover:bg-gray-200 transition">
          Sign In
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-16 py-18">
        {/* Left: Heading and Tags */}
        <div className="md:w-1/2 space-y-6 text-left">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-[#0fd8c6] to-[#17649a] rounded-full">
              <img src={logo} alt="SageAI Logo" className="w-14 h-14 rounded-full" />
            </div>
            <h1 className="text-6xl font-bold text-white">
              <span className="text-white">Sage</span>
              <span className="text-green-400">AI</span>
            </h1>
          </div>

          <h2 className="text-4xl font-bold text-white">
            Your AI <span className="text-purple-500">{expertDomains[currentDomainIndex]}</span> Assistance
          </h2>
          <p className="text-lg text-gray-300">
           Talk instantly with AI-powered experts across law, health, mental wellness, career, and finance- all in one place. Say goodbye to long forms and confusing searches. No typing needed -just speak naturally and get instant, intelligent help through voice-first conversations anytime, anywhere.
          </p>

          <div className="flex gap-3 mt-4 flex-wrap">
            <span className="text-white px-4 py-1 rounded-full text-sm flex items-center space-x-1"
              style={{ backgroundColor: 'rgba(13, 32, 77, 0.5)' }}>
              <FaMicrophone />
              <span>Voice-First</span>
            </span>
            <span  className="text-white px-4 py-1 rounded-full text-sm flex items-center space-x-1"
            style={{ backgroundColor: 'rgba(26, 247, 107, 0.2)' }}>
              <FaRobot />
              <span>AI-Powered</span>
            </span>
            <span className="text-white px-4 py-1 rounded-full text-sm flex items-center space-x-1"
            style={{ backgroundColor: 'rgba(223, 19, 223, 0.4)' }}>
              <FaUsers />
              <span>Multi-Domain</span>
            </span>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-8 py-4 rounded-full font-semibold shadow hover:scale-105 transition mt-2">
            Get Sage AI Now
          </button>
        </div>

        {/* Right: Main Video with Small Overlapping Video */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="relative rounded-3xl shadow-lg border-2 border-white/10 overflow-visible">
            {/* Main Video */}
            <video
              src={video}
              type="video/mp4"
              autoPlay
              loop
              muted
              className="w-full h-auto rounded-3xl"
            />

            {/* Small Overlapping Video */}
            <div className="absolute bottom-[-36px] left-[-36px] w-36 h-25 rounded-xl overflow-hidden border-2 border-white/20 shadow-md">
              <video
                src={smallvideo}
                type="video/mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
