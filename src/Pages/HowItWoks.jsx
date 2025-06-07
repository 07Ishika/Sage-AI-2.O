import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaPhoneAlt, FaComments, FaUserTie, FaFileAlt } from "react-icons/fa";

const steps = [
  {
    id: "01",
    title: "Choose Your Call Type",
    desc: "Select between real phone call or web-based voice call. Pick your expert domain.",
    icon: <FaPhoneAlt size={28} className="text-green-400" />,
    circleColor: "border-green-400 text-green-400"
  },
  {
    id: "02",
    title: "Start Conversation",
    desc: "Speak naturally with AI expert. Switch roles mid-call if needed. No typing required.",
    icon: <FaComments size={28} className="text-blue-400" />,
    circleColor: "border-blue-400 text-blue-400"
  },
  {
    id: "03",
    title: "Get Expert Guidance",
    desc: "Receive personalized advice from AI specialists in healthcare, law, finance & more.",
    icon: <FaUserTie size={28} className="text-teal-400" />,
    circleColor: "border-teal-400 text-teal-400"
  },
  {
    id: "04",
    title: "Save & Review",
    desc: "Call summary automatically saved to your dashboard. Access insights anytime.",
    icon: <FaFileAlt size={28} className="text-green-400" />,
    circleColor: "border-green-400 text-green-400"
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.8,
      ease: "easeOut"
    }
  }),
};

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <div className="bg-[#0d1117] py-20 px-4 text-white text-center" ref={ref}>
      <h2 className="text-3xl font-bold mb-2">How It Works</h2>
      <p className="text-gray-400 mb-12">Get expert help in 4 simple steps</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            custom={i}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-[#10b98140] to-[#3b82f640] backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg transition-transform duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center mb-4">
              <div
                className={`w-14 h-14 rounded-full border-2 flex items-center justify-center font-bold mb-2 ${step.circleColor}`}
              >
                {step.id}
              </div>
              <div className="mb-2">{step.icon}</div>
            </div>
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-gray-300 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
