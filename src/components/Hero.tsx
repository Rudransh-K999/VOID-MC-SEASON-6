import React from "react";
import { Copy, Users, Activity, UserCheck } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  playerCount: number;
  serverIP: string;
  setActiveTab: (tab: string) => void;
  openIpModal: () => void;
  showToast: (message: string) => void;
}

export default function Hero({ playerCount, serverIP, setActiveTab, openIpModal, showToast }: HeroProps) {
  const handleCopyIP = () => {
    navigator.clipboard.writeText(serverIP);
    showToast(`Server IP copied to clipboard: ${serverIP}`);
  };

  const logoImage = "https://i.postimg.cc/Dyzh69Lr/logo.png";

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center py-12 md:py-20 overflow-hidden z-10 space-grid space-grid-pattern">
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none animated-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none animated-glow [animation-delay:4s]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        {/* Server Badge with Pulse Indicator and Live Stats */}
        <motion.div 
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex flex-wrap items-center justify-center gap-2 px-3 sm:px-5 py-1.5 rounded-full bg-yellow-950/40 border border-yellow-500/30 text-yellow-400 text-[9px] sm:text-xs font-minecraft tracking-wider uppercase mb-6 sm:mb-8 shadow-inner shadow-yellow-500/5 select-none"
        >
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-yellow-400 pulse-yellow"></span>
          <span>The Ultimate Void Minecraft Server</span>
          <span className="text-neutral-500 px-1">•</span>
          <div className="flex items-center gap-1 text-white">
            <Users className="h-3 w-3 text-yellow-400 animate-pulse" />
            <span className="font-mono font-extrabold">{playerCount} Online</span>
          </div>
        </motion.div>

        {/* HERO LOGO PLACER (SCALED TO BE CRISP MEDIUM SIZE ACROSS ALL PORTRAITS) */}
        <motion.div 
          className="bouncy-placer w-full mx-auto mb-6 sm:mb-10 flex justify-center items-center select-none cursor-pointer"
          whileHover={{ 
            scale: 1.08,
            y: -5,
            filter: "drop-shadow(0 0 25px rgba(250, 204, 21, 0.45))"
          }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 350, damping: 15 }}
        >
          <img 
            src={logoImage} 
            alt="Void MC Network" 
            referrerPolicy="no-referrer"
            className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[380px] h-auto object-contain" 
          />
        </motion.div>

        {/* Description */}
        <p className="text-gray-300 text-xs sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed font-medium">
          India's best Minecraft server — home to a thriving community. Play <span className="text-yellow-400 font-minecraft font-bold tracking-wide">Economy SMP</span>, <span className="text-yellow-400 font-minecraft font-bold tracking-wide">FFA</span>, & more. Connect <span className="text-yellow-400 font-bold underline decoration-wavy">play.voidmc.net</span> today!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-xs sm:max-w-none mx-auto mb-12 sm:mb-16">
          <motion.button 
            onClick={openIpModal} 
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(250, 204, 21, 0.5)"
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-minecraft text-sm sm:text-base px-8 sm:px-12 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 font-extrabold cursor-pointer"
          >
            <span>JOIN THE VOID</span>
          </motion.button>
          
          <motion.button 
            onClick={handleCopyIP} 
            whileHover={{ 
              scale: 1.05,
              borderColor: "rgba(250, 204, 21, 0.5)",
              boxShadow: "0 0 20px rgba(250, 204, 21, 0.15)"
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-spaceCard/90 border border-yellow-500/20 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all flex items-center justify-center gap-2.5 backdrop-blur-sm shadow-md cursor-pointer group"
          >
            <span className="text-gray-400 text-xs sm:text-sm">IP:</span> 
            <span className="text-yellow-400 font-bold text-xs sm:text-sm font-mono tracking-wide">play.voidmc.net</span>
            <Copy className="w-4 h-4 text-gray-400 group-hover:text-yellow-400 transition-colors" />
          </motion.button>
        </div>

        {/* Live Server Stats Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto select-none text-left"
        >
          {/* Card 1: Server Status */}
          <motion.div 
            whileHover={{ 
              scale: 1.03, 
              borderColor: "rgba(52, 211, 153, 0.45)",
              boxShadow: "0 0 20px rgba(52, 211, 153, 0.15)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="flex items-center gap-3.5 p-4 rounded-2xl border border-emerald-500/15 bg-emerald-950/20 backdrop-blur-md relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-emerald-500/[0.02] group-hover:bg-emerald-500/[0.05] transition-colors" />
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-inner">
              <Activity className="h-5 w-5 animate-pulse" />
            </div>
            <div>
              <div className="text-[10px] text-neutral-400 font-minecraft font-bold uppercase tracking-wider">Server Status</div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-base font-minecraft font-extrabold text-emerald-400 text-glow-green">ONLINE</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Live Player Count */}
          <motion.div 
            whileHover={{ 
              scale: 1.03, 
              borderColor: "rgba(250, 204, 21, 0.45)",
              boxShadow: "0 0 20px rgba(250, 204, 21, 0.15)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="flex flex-col justify-center p-4 rounded-2xl border border-yellow-500/15 bg-yellow-950/20 backdrop-blur-md relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-yellow-500/[0.02] group-hover:bg-yellow-500/[0.05] transition-colors" />
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 shadow-inner">
                <Users className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] text-neutral-400 font-minecraft font-bold uppercase tracking-wider">Live Players</div>
                <div className="text-base font-minecraft font-extrabold text-yellow-400 text-glow-gold mt-0.5">{playerCount} Online</div>
              </div>
            </div>
            {/* Minimal Progress Bar */}
            <div className="mt-2.5 h-1.5 w-full rounded-full bg-neutral-950 border border-yellow-500/10 p-0.5 overflow-hidden">
              <motion.div 
                className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-amber-500"
                style={{ width: `${Math.min(100, (playerCount / 1000) * 100)}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, (playerCount / 1000) * 100)}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          {/* Card 3: Total Registered Players */}
          <motion.div 
            whileHover={{ 
              scale: 1.03, 
              borderColor: "rgba(249, 115, 22, 0.45)",
              boxShadow: "0 0 20px rgba(249, 115, 22, 0.15)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="flex items-center gap-3.5 p-4 rounded-2xl border border-orange-500/15 bg-orange-950/20 backdrop-blur-md relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-orange-500/[0.02] group-hover:bg-orange-500/[0.05] transition-colors" />
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 shadow-inner">
              <UserCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[10px] text-neutral-400 font-minecraft font-bold uppercase tracking-wider">Registered</div>
              <div className="text-base font-minecraft font-extrabold text-orange-400 mt-0.5 drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]">2,340 PLAYERS</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

