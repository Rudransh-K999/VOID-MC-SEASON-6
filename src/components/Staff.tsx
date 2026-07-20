import React from "react";
import { STAFF_MEMBERS } from "../data";
import { Users, Mail, ShieldCheck, Gamepad2, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Staff() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <section id="staff" className="py-20 px-4 md:px-8 relative z-10 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute left-12 top-10 h-72 w-72 rounded-full bg-yellow-500/5 blur-3xl pointer-events-none animated-glow"></div>
      <div className="absolute right-12 bottom-10 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none animated-glow [animation-delay:3s]"></div>

      <div className="mx-auto max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center mb-16 select-none">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-yellow-500/20 bg-yellow-950/40 backdrop-blur-md px-3.5 py-1 text-xs font-minecraft text-yellow-400 uppercase tracking-widest mb-4 shadow-sm">
            <Users className="h-3 w-3" />
            STAFF LIST
          </div>
          <motion.h2 
            animate={{ 
              y: [0, -5, 0],
              textShadow: [
                "0 0 10px rgba(250, 204, 21, 0.15)",
                "0 0 22px rgba(250, 204, 21, 0.45)",
                "0 0 10px rgba(250, 204, 21, 0.15)"
              ]
            }}
            transition={{ 
              duration: 4.4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="font-minecraft text-3xl sm:text-4xl md:text-5xl text-white tracking-wider mc-shadow heading-drift"
          >
            VOIDMC <span className="text-yellow-400 text-glow-gold">STAFF TEAM</span>
          </motion.h2>
          <p className="mt-4 max-w-xl mx-auto text-sm text-neutral-400 font-semibold leading-relaxed">
            Meet the developers, architects, administrators, and moderators who keep VoidMC lobbies lag-free and safe for the community.
          </p>
        </div>

        {/* Staff cards grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {STAFF_MEMBERS.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              className="relative overflow-hidden rounded-2xl p-5 flex items-start gap-4 transition-all glass-card"
            >
              {/* Minecraft Face Render from API */}
              <div className="relative shrink-0 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 p-2 group h-20 w-20 backdrop-blur-md">
                <img
                  src={`https://mc-heads.net/avatar/${member.avatar}/80`}
                  alt={`${member.name}'s Minecraft Avatar`}
                  referrerPolicy="no-referrer"
                  className="h-14 w-14 rounded-lg image-pixelated transition-transform group-hover:scale-108"
                />
                {/* Small indicator on head */}
                <div className="absolute right-1 bottom-1 h-3.5 w-3.5 rounded-full bg-black flex items-center justify-center border border-white/10">
                  <div className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></div>
                </div>
              </div>

              {/* Staff text content */}
              <div className="text-left flex flex-col justify-between min-h-20">
                <div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-minecraft text-base text-white tracking-wide">
                      {member.name}
                    </span>
                    <span className={`rounded-md border text-[8px] font-black tracking-widest px-1.5 py-0.5 ${member.color}`}>
                      {member.role}
                    </span>
                  </div>
                  
                  <p className="text-[11px] text-neutral-400 mt-2 leading-relaxed font-medium">
                    {member.description}
                  </p>
                </div>

                <div className="mt-3 flex items-center gap-2 text-[10px] text-neutral-500 font-semibold uppercase tracking-wider font-mono">
                  <ShieldCheck className="h-3.5 w-3.5 text-yellow-400" />
                  <span>Verified Administrator</span>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Join our team card section */}
        <div className="mt-16 max-w-2xl mx-auto rounded-3xl border border-yellow-500/15 bg-white/5 backdrop-blur-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-left shadow-xl">
          <div>
            <h3 className="font-minecraft font-bold text-lg text-white">Want to join the VoidMC Staff?</h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-sm">We are actively searching for dedicated moderators, builders, and helpers to help our player community grow!</p>
          </div>
          <button
            onClick={() => window.open("https://discord.com/", "_blank")}
            className="glass-button flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold text-white shrink-0 hover:text-yellow-400 transition-colors cursor-pointer"
          >
            <span>SUBMIT APPLICATION</span>
            <ArrowUpRight className="h-4 w-4 text-neutral-500" />
          </button>
        </div>

      </div>
    </section>
  );
}
