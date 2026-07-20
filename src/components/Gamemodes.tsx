import React from "react";
import { GAMEMODES } from "../data";
import { 
  Trophy, 
  Sparkles, 
  Zap, 
  Play,
  Check,
  Sword,
  Coins
} from "lucide-react";
import { motion } from "motion/react";

// Resolve dynamic Lucide icons
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "Coins": return Coins;
    case "Sword": return Sword;
    default: return Trophy;
  }
};

export default function Gamemodes() {
  const serverIP = "play.voidmc.net";

  const handleCopyIP = () => {
    navigator.clipboard.writeText(serverIP);
    // Find the toast trigger in parent if any, or trigger fallback alert/feedback
    const event = new CustomEvent("show-toast", { detail: "Server IP copied! Join play.voidmc.net" });
    window.dispatchEvent(event);
  };

  // Scroll-triggered animations
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        staggerChildren: 0.12,
        ease: [0.16, 1, 0.3, 1]
      } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section id="gamemodes" className="py-20 px-4 md:px-8 relative z-10 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-yellow-500/5 blur-3xl pointer-events-none animated-glow"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="mx-auto max-w-5xl"
      >
        
        {/* Simplified Header */}
        <div className="text-center mb-12 select-none flex flex-col items-center justify-center">
          {/* Category header - themed to yellow */}
          <div className="flex flex-col items-center mb-6">
            <span className="text-yellow-400 font-bold text-[10px] sm:text-xs tracking-[0.25em] uppercase font-sans flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-yellow-400 animate-pulse" />
              GAMEMODES
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
            className="font-minecraft text-3xl sm:text-4xl font-black text-white tracking-wider uppercase drop-shadow-[0_2.5px_0_rgba(0,0,0,0.9)] flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
          >
            {/* "EXPLORE THE" in white */}
            <span className="flex">
              {Array.from("EXPLORE THE").map((char, index) => (
                <motion.span
                  key={`explore-the-${index}`}
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
            
            {/* "VOID" in yellow */}
            <span className="flex text-yellow-400 text-glow-gold">
              {Array.from("VOID").map((char, index) => (
                <motion.span
                  key={`void-gm-${index}`}
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
          <div className="mt-4 h-1 w-28 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full animate-pulse" />
          <p className="mt-4 max-w-lg mx-auto text-xs sm:text-sm text-neutral-400 font-medium">
            Jump into our high-performance multiplayer game modes. No separate servers—both accessible instantly via our central network lobby.
          </p>
        </div>

        {/* 2-Column Side-by-Side Gamemode Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {GAMEMODES.map((mode) => {
            const IconComponent = getIconComponent(mode.icon);
            const isEconomy = mode.id === "economy";
            
            return (
              <motion.div
                key={mode.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: isEconomy ? "rgba(250, 204, 21, 0.45)" : "rgba(239, 68, 68, 0.45)",
                  boxShadow: isEconomy 
                    ? "0 15px 35px -10px rgba(250, 204, 21, 0.2)" 
                    : "0 15px 35px -10px rgba(239, 68, 68, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className={`flex flex-col justify-between p-6 sm:p-8 rounded-3xl border transition-all duration-300 bg-[#0c0d0d]/80 backdrop-blur-xl relative overflow-hidden group ${
                  isEconomy 
                    ? "border-yellow-500/15" 
                    : "border-red-500/15"
                }`}
              >
                {/* Glowing subtle background blob inside card */}
                <div className={`absolute -right-16 -top-16 h-36 w-36 rounded-full blur-[60px] pointer-events-none opacity-25 transition-opacity duration-300 ${
                  isEconomy ? "bg-yellow-500" : "bg-red-500"
                }`} />

                <div>
                  {/* Card Title & Icon */}
                  <div className="flex items-center gap-3.5 border-b border-white/5 pb-4">
                    <div className={`rounded-xl p-3 text-black shadow-md ${
                      isEconomy ? "bg-yellow-400 shadow-yellow-400/10" : "bg-red-500 shadow-red-500/10"
                    }`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-minecraft text-lg sm:text-xl font-bold text-white tracking-wide uppercase">
                        {mode.name}
                      </h3>
                      <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-wider font-mono">
                        Realms Network
                      </p>
                    </div>
                  </div>

                  {/* Punchy Description */}
                  <p className="mt-5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-medium">
                    {mode.description}
                  </p>

                  {/* Feature Bullets (Simple, less yapping) */}
                  <ul className="mt-5 space-y-2.5">
                    {mode.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[11px] sm:text-xs text-neutral-400 font-medium">
                        <Check className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${
                          isEconomy ? "text-yellow-400" : "text-red-400"
                        }`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Button pointing to central server */}
                <div className="mt-8 pt-4">
                  <motion.button
                    onClick={handleCopyIP}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-minecraft tracking-wider text-black transition-all cursor-pointer font-bold ${
                      isEconomy 
                        ? "bg-gradient-to-r from-yellow-400 to-amber-500" 
                        : "bg-gradient-to-r from-red-500 to-orange-500"
                    }`}
                  >
                    <Play className="h-3 w-3 fill-black" />
                    <span>COPY IP & PLAY</span>
                  </motion.button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
