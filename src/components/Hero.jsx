import { useState, useEffect } from "react";
import profilepic from "../assets/Sachin_Profile_Photo.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

/* ================= ROLE TYPEWRITER ================= */

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
];

/* ================= COMPONENT ================= */

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showBorder, setShowBorder] = useState(false);

  /* ---------- Typewriter Effect ---------- */
  useEffect(() => {
    let charIndex = 0;
    let timeoutId;
    const currentRole = roles[currentRoleIndex];

    const typeChar = () => {
      if (charIndex <= currentRole.length) {
        setDisplayedText(currentRole.slice(0, charIndex));
        charIndex++;
        timeoutId = setTimeout(typeChar, 100);
      } else {
        timeoutId = setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    };

    typeChar();

    return () => clearTimeout(timeoutId);
  }, [currentRoleIndex]);

  return (
    <div className="pb-10 lg:mb-36">
      <div className="flex flex-col-reverse lg:flex-row items-center">
        {/* ================= TEXT SECTION ================= */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl sm:text-5xl lg:text-8xl tracking-tighter"
            >
              Sachin Shinde
            </motion.h2>

            <motion.span
              variants={childVariants}
              className="min-h-[2.5rem] bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl sm:text-3xl tracking-tighter text-transparent"
            >
              {displayedText}
              <span className="animate-pulse">|</span>
            </motion.span>

            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-lg sm:text-xl leading-relaxed tracking-tighter text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.a
              variants={childVariants}
              href="/Sachin_Shinde_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full px-6 py-3 text-sm text-stone-800 mb-10 hover:scale-105 transition"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* ================= IMAGE SECTION ================= */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-[420px] aspect-square">
            {/* IMAGE */}
            <motion.img
              src={profilepic}
              alt="Sachin Shinde"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              onAnimationComplete={() => setShowBorder(true)}
              className="w-full h-full object-contain rounded-3xl border border-stone-900 bg-black relative z-10"
            />

            {/* ANIMATED BORDER */}
            <svg
              className="absolute inset-0 z-20 pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="bannerNeon"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#6d28d9" />
                  <stop offset="35%" stopColor="#9333ea" />
                  <stop offset="70%" stopColor="#db2777" />
                  <stop offset="100%" stopColor="#f43f5e" />
                </linearGradient>

                <filter
                  id="bannerGlow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <motion.rect
                x="1"
                y="1"
                width="98"
                height="98"
                rx="6"
                ry="6"
                fill="none"
                stroke="url(#bannerNeon)"
                strokeWidth="0.3"
                strokeDasharray="20 80"
                filter="url(#bannerGlow)"
                initial={{ opacity: 0, strokeDashoffset: 0 }}
                animate={
                  showBorder
                    ? { strokeDashoffset: -100, opacity: 1 }
                    : { opacity: 0 }
                }
                transition={{
                  strokeDashoffset: {
                    duration: 2,   // 🔥 only 2 seconds
                    ease: "linear",
                  },
                  opacity: { duration: 0.4 },
                }}
                onAnimationComplete={() => {
                  setShowBorder(false); // 🔥 stop & hide after animation
                }}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
