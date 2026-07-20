import React, { useState } from "react";
import { ChevronRight, Menu, X, Copy, Check, Sparkles, ShoppingBag, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  playerCount: number;
  serverIP: string;
  openIpModal: () => void;
}

export default function Navbar({ activeTab, setActiveTab, playerCount, serverIP, openIpModal }: NavbarProps) {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const menuItems = [
    { id: "home", label: "HOME" },
    { id: "gamemodes", label: "GAMEMODES" },
    { id: "vote", label: "VOTE" },
    { id: "staff", label: "STAFF" },
    { id: "rules", label: "RULES" }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (id === "discord-sec") {
      setActiveTab("home");
      setTimeout(() => {
        const element = document.getElementById("discord");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else if (id === "store") {
      setActiveTab("store");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setActiveTab(id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4 md:px-8">
      {/* Decorative top yellow line with glowing gradient */}
      <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent blur-[1px]"></div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-yellow-500/10 bg-spaceCard/90 px-6 py-3 backdrop-blur-xl shadow-2xl">
        
        {/* Brand Logo - Official transparent image with proper dimensions */}
        <motion.div 
          className="flex cursor-pointer items-center mr-4 select-none"
          onClick={() => handleNavClick("home")}
          whileHover={{ 
            scale: 1.08,
            y: -1
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <img 
            src="https://i.postimg.cc/Dyzh69Lr/logo.png" 
            alt="VoidMC" 
            referrerPolicy="no-referrer"
            className="h-10 sm:h-12 w-auto object-contain" 
          />
        </motion.div>

        {/* Desktop Navigation Links (Styled as individual buttons instead of plain text) */}
        <div className="hidden lg:flex items-center gap-2">
          {menuItems.map((item) => {
            const isSectionActive = 
              activeTab === item.id || 
              (activeTab === "home" && item.id === "home");
            
            return (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(250, 204, 21, 0.4)",
                  boxShadow: isSectionActive ? "0 0 15px rgba(250, 204, 21, 0.3)" : "0 0 10px rgba(250, 204, 21, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 text-[11px] font-minecraft tracking-widest rounded-xl transition-all duration-300 cursor-pointer border ${
                  isSectionActive 
                    ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black border-yellow-400 font-extrabold shadow-md shadow-yellow-500/10" 
                    : "bg-white/5 text-neutral-400 border-white/5 hover:border-yellow-500/30 hover:text-yellow-400 hover:bg-yellow-500/5"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Prominent Action Buttons on the Right (STORE & DISCORD) */}
        <div className="hidden md:flex items-center gap-3">
          {/* STORE CTA Button */}
          <motion.button
            onClick={() => handleNavClick("store")}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(250, 204, 21, 0.45)"
            }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-minecraft text-xs px-5 py-2.5 rounded-xl shadow-lg transition-all font-extrabold cursor-pointer uppercase tracking-wider"
          >
            <ShoppingBag className="h-3.5 w-3.5 text-black shrink-0" />
            <span>STORE</span>
          </motion.button>

          {/* DISCORD Link Button */}
          <motion.button
            onClick={() => handleNavClick("discord-sec")}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(88, 101, 242, 0.35)",
              borderColor: "rgba(88, 101, 242, 0.5)",
              color: "#5865f2"
            }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-1.5 bg-white/5 border border-yellow-500/20 text-yellow-400 font-minecraft text-xs px-5 py-2.5 rounded-xl transition-all font-bold cursor-pointer uppercase tracking-wider"
          >
            <MessageSquare className="h-3.5 w-3.5 shrink-0" />
            <span>DISCORD</span>
          </motion.button>
        </div>

        {/* Mobile Header Interface (Store, Discord, and Hamburger toggler) */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Store button on mobile */}
          <motion.button
            onClick={() => handleNavClick("store")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-minecraft text-[10px] px-3 py-1.8 rounded-lg font-bold cursor-pointer"
          >
            STORE
          </motion.button>

          {/* Discord button on mobile */}
          <motion.button
            onClick={() => handleNavClick("discord-sec")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white/5 border border-yellow-500/20 text-yellow-400 font-minecraft text-[10px] px-3 py-1.8 rounded-lg font-bold cursor-pointer"
          >
            DISCORD
          </motion.button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-400 hover:text-yellow-400 hover:bg-white/10 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 mt-2 rounded-2xl border border-yellow-500/10 bg-[#0c0d0d] p-5 backdrop-blur-2xl md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => {
                const isSectionActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between rounded-xl p-3 text-left font-minecraft tracking-wider transition-all cursor-pointer ${
                      isSectionActive 
                        ? "bg-yellow-400/10 border border-yellow-400/30 text-yellow-400" 
                        : "text-neutral-400 hover:bg-white/5 hover:text-yellow-400"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`h-4 w-4 transition-transform ${isSectionActive ? "rotate-90 text-yellow-400" : "text-neutral-600"}`} />
                  </button>
                );
              })}
              
              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-4">
                <button
                  onClick={openIpModal}
                  className="rounded-xl bg-white/5 p-3 text-center border border-white/10 font-minecraft text-xs text-yellow-400 font-bold"
                >
                  HOW TO JOIN
                </button>
                <button
                  onClick={handleCopyIP}
                  className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 p-3 text-center text-black font-minecraft text-xs font-bold cursor-pointer"
                >
                  <span>{copied ? "COPIED" : "COPY IP ADDRESS"}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

