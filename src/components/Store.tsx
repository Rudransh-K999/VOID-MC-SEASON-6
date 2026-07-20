import React, { useState } from "react";
import { RANKS } from "../data";
import { ServerRank } from "../types";
import { ShoppingBag, Check, Award, Flame, Sparkles, CreditCard, X, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Store() {
  const [selectedRank, setSelectedRank] = useState<ServerRank | null>(null);
  const [username, setUsername] = useState("");
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      setErrorMsg("Please enter a valid Minecraft username.");
      return;
    }
    setErrorMsg("");
    setCheckoutComplete(true);
  };

  const resetStore = () => {
    setSelectedRank(null);
    setUsername("");
    setCheckoutComplete(false);
    setErrorMsg("");
  };

  return (
    <section id="store" className="py-20 px-4 md:px-8 relative z-10 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute left-10 top-1/4 h-72 w-72 rounded-full bg-yellow-500/5 blur-3xl pointer-events-none animated-glow"></div>
      <div className="absolute right-10 bottom-1/4 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none animated-glow [animation-delay:2s]"></div>

      <div className="mx-auto max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center mb-16 select-none">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-yellow-500/20 bg-yellow-950/40 backdrop-blur-md px-3.5 py-1 text-xs font-minecraft text-yellow-400 uppercase tracking-widest mb-4 shadow-sm">
            <ShoppingBag className="h-3 w-3" />
            SERVER STORE
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
              duration: 4.6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="font-minecraft text-3xl sm:text-4xl md:text-5xl text-white tracking-wider mc-shadow heading-drift"
          >
            UPGRADE YOUR <span className="text-yellow-400 text-glow-gold">RANK</span>
          </motion.h2>
          <p className="mt-4 max-w-xl mx-auto text-sm text-neutral-400 font-semibold leading-relaxed">
            Support VoidMC server hosting development and stand out with exclusive ranks, flight capabilities, custom prefixes, and key drops!
          </p>
        </div>

        {/* 50% Discounts Sale Banner */}
        <div className="relative mb-14 overflow-hidden rounded-3xl border border-yellow-500/30 bg-white/5 backdrop-blur-xl p-6 md:p-8 text-center max-w-4xl mx-auto shadow-2xl">
          {/* Animated pulsing light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-44 w-44 rounded-full bg-yellow-400/5 blur-3xl animate-pulse"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="rounded bg-yellow-400 px-2.5 py-0.5 text-[10px] font-minecraft font-bold text-black select-none">HOT DEAL</span>
                <span className="text-xs font-mono text-yellow-400 font-extrabold tracking-widest select-none">SUMMER GOLD DISCOUNTS</span>
              </div>
              <h3 className="mt-2 font-minecraft text-2xl text-white">UP TO 50% OFF ALL SERVER RANKS</h3>
              <p className="mt-1 text-xs text-neutral-400 max-w-md font-medium leading-relaxed">Discounts are automatically applied at checkout. Support the network today and unlock premium gameplay abilities!</p>
            </div>
            <div className="flex flex-col items-end shrink-0 select-none">
              <div className="text-xs font-mono font-bold text-neutral-500">LIMITED TIME REMAINING</div>
              <div className="text-2xl font-minecraft text-yellow-400 text-glow-gold mt-1 animate-pulse">11:42:09</div>
            </div>
          </div>
        </div>

        {/* Ranks Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {RANKS.map((rank) => (
            <div
              key={rank.name}
              className={`relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 shadow-xl glass-card ${
                rank.popular 
                  ? "border-yellow-500/30 shadow-[0_0_20px_rgba(250,204,21,0.1)] hover:border-yellow-500/50" 
                  : ""
              }`}
            >
              {rank.popular && (
                <div className="absolute top-0 right-0 rounded-bl-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-3 py-1 text-[9px] font-minecraft uppercase text-black tracking-widest shadow select-none">
                  POPULAR
                </div>
              )}

              {/* Rank visual block */}
              <div>
                <div className="flex items-center gap-2 select-none">
                  <div className={`h-8 w-1 bg-gradient-to-b ${rank.color} rounded`}></div>
                  <h3 className="font-minecraft text-2xl font-bold tracking-wide text-white">
                    {rank.name}
                  </h3>
                </div>

                {/* Price tag */}
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-3xl font-minecraft text-yellow-400 text-glow-gold">
                    {rank.price}
                  </span>
                  <span className="text-xs text-neutral-500 line-through">
                    {rank.originalPrice}
                  </span>
                </div>

                <div className="mt-1.5 text-[10px] font-bold font-mono text-yellow-400 uppercase tracking-widest flex items-center gap-1 select-none">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
                  LIFETIME SUBSCRIPTION
                </div>

                {/* List Perks */}
                <div className="mt-6 border-t border-white/10 pt-5 text-left">
                  <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider font-mono">Rank Perks Included:</div>
                  <ul className="mt-3 space-y-2.5">
                    {rank.perks.slice(0, 5).map((perk, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="h-3.5 w-3.5 text-yellow-400 shrink-0 mt-0.5" />
                        <span className="leading-tight font-medium">{perk}</span>
                      </li>
                    ))}
                  </ul>
                  {rank.perks.length > 5 && (
                    <div className="mt-2 text-[11px] font-mono font-bold text-yellow-400/70 hover:text-yellow-400 cursor-pointer" onClick={() => setSelectedRank(rank)}>
                      + {rank.perks.length - 5} MORE PERKS
                    </div>
                  )}
                </div>
              </div>

              {/* Purchase Button */}
              <motion.button
                onClick={() => setSelectedRank(rank)}
                whileHover={{ 
                  scale: 1.04,
                  boxShadow: rank.popular 
                    ? "0 0 25px rgba(250, 204, 21, 0.4)" 
                    : "0 0 15px rgba(255, 255, 255, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
                className={`group relative mt-8 w-full rounded-xl py-3.5 text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  rank.popular 
                    ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-minecraft font-bold shadow-lg shadow-yellow-500/20" 
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10 backdrop-blur-sm"
                }`}
              >
                {rank.popular && <div className="absolute inset-0 bg-yellow-400 blur-md opacity-20 group-hover:opacity-40 transition-opacity rounded-xl"></div>}
                <span className="relative z-10">UNLOCK {rank.name}</span>
              </motion.button>

            </div>
          ))}
        </div>

        {/* Dynamic Interactive Purchase Modal */}
        <AnimatePresence>
          {selectedRank && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/90 backdrop-blur-md">
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={resetStore}
                className="absolute inset-0"
              />

              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 25 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 25 }}
                className="relative w-full max-w-md overflow-hidden rounded-3xl border border-yellow-500/20 bg-spaceCard/95 backdrop-blur-2xl p-6 shadow-2xl"
              >
                {/* Close */}
                <button
                  onClick={resetStore}
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-md text-neutral-400 hover:text-yellow-400 hover:border-yellow-400/30 transition-all cursor-pointer"
                >
                  <X className="h-4.5 w-4.5" />
                </button>

                {!checkoutComplete ? (
                  <div className="text-left relative z-10">
                    <div className="flex items-center gap-2.5 pb-4 border-b border-yellow-500/10">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">
                        <Award className="h-5.5 w-5.5" />
                      </div>
                      <div>
                        <h3 className="font-minecraft text-xl text-white">UNLOCK RANK</h3>
                        <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider font-mono">Securing your lifetime license</p>
                      </div>
                    </div>

                    {/* Rank billing block */}
                    <div className="mt-4 flex items-center justify-between rounded-xl bg-white/5 p-4 border border-white/10 backdrop-blur-md">
                      <div>
                        <div className="text-sm font-bold text-white font-minecraft tracking-wide">VOIDMC {selectedRank.name} PERMITS</div>
                        <div className="text-xs text-neutral-400">Lifetime Global Network Rank</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-black text-yellow-400 text-glow-gold font-minecraft">{selectedRank.price}</div>
                        <div className="text-[9px] text-neutral-500 line-through">{selectedRank.originalPrice}</div>
                      </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handlePurchase} className="mt-6 flex flex-col gap-4">
                      <div>
                        <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest font-mono">Minecraft Player Name</label>
                        <input
                          type="text"
                          required
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="e.g. Purpled"
                          className="mt-2 w-full rounded-xl px-3.5 py-3.5 text-sm font-semibold text-white placeholder-neutral-600 glass-input focus:outline-none"
                        />
                        <p className="mt-1.5 text-[10px] text-neutral-500">Must be spelled exactly as in-game to apply perks correctly.</p>
                      </div>

                      {errorMsg && (
                        <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-2 text-xs text-red-400 font-semibold text-center">
                          {errorMsg}
                        </div>
                      )}

                      {/* Benefits recap */}
                      <div className="rounded-xl bg-white/5 p-3 text-xs text-neutral-400 border border-white/10 max-h-36 overflow-y-auto backdrop-blur-sm">
                        <div className="font-bold text-white mb-2 uppercase tracking-wider text-[9px] font-mono text-neutral-500">All features unlocking:</div>
                        <div className="space-y-1.5">
                          {selectedRank.perks.map((perk, i) => (
                            <div key={i} className="flex gap-2">
                              <Check className="h-3.5 w-3.5 text-yellow-400 shrink-0" />
                              <span>{perk}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ 
                          scale: 1.03,
                          boxShadow: "0 0 25px rgba(250, 204, 21, 0.5)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 py-3.5 text-xs font-black uppercase tracking-wider text-black shadow-lg shadow-yellow-500/25 transition-all cursor-pointer"
                      >
                        <div className="absolute inset-0 bg-yellow-400 blur-md opacity-25 group-hover:opacity-45 transition-opacity rounded-xl"></div>
                        <CreditCard className="relative z-10 h-4 w-4" />
                        <span className="relative z-10">PROCEED TO PAYMENT ({selectedRank.price})</span>
                      </motion.button>
                    </form>

                    <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-neutral-500 font-mono">
                      <ShieldCheck className="h-3.5 w-3.5 text-yellow-400 animate-pulse" />
                      <span>256-BIT ENCRYPTED SECURE CHECKOUT</span>
                    </div>

                  </div>
                ) : (
                  <div className="text-center relative z-10 py-4">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-black shadow-lg shadow-yellow-500/35"
                    >
                      <Check className="h-8 w-8 stroke-[3]" />
                    </motion.div>

                    <h3 className="mt-6 font-minecraft text-2xl text-white">PURCHASE SECURED!</h3>
                    
                    <p className="mt-3 text-sm text-neutral-400 max-w-xs mx-auto">
                      Thank you for supporting VoidMC, <strong className="text-white">{username}</strong>! Your <strong className="text-yellow-400 font-semibold">{selectedRank.name}</strong> license permit has been provisioned successfully.
                    </p>

                    <div className="mt-6 rounded-2xl border border-yellow-500/15 bg-white/5 p-4 text-left font-mono text-xs text-neutral-300 space-y-1.5 backdrop-blur-md">
                      <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest border-b border-white/10 pb-1.5 mb-2 flex justify-between">
                        <span>TRANSACTION INVOICE</span>
                        <span className="text-yellow-400 font-bold font-mono">#VMC-{Math.floor(10000 + Math.random() * 90000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Minecraft ID:</span>
                        <span className="text-white font-bold">{username}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Unlocked Rank:</span>
                        <span className="text-yellow-400 font-bold">{selectedRank.name}</span>
                      </div>
                      <div className="flex justify-between border-t border-white/10 pt-1.5 mt-2 font-bold text-white font-mono">
                        <span>Total Paid:</span>
                        <span className="text-yellow-400">{selectedRank.price}</span>
                      </div>
                    </div>

                    <div className="mt-6 text-xs text-neutral-500 italic">
                      Perks will automatically sync in-game within 2 to 5 minutes. If they don't, please contact support on Discord.
                    </div>

                    <motion.button
                      onClick={resetStore}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 15px rgba(255, 255, 255, 0.15)"
                      }}
                      whileTap={{ scale: 0.96 }}
                      className="mt-6 rounded-xl glass-button px-6 py-2.5 text-xs font-bold text-white cursor-pointer hover:text-yellow-400 transition-colors"
                    >
                      CONTINUE BROWSING
                    </motion.button>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
