import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

interface RankStoreSectionProps {
  setActiveTab: (tab: string) => void;
}

export default function RankStoreSection({ setActiveTab }: RankStoreSectionProps) {
  const handleVisitStore = () => {
    setActiveTab("store");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent" id="rank-store-teaser">
      
      {/* Background ambient gold glows */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-yellow-500/5 blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-0 w-72 h-72 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Store teaser info */}
          <div className="lg:col-span-6 text-left flex flex-col items-start select-none">
            
            {/* Category header - themed to yellow */}
            <div className="flex flex-col items-start mb-6">
              <span className="text-yellow-400 font-bold text-[10px] sm:text-xs tracking-[0.25em] uppercase font-sans flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-yellow-400 animate-pulse" />
                RANK STORE
              </span>
              <div className="w-12 h-[1px] bg-yellow-500/40 mt-1.5" />
            </div>

            {/* Animated Minecraft-Themed Title matching the yellow/gold theme */}
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  }
                }
              }}
              className="font-minecraft text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-wider uppercase drop-shadow-[0_2.5px_0_rgba(0,0,0,0.9)] flex flex-wrap items-center justify-start gap-x-3 gap-y-2 leading-none"
            >
              <span className="flex">
                {Array.from("SUPPORT THE").map((char, index) => (
                  <motion.span
                    key={`support-the-${index}`}
                    variants={{
                      hidden: { opacity: 0, y: 15, scale: 0.8 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: { type: "spring", stiffness: 300, damping: 10 }
                      }
                    }}
                    className={char === " " ? "w-2 sm:w-3" : "inline-block"}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              
              <span className="flex text-yellow-400 text-glow-gold">
                {Array.from("SERVER,").map((char, index) => (
                  <motion.span
                    key={`server-${index}`}
                    variants={{
                      hidden: { opacity: 0, y: -15, scale: 0.8 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: { type: "spring", stiffness: 300, damping: 10 }
                      }
                    }}
                    className={char === " " ? "w-2 sm:w-3" : "inline-block"}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>

              <span className="flex text-yellow-400 text-glow-gold">
                {Array.from("UNLOCK PERKS").map((char, index) => (
                  <motion.span
                    key={`perks-${index}`}
                    variants={{
                      hidden: { opacity: 0, y: 15, scale: 0.8 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: { type: "spring", stiffness: 300, damping: 10 }
                      }
                    }}
                    className={char === " " ? "w-2 sm:w-3" : "inline-block"}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h2>

            {/* Yellow glowing underline bar matching other headings */}
            <div className="mt-4 mb-6 h-1 w-28 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full animate-pulse" />

            {/* Description matching Kirimax description but adapted for Void MC */}
            <p className="text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed font-semibold mb-8 max-w-lg">
              Void MC is funded entirely by the community. Every purchase keeps the server running and unlocks exclusive cosmetic perks — no pay-to-win, ever.
            </p>

            {/* Yellow glowing Pill Button */}
            <motion.button
              onClick={handleVisitStore}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(250,204,21,0.6)"
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-black font-sans font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-full shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>VISIT STORE</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </motion.button>

          </div>

          {/* RIGHT COLUMN: Jumping Single Crystal Image requested by user */}
          <div className="lg:col-span-6 w-full flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center p-6 select-none">
              
              {/* Radial Golden Aura Backdrop */}
              <div className="absolute w-72 h-72 rounded-full bg-yellow-500/10 blur-3xl pointer-events-none animate-pulse" />
              
              {/* Spinning/Rotating Golden Ring Frame */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-64 h-64 border border-dashed border-yellow-500/20 rounded-full pointer-events-none"
              />
              
              {/* Outer Golden Glow Circle */}
              <div className="absolute w-48 h-48 border border-yellow-500/10 rounded-full pointer-events-none" />

              {/* Jumping Animation on Image */}
              <motion.div
                animate={{
                  y: [0, -24, 0],
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.02, 0.98, 1]
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10 cursor-pointer"
                onClick={handleVisitStore}
              >
                <img
                  src="https://i.postimg.cc/7fKpgY93/Gemini-Generated-Image-2by3k12by3k12by3-removebg-preview.png"
                  alt="Premium Rank Medallion"
                  referrerPolicy="no-referrer"
                  className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 object-contain drop-shadow-[0_0_25px_rgba(250,204,21,0.5)] hover:scale-105 transition-transform duration-300"
                />
              </motion.div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
