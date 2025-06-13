import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroimage from "../assets/heroimg.png";
import {
  FaBalanceScale,
  FaBrain,
  FaAppleAlt,
  FaGraduationCap,
  FaMicrophone,
  FaRobot,
  FaUsers,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Home() {
  const expertDomains = ["Doctor", "Education", "Legal", "Nutrition", "Accountant"];
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDomainIndex((prev) => (prev + 1) % expertDomains.length);
    }, 3000);
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
        <Link to="/register-consultant" className="bg-green-400 text-[#0a1540] px-4 py-2 rounded font-semibold hover:bg-green-300 transition">Consult with Us?</Link>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4 md:px-8 py-2">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Side */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="bg-gradient-to-br from-[#0fd8c6] to-[#17649a] rounded-full">
                <img src={logo} alt="SageAI Logo" className="w-16 h-16 rounded-full" />
              </div>
              <h1 className="text-5xl font-bold text-white">
                <span>Sage</span>
                <span className="text-green-400">AI</span>
              </h1>
            </div>

            <h2 className="text-4xl font-bold text-white">
              Your AI <span className="text-purple-500">{expertDomains[currentDomainIndex]}</span> Assistance
            </h2>

            <p className="text-lg text-gray-300">
              Talk instantly with AI-powered experts across law, health, mental wellness, career, and finance — all in one place.
              Say goodbye to long forms and confusing searches. No typing needed — just speak naturally and get instant,
              intelligent help through voice-first conversations anytime, anywhere.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="text-white px-4 py-1 rounded-full text-sm flex items-center gap-2" style={{ backgroundColor: 'rgba(13, 32, 77, 0.5)' }}>
                <FaMicrophone />
                Voice-First
              </span>
              <span className="text-white px-4 py-1 rounded-full text-sm flex items-center gap-2" style={{ backgroundColor: 'rgba(26, 247, 107, 0.2)' }}>
                <FaRobot />
                AI-Powered
              </span>
              <span className="text-white px-4 py-1 rounded-full text-sm flex items-center gap-2" style={{ backgroundColor: 'rgba(223, 19, 223, 0.4)' }}>
                <FaUsers />
                Multi-Domain
              </span>
            </div>

            <div className="pt-2">
              <button className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-8 py-4 rounded-full font-semibold shadow hover:scale-105 transition cursor-pointer">
                Get Sage AI Now
              </button>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[500px]">
              <img
                src={heroimage}
                alt="Sage AI Hero"
                className="w-full h-auto rounded-b-[220px] object-cover py-[-4px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
