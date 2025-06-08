import React from "react";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";

function IntermidiateSec() {
  return (
    <div className="min-h-[70vh] relative overflow-hidden z-0 bg-gradient-to-br from-[#2521b5] to-[#122264] text-white flex flex-col items-center justify-center px-3 py-6">
      {/* Background Glow Circles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute w-[30rem] h-[30rem] bg-orange-300 opacity-30 rounded-full blur-[190px] top-[-150px] left-[-150px]" />
        <div className="absolute w-[35rem] h-[35rem] bg-orange-300 opacity-30 rounded-full blur-[190px] bottom-[2rem] right-[2rem]" />
        <div className="absolute w-[25rem] h-[25rem] bg-pink-300 opacity-30 rounded-full blur-[190px] top-1/3 right-[15%]" />
      </div>

      {/* Sparkles */}
      <HiSparkles className="absolute top-12 left-20 text-pink-400 text-4xl rotate-12 z-10" />
      <HiSparkles className="absolute top-44 right-20 text-pink-400 text-4xl -rotate-12 z-10" />

      {/* Headings and Paragraphs */}
      <motion.h2
        className="text-green-400 text-3xl sm:text-4xl font-extrabold mb-1 z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        No more endless Googling
        <span className="text-white"> – this AI caller brings experts to you instantly</span>
      </motion.h2>

      <motion.h3
        className="text-2xl sm:text-3xl font-bold text-white mb-4 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Real conversations with AI experts across healthcare, law, finance & more
      </motion.h3>

      <motion.p
        className="max-w-3xl mx-auto text-gray-200 text-base sm:text-lg mb-3 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Skip the research and skip the forms — just speak. SageAI understands your question, calls the right AI expert, and answers in real time. It’s like having a personal consultant on demand.
      </motion.p>

      <motion.p
        className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-base mb-4 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Every call is automatically saved and summarized to your dashboard. You can switch topics mid-call, speak in any language, and come back to notes later — Sage handles it all.
      </motion.p>

      {/* Glowing Button with Moving Green–Orange Border */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="z-10 mt-6"
      >
        <div className="relative p-[3px] rounded-2xl bg-animated-glow">
          <div className="rounded-2xl bg-[#0f172a]">
            <button className="w-full bg-[211C84] hover:bg-[#4f46e5] text-white font-semibold text-base px-6 py-3 rounded-2xl transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer">
              Explore How Sage Works
            </button>
          </div>
        </div>

        {/* Animated Gradient + Shadow CSS */}
        <style>{`
          .bg-animated-glow {
            background: linear-gradient(270deg, #00FF00, #FF6600, #00FF00);
            background-size: 200% 200%;
            animation: gradientShift 4s ease infinite;
            box-shadow:
              0 0 12px 4px rgba(0, 255, 0, 0.4),
              0 0 18px 6px rgba(255, 102, 0, 0.4),
              0 0 30px 10px rgba(255, 102, 0, 0.2);
          }

          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>
      </motion.div>
    </div>
  );
}

export default IntermidiateSec;
