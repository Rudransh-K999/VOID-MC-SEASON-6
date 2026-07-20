import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function DiscordWidget() {
  const [onlineCount, setOnlineCount] = useState<number | string>("...");

  useEffect(() => {
    async function fetchDiscordStats() {
      const apiURL = "https://discord.com/api/guilds/1435534261431173283/widget.json";
      try {
        const response = await fetch(apiURL);
        if (!response.ok) throw new Error("Failed to fetch Discord payload");
        
        const data = await response.json();
        
        if (data && data.presence_count !== undefined) {
          setOnlineCount(data.presence_count.toLocaleString());
        }
      } catch (error) {
        console.error("Discord Widget Error:", error);
        setOnlineCount("Online");
      }
    }

    fetchDiscordStats();
    const interval = setInterval(fetchDiscordStats, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="discord" className="py-12 sm:py-20 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative text-center md:text-left">
          
          {/* Ambient Glow Element */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Text Framework Left Panel */}
          <div className="w-full md:w-1/2 z-10 order-2 md:order-1">
            <span className="bg-yellow-400/10 text-yellow-400 border border-yellow-500/20 font-minecraft text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider font-bold inline-block select-none">
              Official Community
            </span>
            <motion.h2 
              animate={{ 
                y: [0, -5, 0],
                textShadow: [
                  "0 0 10px rgba(88, 101, 242, 0.15)",
                  "0 0 25px rgba(88, 101, 242, 0.45)",
                  "0 0 10px rgba(88, 101, 242, 0.15)"
                ]
              }}
              transition={{ 
                duration: 4.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="font-minecraft text-2xl sm:text-4xl lg:text-5xl text-white mt-3 mb-3 tracking-wide leading-tight heading-drift select-none"
            >
              JOIN OUR <span className="text-[#5865f2] text-glow-blue">DISCORD</span>
            </motion.h2>
            <p className="text-gray-400 text-xs sm:text-base leading-relaxed mb-6 sm:mb-8 font-medium max-w-xl mx-auto md:mx-0">
              Stay up to date with the latest server announcements, report issues, apply for staff, participate in community events, and chat with thousands of other players instantly!
            </p>
            
            {/* Community Metrics Counters Structure */}
            <div className="flex items-center justify-center md:justify-start gap-6 sm:gap-12 select-none">
              <div className="flex flex-col">
                <span id="total-members" className="text-2xl sm:text-4xl lg:text-5xl font-minecraft text-white tracking-wide">
                  2000+
                </span>
                <span className="text-[9px] sm:text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">
                  Total Members
                </span>
              </div>
              <div className="w-px h-10 sm:h-12 bg-gray-800"></div>
              <div className="flex flex-col text-left">
                <div className="flex items-center justify-center md:justify-start gap-1.5 sm:gap-2">
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-yellow-400 pulse-yellow"></span>
                  <span id="online-members" className="text-2xl sm:text-4xl lg:text-5xl font-minecraft text-white tracking-wide">
                    {onlineCount}
                  </span>
                </div>
                <span className="text-[9px] sm:text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">
                  Online Now
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: DISCORD LOGO ELEMENT */}
          <div className="w-full md:w-1/2 flex items-center justify-center z-10 order-1 md:order-2 mb-4 md:mb-0">
            <motion.a 
              href="https://discord.gg/w9dbxPVMgG" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.08,
                y: -5,
                filter: "drop-shadow(0 0 25px rgba(88, 101, 242, 0.45))"
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 15 }}
              className="bouncy-placer block w-full max-w-[180px] sm:max-w-[280px] md:max-w-[340px] px-2 cursor-pointer"
            >
              <img 
                src="https://i.postimg.cc/yYrHbLyn/discord.png" 
                alt="Click to Join Discord Server" 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain mx-auto" 
              />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
