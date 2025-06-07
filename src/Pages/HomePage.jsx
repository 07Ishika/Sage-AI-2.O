import { motion } from "framer-motion";
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

export default function HomePage() {
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

  const scrollRowStyle = (dir) => ({
    animation: `${dir === "left" ? "scrollLeft" : "scrollRight"} 30s linear infinite`,
    display: "inline-flex",
    whiteSpace: "nowrap",
  });

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
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-8 py-12">
        {/* Left: Heading and Tags */}
        <div className="md:w-1/2 space-y-6 text-left">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-[#0fd8c6] to-[#17649a] rounded-full p-">
              <img src={logo} alt="SageAI Logo" className="w-14 h-14 rounded-full" />
            </div>
            <h1 className="text-6xl font-bold text-white">
              <span className="text-white">Sage</span>
              <span className="text-green-400">AI</span>
            </h1>
          </div>

          <h2 className="text-4xl font-bold text-white">
            Your AI <span className="text-purple-500">Career</span> Assistance
          </h2>
          <p className="text-lg text-gray-300">
            Get Expert Guidance Anytime, Anywhere.
          </p>

          <div className="flex gap-3 mt-4 flex-wrap">
            <span className="text-white px-4 py-1 rounded-full text-sm flex items-center space-x-1"
            style={{ backgroundColor: 'rgba(13, 32, 77, 0.5)' }}>
              <FaMicrophone />
              <span>Voice-First</span>
            </span>
            <span className="bg-green-800 px-4 py-1 rounded-full text-sm flex items-center space-x-2">
              <FaRobot />
              <span>AI-Powered</span>
            </span>
            <span className="bg-purple-800 px-4 py-1 rounded-full text-sm flex items-center space-x-2">
              <FaUsers />
              <span>Multi-Domain</span>
            </span>
          </div>

          <button className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition mt-4">
            Get Started
          </button>
        </div>

        {/* Right: 2 Rows Scrolling Cards */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {/* Top Row */}
          <div className="overflow-hidden w-full">
            <div style={scrollRowStyle("left")}>
              {[...cardsTop, ...cardsTop].map((card, index) => (
                <motion.div
                  key={`top-${index}`}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="min-w-[200px] bg-[#101d3f] border border-green-400/30 rounded-2xl p-6 mx-3 text-center cursor-pointer shadow-lg hover:shadow-green-400/20 transition-all"
                >
                  <div className="text-4xl mb-4 text-green-400">{card.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="overflow-hidden w-full">
            <div style={scrollRowStyle("right")}>
              {[...cardsBottom, ...cardsBottom].map((card, index) => (
                <motion.div
                  key={`bottom-${index}`}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="min-w-[200px] bg-[#101d3f] border border-green-400/30 rounded-2xl p-6 mx-3 text-center cursor-pointer shadow-lg hover:shadow-green-400/20 transition-all"
                >
                  <div className="text-4xl mb-4 text-green-400">{card.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes for Animation */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
      `}</style>
    </div>
  );
}
