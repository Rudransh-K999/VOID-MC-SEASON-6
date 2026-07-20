import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function Trailer() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden" id="trailer-sec">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Header Title */}
        <div className="flex flex-col items-center mb-8 select-none">
          {/* Category header - themed to yellow */}
          <div className="flex flex-col items-center mb-6">
            <span className="text-yellow-400 font-bold text-[10px] sm:text-xs tracking-[0.25em] uppercase font-sans flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-yellow-400 animate-pulse" />
              OFFICIAL TRAILER
            </span>
            <div className="w-12 h-[1px] bg-yellow-500/40 mt-1.5" />
          </div>

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
            className="text-2xl sm:text-4xl font-minecraft font-black text-white tracking-wider uppercase drop-shadow-[0_2.5px_0_rgba(0,0,0,0.9)] flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
          >
            {/* "VOID MC" in white */}
            <span className="flex">
              {Array.from("VOID MC").map((char, index) => (
                <motion.span
                  key={`void-mc-${index}`}
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
            
            {/* "S6 Trailer" in yellow */}
            <span className="flex text-yellow-400 text-glow-gold">
              {Array.from("S6 Trailer").map((char, index) => (
                <motion.span
                  key={`s6-${index}`}
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
          </motion.h2>
          <div className="mt-4 h-1 w-28 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full" />
        </div>

        {/* Cinematic Video Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
          className="relative group rounded-3xl border border-yellow-500/15 bg-spaceCard/60 p-2 sm:p-3 backdrop-blur-md shadow-2xl overflow-hidden"
        >
          {/* Subtle surrounding background flare */}
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/5 to-amber-500/5 pointer-events-none group-hover:opacity-100 transition-opacity duration-500 opacity-50" />
          
          {/* TV/Screen Border Accent */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-inner bg-black/80">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/8b51D9B5-g8?autoplay=0&mute=0&rel=0&modestbranding=1"
              title="Void MC Network Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
