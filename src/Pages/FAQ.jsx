import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "How does SageAI work?",
    answer:
      "SageAI connects you with specialized AI experts through voice calls. Simply call our number or use our web platform, specify your need (healthcare, legal, financial, etc), and start talking naturally with an AI expert trained in that field.",
  },
  {
    question: "What types of experts are available?",
    answer:
      "Experts include education counselors, legal advisors, wellness coaches, nutritionists, and more.",
  },
  {
    question: "Can I switch between different experts during a call?",
    answer:
      "Yes! You can either switch mid-call (in supported cases) or end the call and begin a new one.",
  },
  {
    question: "Are my conversations private and secure?",
    answer:
      "Yes. All communication is encrypted, and we follow strict privacy policies to keep your data safe.",
  },
  {
    question: "What languages does SageAI support?",
    answer:
      "Currently, we support English and select Indian regional languages, with more coming soon.",
  },
  {
    question: "How are my calls saved and organized?",
    answer:
      "All your call summaries and transcripts (if enabled) are stored securely in your dashboard.",
  },
  {
    question: "Is there a difference between phone calls and web calls?",
    answer:
      "Yes, web calls happen over your browser, while phone calls use your mobile network directly.",
  },
  {
    question: "How much does SageAI cost?",
    answer:
      "We offer both free and premium plans depending on usage and expert access level.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen px-6 py-16 bg-[#1a2340] text-white flex flex-col items-center font-sans">
      <h2 className="text-4xl font-bold text-center">
        <span className="text-white">Frequently Asked </span>
        <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">
          Questions
        </span>
      </h2>
      <p className="mt-4 text-center text-gray-300">
        Everything you need to know about SageAI and how it works
      </p>

      <div className="mt-10 w-full max-w-2xl space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              layout
              key={index}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`rounded-xl overflow-hidden transition-all border ${
                isOpen
                  ? "border-green-400 bg-gradient-to-tr from-[#2f3a63] to-[#1f2b4d]"
                  : "border-[#2f3a63] bg-[#2d3658]"
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className={`w-full text-left px-6 py-4 flex items-center justify-between cursor-pointer transition-all duration-300 ${
                  isOpen
                    ? "text-green-400"
                    : "hover:text-green-400 hover:opacity-90"
                }`}
              >
                <span className="font-semibold text-md">{item.question}</span>
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="px-6 pb-4 text-sm text-gray-200 border-t border-green-400 pt-2"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

    
    </div>
  );
}
