import React, { useState } from "react";
import { RULE_CATEGORIES } from "../data";
import { BookOpen, AlertOctagon, HelpCircle, ChevronDown, Check, Scale } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Rules() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="rules" className="py-20 px-4 md:px-8 relative z-10 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute right-10 top-1/4 h-72 w-72 rounded-full bg-yellow-500/5 blur-3xl pointer-events-none animated-glow"></div>
      <div className="absolute left-10 bottom-1/4 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none animated-glow [animation-delay:3s]"></div>

      <div className="mx-auto max-w-4xl">
        
        {/* Section Heading */}
        <div className="text-center mb-16 select-none">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-yellow-500/20 bg-yellow-950/40 backdrop-blur-md px-3.5 py-1 text-xs font-minecraft text-yellow-400 uppercase tracking-widest mb-4 shadow-sm">
            <BookOpen className="h-3 w-3" />
            SERVER HANDBOOK
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
              duration: 4.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="font-minecraft text-3xl sm:text-4xl text-white tracking-wider mc-shadow heading-drift"
          >
            VOIDMC COMMUNITY <span className="text-yellow-400 text-glow-gold">RULES</span>
          </motion.h2>
          <p className="mt-4 max-w-lg mx-auto text-sm text-neutral-400 font-semibold leading-relaxed">
            Ensure your gameplay stays unpunished. Review our system safety instructions and global community guidelines before joining.
          </p>
        </div>

        {/* Rule categories accordion block */}
        <div className="flex flex-col gap-4">
          {RULE_CATEGORIES.map((category, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={category.title}
                className="overflow-hidden rounded-2xl transition-all glass-card hover:border-yellow-500/20"
              >
                {/* Accordion trigger header */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-minecraft tracking-wider text-sm sm:text-base text-white hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                      <Scale className="h-4.5 w-4.5" />
                    </div>
                    <span>{category.title}</span>
                  </div>
                  <ChevronDown className={`h-4.5 w-4.5 text-neutral-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-yellow-400" : ""}`} />
                </button>

                {/* Collapsing body panels */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="p-5 pt-0 border-t border-yellow-500/10 text-left flex flex-col gap-3">
                        {category.rules.map((rule, ruleIdx) => (
                          <div
                            key={ruleIdx}
                            className="flex items-start gap-3 rounded-xl border border-white/5 bg-black/40 backdrop-blur-md p-3.5 text-xs text-neutral-300"
                          >
                            <AlertOctagon className="h-4 w-4 text-yellow-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed font-semibold">{rule}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Disclaimer caution block */}
        <div className="mt-10 rounded-2xl border border-yellow-500/15 bg-white/5 backdrop-blur-xl p-5 text-left flex gap-4 items-start shadow-xl">
          <HelpCircle className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-black text-yellow-400 font-minecraft uppercase tracking-widest">Enforcement Notice</h4>
            <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
              Rules are actively enforced by server moderation bots and live staff moderators. Ignorance of our handbook rules is not an acceptable excuse for violations. Severe offenses (cheating, selling items for real money) will trigger automatic network HWID and IP bans.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
