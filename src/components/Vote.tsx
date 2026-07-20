import React, { useState } from "react";
import { VOTE_SITES } from "../data";
import { VoteSite } from "../types";
import { Flame, Ticket, Users, Check, ExternalLink, Calendar, HelpCircle, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function Vote() {
  const [votedSites, setVotedSites] = useState<string[]>([]);

  const handleVoteClick = (siteName: string, url: string) => {
    // Open in new window (simulated safe external check, fallback gracefully)
    window.open(url, "_blank");
    
    if (!votedSites.includes(siteName)) {
      setVotedSites([...votedSites, siteName]);
    }
  };

  return (
    <section id="vote" className="py-20 px-4 md:px-8 relative z-10 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-yellow-500/5 blur-3xl pointer-events-none animated-glow"></div>
      <div className="absolute left-10 bottom-10 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none animated-glow [animation-delay:3s]"></div>

      <div className="mx-auto max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center mb-16 select-none">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-yellow-500/20 bg-yellow-950/40 backdrop-blur-md px-3.5 py-1 text-xs font-minecraft text-yellow-400 uppercase tracking-widest mb-4 shadow-sm">
            <Ticket className="h-3 w-3" />
            VOTE LIST
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
              duration: 4.8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="font-minecraft text-3xl sm:text-4xl md:text-5xl text-white tracking-wider mc-shadow heading-drift"
          >
            VOTE FOR <span className="text-yellow-400 text-glow-gold">REWARDS</span>
          </motion.h2>
          <p className="mt-4 max-w-xl mx-auto text-sm text-neutral-400 font-semibold leading-relaxed">
            Voting daily on Minecraft server directories helps VoidMC grow and climbs the ranking charts, earning you epic free crate keys and in-game gold!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: List of Voting directories */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="text-left mb-2">
              <h3 className="font-minecraft text-lg font-extrabold text-white uppercase tracking-wider">AVAILABLE VOTE DIRECTORIES</h3>
              <p className="text-xs text-neutral-500 mt-1">You can vote once every 24 hours on each of the sites listed below.</p>
            </div>

            {VOTE_SITES.map((site) => {
              const hasVoted = votedSites.includes(site.name);
              return (
                <div
                  key={site.name}
                  className={`relative overflow-hidden rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-5 transition-all glass-card ${
                    hasVoted 
                      ? "border-yellow-500/30 bg-yellow-500/5 shadow-[0_0_15px_rgba(250,204,21,0.08)]" 
                      : ""
                  }`}
                >
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <h4 className="font-minecraft font-bold text-base text-white tracking-wide">{site.name}</h4>
                      {hasVoted && (
                        <span className="rounded bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 text-[9px] font-bold text-yellow-400 uppercase tracking-widest">
                          COMPLETED
                        </span>
                      )}
                    </div>
                    
                    {/* Rewards tags inside vote cards */}
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {site.rewards.map((reward, i) => (
                        <span key={i} className="rounded-lg bg-white/5 border border-white/10 px-2 py-1 text-[10px] font-mono text-yellow-400 font-semibold backdrop-blur-sm">
                          + {reward}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 flex items-center gap-1.5 text-[10px] text-neutral-500 font-semibold">
                      <Users className="h-3.5 w-3.5 text-neutral-600" />
                      <span>Voters Today: <strong className="text-neutral-400">{site.votersToday}</strong></span>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => handleVoteClick(site.name, site.url)}
                    whileHover={hasVoted ? {} : { 
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(250, 204, 21, 0.45)" 
                    }}
                    whileTap={hasVoted ? {} : { scale: 0.98 }}
                    className={`group relative shrink-0 flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-extrabold transition-all uppercase tracking-wider cursor-pointer ${
                      hasVoted
                        ? "bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 backdrop-blur-sm"
                        : "bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg shadow-yellow-500/20"
                    }`}
                  >
                    {!hasVoted && <div className="absolute inset-0 bg-yellow-400 blur-md opacity-25 group-hover:opacity-45 transition-opacity rounded-xl"></div>}
                    {hasVoted ? (
                      <span className="relative z-10 flex items-center gap-1.5">
                        <Check className="h-4 w-4 stroke-[3]" />
                        <span>VOTED SUCCESS</span>
                      </span>
                    ) : (
                      <span className="relative z-10 flex items-center gap-1.5">
                        <span>VOTE & UNLOCK</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </motion.button>

                </div>
              );
            })}
          </div>

          {/* Right Column: Steps Instructions, leaderboards, faq */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-xl text-left">
              <h3 className="font-minecraft font-extrabold text-base text-white flex items-center gap-2">
                <Flame className="h-4.5 w-4.5 text-yellow-400" />
                VOTER'S HANDBOOK & REWARDS
              </h3>
              
              {/* Steps */}
              <div className="mt-5 space-y-4">
                <div className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-xs font-black text-black font-mono">1</div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Click Vote Directories</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">Open the vote links on this page. Each site is a separate directory list.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-xs font-black text-black font-mono">2</div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Provide Username</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">Enter your exact Minecraft character nickname. Solve the simple robot captcha.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-xs font-black text-black font-mono">3</div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Claim Keydrops</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">The server will detect your vote immediately. Crate keys and claim blocks are sent instantly in-game.</p>
                  </div>
                </div>
              </div>

              {/* In-game vote shop note */}
              <div className="mt-6 rounded-xl bg-white/5 border border-white/10 p-4 leading-relaxed backdrop-blur-md">
                <div className="flex items-center gap-1.5 text-xs text-yellow-400 font-bold">
                  <Ticket className="h-4 w-4 text-yellow-400" />
                  <span>VOTE REWARDS SHOP</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Every vote adds <strong className="text-white">1x Vote Point</strong> to your bank. Type <strong className="text-white font-mono bg-black px-1.5 py-0.5 rounded">/voteshop</strong> inside lobbies to spend points on fly permits, custom tags, or high-tier multipliers!
                </p>
              </div>

              {/* Total votes counter */}
              <div className="mt-5 pt-5 border-t border-white/10 flex justify-between items-center text-xs text-neutral-400 font-semibold">
                <span>VOTING COMPLETED:</span>
                <span className="font-mono text-yellow-400 font-extrabold">{votedSites.length} / {VOTE_SITES.length} SITES</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
