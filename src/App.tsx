import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gamemodes from "./components/Gamemodes";
import Store from "./components/Store";
import Vote from "./components/Vote";
import Staff from "./components/Staff";
import Rules from "./components/Rules";
import DiscordWidget from "./components/DiscordWidget";
import Trailer from "./components/Trailer";
import RankStoreSection from "./components/RankStoreSection";
import Footer from "./components/Footer";
import { Sparkles, Orbit, Server, HelpCircle, Gamepad2, X, Check, Copy, Monitor, Laptop } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [activeTab, setActiveTab] = useState("home");
  const [playerCount, setPlayerCount] = useState(234);
  const [isIpModalOpen, setIsIpModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [modalCopied, setModalCopied] = useState(false);
  const serverIP = "play.voidmc.net";

  // Handle Toast Trigger
  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    const handleToastEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        showToast(customEvent.detail);
      }
    };
    window.addEventListener("show-toast", handleToastEvent);
    return () => window.removeEventListener("show-toast", handleToastEvent);
  }, []);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const openIpModal = () => {
    setIsIpModalOpen(true);
  };

  const closeIpModal = () => {
    setIsIpModalOpen(false);
  };

  const handleModalCopy = () => {
    navigator.clipboard.writeText(serverIP);
    setModalCopied(true);
    showToast("Server IP successfully copied to clipboard!");
    setTimeout(() => setModalCopied(false), 2000);
  };

  // Dynamic Minecraft-style Loading Screen progress steps
  useEffect(() => {
    if (!loading) return;
    
    let timer: NodeJS.Timeout;
    const updateProgress = () => {
      setLoadProgress((prev) => {
        if (prev >= 100) {
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        // Jump progress in chunks, just like Minecraft load stages!
        const jumps = [12, 28, 45, 62, 78, 91, 100];
        const nextIdx = jumps.findIndex(j => j > prev);
        const nextVal = nextIdx !== -1 ? jumps[nextIdx] : 100;
        
        // Random intervals for authentic loading feel
        const nextDelay = Math.random() * 300 + 100;
        timer = setTimeout(updateProgress, nextDelay);
        return nextVal;
      });
    };

    timer = setTimeout(updateProgress, 200);
    return () => clearTimeout(timer);
  }, [loading]);

  // Fetch the real player count from play.kirimax.in to make the clone live and organic!
  useEffect(() => {
    const fetchPlayerCount = async () => {
      try {
        const response = await fetch("https://api.mcsrvstat.us/2/play.kirimax.in");
        const data = await response.json();
        if (data && data.online && data.players && typeof data.players.online === "number") {
          setPlayerCount(data.players.online);
        } else {
          // Robust organic fallback counts
          const hour = new Date().getHours();
          const baseCount = hour > 16 && hour < 23 ? 342 : 184; // Peak times
          const randomVariance = Math.floor(Math.random() * 25);
          setPlayerCount(baseCount + randomVariance);
        }
      } catch (err) {
        // Safe fallback in case of errors
        const base = 210 + Math.floor(Math.random() * 30);
        setPlayerCount(base);
      }
    };

    fetchPlayerCount();
    const interval = setInterval(fetchPlayerCount, 40000); // refresh every 40s
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070505] dirt-bg pixel-grid text-white"
        >
          {/* Minecraft Block Loader Logo */}
          <div className="relative flex flex-col items-center max-w-sm px-6 text-center select-none">
            <div className="mb-8 font-minecraft text-5xl sm:text-6xl font-black tracking-wider text-yellow-400 text-glow-gold drop-shadow-[0_4px_0_rgba(0,0,0,0.8)] animate-pulse">
              VOID<span className="text-white">MC</span>
            </div>
            
            <div className="mb-4 text-xs font-minecraft tracking-widest text-neutral-400">
              Generating World...
            </div>

            {/* Minecraft Progress Bar container */}
            <div className="relative h-6 w-64 md:w-80 rounded-md border-2 border-black bg-[#1b150f] p-0.5 overflow-hidden shadow-md">
              <motion.div 
                className="h-full rounded-sm bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-400"
                style={{ width: `${loadProgress}%` }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
              />
            </div>
            
            {/* Percentage indicator */}
            <div className="mt-3 font-minecraft text-sm font-bold text-yellow-400 text-glow-gold">
              {loadProgress}%
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="relative min-h-screen bg-[#070505] text-neutral-100 overflow-hidden pixel-grid">
          
          {/* Animated Stars Space Background */}
          <div className="absolute inset-0 stars opacity-45 pointer-events-none z-0" />
          
          {/* Earthy Cosmic ambience lights */}
          <div className="absolute top-[10%] left-[5%] h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none animated-glow"></div>
          <div className="absolute bottom-[15%] right-[5%] h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none animated-glow [animation-delay:4s]"></div>

          {/* Blocky floating particles / potion spores */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {/* Spore 1 */}
            <div className="absolute top-1/4 left-1/4 h-3 w-3 bg-yellow-400/10 rounded-none border border-yellow-400/20 animate-pulse [animation-delay:1s]" />
            {/* Spore 2 */}
            <div className="absolute top-1/2 left-[70%] h-2.5 w-2.5 bg-amber-400/15 rounded-none border border-amber-400/20 animate-pulse [animation-delay:3s]" />
            {/* Spore 3 */}
            <div className="absolute top-3/4 left-1/3 h-4 w-4 bg-yellow-500/10 rounded-none border border-yellow-500/15 animate-pulse [animation-delay:2s]" />
            {/* Spore 4 */}
            <div className="absolute top-[15%] left-[80%] h-2 w-2 bg-amber-500/15 rounded-none border border-amber-500/20 animate-pulse [animation-delay:4s]" />

            {/* Floating Pixel Diamond */}
            <div className="absolute top-[18%] left-[6%] md:left-[8%] mc-float-diamond hidden sm:block">
              <svg viewBox="0 0 16 16" className="w-8 h-8 sm:w-11 sm:h-11 opacity-25 drop-shadow-[0_4px_12px_rgba(85,255,255,0.2)]" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
                <path d="M7 0h2v1H7V0zm-2 1h2v1H5V1zm6 0h2v1h-2V1zM3 2h2v1H3V2zm10 0h2v1h-2V2zM1 3h2v1H1V3zm14 0h2v1h-2V3zM0 5h1v6h1v2h1v1h1v1h1v1h6v-1h1v-1h1v-1h1v-2h1V5H0z" fill="#000" />
                <path d="M7 1h2v2H7V1zm-2 1h2v1H5V2zm6 0h2v1h-2V2zm-4 1h4v1H7V3zm-2 1h2v1H5V4zm8 0h2v1h-2V4zm-10 1h2v1H3V5zm12 0h2v1h-2V5zm-12 1h2v1H3V6zm12 0h2v1h-2V6zm-10 1h12v1H5V7zm-2 1h2v1H3V8zm12 0h2v1h-2V8zm-12 1h2v1H3V9zm12 0h2v1h-2V9zm-10 1h10v1H4V10zm-1 1h2v1H3V11zm10 0h2v1h-2V11zm-8 1h6v1H5V12zm1 1h4v1H6V13z" fill="#55ffff" />
                <path d="M8 2h1v1H8V2zm-2 1h1v1H6V3zm4 0h1v1h-1V3zm-3 1h2v1H7V4zm-2 1h1v1H5V5zm6 0h1v1h-1V5zm-3 1h2v1H7V6zm-3 1h1v1H4V7zm8 0h1v1H4V7zm-7 1h6v1H5V8zm-2 1h1v1H3V9zm10 0h1v1H-1V9zm-8 1h6v1H5V10zm1 1h4v1H6V11zm1 1h2v1H7V12z" fill="#3fffff" />
                <path d="M7 2h1v1H7V2zm-2 1h1v1H5V3zm1 1h1v1H6V4zm-3 1h1v1H3V5zm1 1h1v1H4V6zm-1 1h1v1H3V7zm1 1h1v1H4V8zm-1 1h1v1H3V9zm1 1h1v1H4V10zm-1 1h1v1H3V11zm1 1h1v1H4V12zm1 1h1v1H5V13zm1 0h1v1H6V13z" fill="#00aaaa" />
                <path d="M8 1h1v1H8V1zm2 1h1v1h-1V2zm1 1h1v1h-1V3zm1 1h1v1h-1V4zm1 1h1v1h-1V5zm-2 6h1v1h-1v-1zm-1 1h1v1h-1v-1zm-1 1h1v1h-1v-1z" fill="#ffffff" />
              </svg>
            </div>

            {/* Floating Pixel Golden Apple */}
            <div className="absolute top-[52%] right-[5%] md:right-[9%] mc-float-apple hidden sm:block">
              <svg viewBox="0 0 16 16" className="w-8 h-8 sm:w-11 sm:h-11 opacity-25 drop-shadow-[0_4px_12px_rgba(251,191,36,0.2)]" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
                <path d="M6 0h4v1H6V0zm-1 1h1v1H5V1zm5 0h1v1h-1V1zm-2 1h1v1H8V2zm-5 1h2v1H3V3zm8 0h2v1h-2V3zm-9 2h1v1H2V5zm12 0h1v1h-1V5zm-13 1h1v6H1V6zm14 0h1v6h-1V6zm-13 6h1v1H2V12zm12 0h1v1h-1V12zm-11 1h2v1H3V13zm8 0h2v1h-2V13zm-6 1h4v1H6V14z" fill="#000" />
                <path d="M6 1h4v1H6V1zm-1 1h1v1H5V2zm5 0h1v1h-1V2zm-1 1h1v1H9V3zm-5 1h2v1H4V4zm6 0h2v1h-2V4zm-7 1h1v1H3V5zm9 0h1v1H4V5zm-1 1h1v1h-1V6zm-9 1h1v5H2V7zm12 0h1v5h-1V7zm-11 5h1v1H3V12zm10 0h1v1h-1V12zm-9 1h2v1H4V13zm6 0h2v1h-2V13zm-5 1h4v1H5V14z" fill="#ffaa00" />
                <path d="M6 2h2v1H6V2zm-1 4h1v1H5V4zm1 1h3v1H6V5zm-2 2h2v1H4V7zm6 0h2v1h-2V7zm-7 1h1v1H3V8zm9 0h1v1H4V8zm-8 1h1v1H4V9zm7 0h1v1h-1V9zm-6 1h5v1H5V10zm-1 1h1v1H4V11zm6 0h1v1h-1V11zm-5 1h6v1H5V12zm1 1h2v1H6V13z" fill="#ffdd55" />
                <path d="M5 2h1v1H5V2zm3 1h1v1H8V3zm1 1h1v1H9V4zm-4 1h1v1H5V5zm4 1h1v1H9V6zm-6 1h1v1H3V7zm1 1h1v1H4V8zm-1 1h1v1H3V9zm1 1h1v1H4V10zm-1 1h1v1H3V11zm1 1h1v1H4V12zm1 1h1v1H5V13z" fill="#cc8800" />
                <path d="M7 0h1v1H7V0zm1 1h1v1H8V1z" fill="#553311" />
                <path d="M6 3h1v1H6V3zm2 2h1v1H8V5zm1 1h1v1H9V6z" fill="#ffffff" />
              </svg>
            </div>

            {/* Floating Pixel Heart */}
            <div className="absolute top-[72%] left-[4%] md:left-[8%] mc-float-heart hidden sm:block">
              <svg viewBox="0 0 16 16" className="w-8 h-8 sm:w-11 sm:h-11 opacity-20 drop-shadow-[0_4px_12px_rgba(239,68,68,0.2)]" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
                <path d="M2 1h3v1H2V1zm5 0h2v1H7V1zm4 0h3v1h-3V1zm-10 1h1v3H1V2zm4 0h1v2H5V2zm2 0h1v1H7V2zm1 0h1v2H8V2zm4 0h1v3h-1V2zm2 0h1v1h-1V2zm-14 3h1v2H0V5zm15 0h1v2h-1V5zm-15 2h1v2H0V7zm15 0h1v2h-1V7zm-14 2h1v1H1V9zm13 0h1v1h-1V9zm-12 1h1v1H2V10zm11 0h1v1h-1V10zm-10 1h1v1H3V11zm8 0h1v1h-1V11zm-7 1h1v1H4V12zm5 0h1v1H9V12zm-4 1h1v1H5V13zm3 0h1v1H8V13zm-2 1h2v1H6V14z" fill="#000" />
                <path d="M2 2h3v1H2V2zm5 1h2v1H7V3zm4-1h3v1h-3V2zm-9 1h1v2H2V3zm4 0h1v2H6V3zm2 0h1v2H8V3zm4 0h1v2h-1V3zm-11 2h3v1H1V5zm5 0h4v1H6V5zm5 0h3v1h-3V5zm-11 1h13v1H1V6zm0 1h13v1H1V7zm1 1h11v1H2V8zm1 1h9v1H3V9zm1 1h7v1H4V10zm1 1h5v1H5V11zm1 1h3v1H6V12zm1 1h1v1H7V13z" fill="#ff2222" />
                <path d="M2 2h1v1H2V2zm1 1h1v1H3V3zm9-1h1v1h-1V2zm1 1h1v1h-1V3zm-11 2h1v1H2V5zm1 1h1v1H3V6zm-1 1h1v1H2V7zm6-4h1v1H8V3zm1 1h1v1H9V4z" fill="#ff7777" />
                <path d="M4 2h1v1H4V2zm1 1h1v1H5V3zm2 1h1v1H7V4zm4-2h1v1h-1V2zm1 1h1v1h-1V3z" fill="#ffffff" />
                <path d="M4 5h1v1H4V5zm1 1h1v1H5V6zm2 1h1v1H7V7zm4-2h1v1h-1V5zm1 1h1v1h-1V6zm-7 2h1v1H5V8zm2 1h1v1H7V9zm-5 0h1v1H2V9zm1 1h1v1H3V10zm5 1h1v1H8V11zm1 1h1v1H9V12zm-7 0h1v1H2V12zm1 1h1v1H3V13z" fill="#aa0000" />
              </svg>
            </div>

            {/* Floating Pixel Ender Pearl */}
            <div className="absolute top-[34%] right-[4%] md:right-[7%] mc-float-pearl hidden sm:block">
              <svg viewBox="0 0 16 16" className="w-8 h-8 sm:w-11 sm:h-11 opacity-20 drop-shadow-[0_4px_12px_rgba(0,170,136,0.2)]" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
                <path d="M6 0h4v1H6V0zm-2 1h2v1H4V1zm6 0h2v1h-2V1zm-3 1h1v1H7V2zm-4 1h1v2H3V3zm9 0h1v2h-1V3zm-11 2h1v6H1V5zm13 0h1v6h-1V5zm-1 6h1v2h-1V11zm-9 0h1v2H3V11zm3 2h4v1H6V13zm-2-1h2v1H4V12zm6 0h2v1h-2V12z" fill="#000" />
                <path d="M6 1h4v1H6V1zm-2 1h2v1H4V2zm6 0h2v1h-2V2zm-3 1h1v1H7V3zm-4 1h1v1H3V4zm9 0h1v1h-1V4zm-6 1h4v1H6V5zm-3 1h1v1H3V6zm9 0h1v1h-1V6zm-10 1h13v1H2V7zm0 1h13v1H2V8zm0 1h13v1H2V9zm1 2h10v1H3V11zm1 1h2v1H4V12zm4 0h2v1H8V12z" fill="#00aa88" />
                <path d="M7 4h2v1H7V4zm-2 2h2v1H5V6zm4 0h2v1H9V6zm-3 2h4v1H6V8zm-1 1h6v1H5V9zm1 1h4v1H6V10zm1 1h2v1H7V11z" fill="#00ffd0" />
                <path d="M6 4h1v1H6V4zm2 1h1v1H8V5zm1 1h1v1H9V6z" fill="#ffffff" />
                <path d="M5 2h1v1H5V2zm4 0h1v1H9V2zm-5 1h1v1H4V3zm6 0h1v1h-1V3zm-6 2h1v1H4V5zm6 0h1v1h-1V5zm-7 1h1v1H3V6zm9 0h1v1h-1V6zm-10 1h1v2H2V7zm11 0h1v2h-1V7zm-10 2h1v2H3V9zm9 0h1v2h-1V9zm-8 2h1v1H4V11zm6 0h1v1h-1V11zm-5 1h1v1H5V12zm4 0h1v1H9V12z" fill="#005544" />
              </svg>
            </div>

            {/* Floating Pixel Sword */}
            <div className="absolute top-[82%] right-[5%] md:right-[10%] mc-float-sword hidden sm:block">
              <svg viewBox="0 0 16 16" className="w-8 h-8 sm:w-11 sm:h-11 opacity-15 drop-shadow-[0_4px_12px_rgba(85,255,255,0.15)]" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
                <path d="M11 0h5v5h-1V4h-1V3h-1V2h-1V1h-1V0zm-1 2h1v1h-1V2zm-1 1h1v1H9V3zm-1 1h1v1H8V4zm-1 1h1v1H7V5zm-1 1h1v1H6V6zm-1 1h1v1H5V7zm-1 1h1v1H4V8zm-1 1h1v1H3V9zm-1 1h1v1H2V10zm-1 1h1v1H1V11zm-1 1h1v2H0V12zm1 2h2v1H1v-1zm1 1h1v1H2v-1z" fill="#000" />
                <path d="M12 1h3v3h-1V3h-1V2h-1V1zm-2 2h2v2H10V3zm-2 2h2v2H8V5zm-2 2h2v2H6V7zm-2 2h2v2H4V9zm-2 2h2v2H2v-2zm-1 1h1v1H1v-1z" fill="#55ffff" />
                <path d="M11 1h1v1h-1V1zm-2 2h1v1H9V3zm-2 2h1v1H7V5zm-2 2h1v1H5V7zm-2 2h1v1H3V9z" fill="#ffffff" />
                <path d="M13 2h1v1h-1V2zm-2 2h1v1h-1V4zm-2 2h1v1H9V6zm-2 2h1v1H7V8zm-2 2h1v1H5V10z" fill="#00aaaa" />
                <path d="M3 11h1v1H3v-1zm-1 1h1v1H2v-1zm-1 1h1v1H1v-1z" fill="#aa5500" />
                <path d="M2 12h1v1H2v-1z" fill="#ffaa00" />
                <path d="M4 10h1v1H4v-1zm-1 1h1v1H3v-1zm-2 2h1v1H1v-1z" fill="#332211" />
                <path d="M0 15h1v1H0v-1z" fill="#553311" />
              </svg>
            </div>
          </div>

          {/* Navigation header */}
          <Navbar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            playerCount={playerCount} 
            serverIP={serverIP} 
            openIpModal={openIpModal}
          />

          {/* Primary Transitioning Content Frame */}
          <main className="relative z-10 mx-auto max-w-7xl min-h-[60vh] px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "home" && (
                  <>
                    {/* Hero Panel */}
                    <Hero 
                      playerCount={playerCount} 
                      serverIP={serverIP} 
                      setActiveTab={setActiveTab} 
                      openIpModal={openIpModal}
                      showToast={showToast}
                    />

                    {/* Server Cinematic Trailer */}
                    <Trailer />
                    
                    {/* Embedded quick preview list of Gamemodes */}
                    <Gamemodes />

                    {/* Premium Rank Store Teaser Section */}
                    <RankStoreSection setActiveTab={setActiveTab} />

                    {/* Live Discord Interaction Section */}
                    <DiscordWidget />
                  </>
                )}

                {activeTab === "gamemodes" && <Gamemodes />}

                {activeTab === "store" && <Store />}

                {activeTab === "vote" && <Vote />}

                {activeTab === "staff" && <Staff />}

                {activeTab === "rules" && <Rules />}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Footer Hub */}
          <Footer setActiveTab={setActiveTab} serverIP={serverIP} />

          {/* Animated Custom Toast System */}
          <AnimatePresence>
            {toastMessage && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                className="fixed bottom-6 right-6 z-50 rounded-xl border border-yellow-500/30 bg-spaceCard/95 px-5 py-3.5 backdrop-blur-xl shadow-[0_10px_30px_rgba(250,204,21,0.15)] flex items-center gap-3"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-xs font-minecraft tracking-wider text-white select-none">
                  {toastMessage}
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Interactive How To Join Modal */}
          <AnimatePresence>
            {isIpModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/85 backdrop-blur-md">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeIpModal}
                  className="absolute inset-0"
                />

                <motion.div
                  initial={{ scale: 0.95, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 20 }}
                  className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#0c0d0d] p-6 sm:p-8 shadow-2xl z-10"
                >
                  {/* Close button */}
                  <button
                    onClick={closeIpModal}
                    className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-md text-neutral-400 hover:text-yellow-400 hover:border-yellow-400/30 transition-all cursor-pointer"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>

                  <div className="text-left pb-4 border-b border-yellow-500/10">
                    <h3 className="font-minecraft text-xl sm:text-2xl text-white tracking-wide">HOW TO CONNECT</h3>
                    <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider font-mono">Step into the Minecraft Void Lobby</p>
                  </div>

                  {/* Server Copy Card */}
                  <div className="mt-5 rounded-2xl bg-white/5 border border-white/5 p-4 flex items-center justify-between gap-4 backdrop-blur-md">
                    <div>
                      <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest font-mono">SERVER ADDRESS</div>
                      <div className="text-base sm:text-lg font-minecraft text-yellow-400 text-glow-gold select-all mt-1">{serverIP}</div>
                    </div>
                    <button
                      onClick={handleModalCopy}
                      className="flex items-center gap-1.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20 px-3.5 py-2 text-xs font-minecraft text-yellow-400 hover:bg-yellow-500/20 transition-all cursor-pointer"
                    >
                      {modalCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      <span>{modalCopied ? "COPIED" : "COPY"}</span>
                    </button>
                  </div>

                  {/* Steps list */}
                  <div className="mt-6 space-y-4">
                    <div className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-yellow-500 text-xs font-minecraft text-black font-bold">1</div>
                      <div>
                        <h4 className="text-xs font-minecraft text-white">LAUNCH MINECRAFT</h4>
                        <p className="text-[11px] text-neutral-400 mt-0.5 font-semibold">Open Minecraft Java Edition or Bedrock Edition. (Crossplay supports 1.16 to 1.20+)</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-yellow-500 text-xs font-minecraft text-black font-bold">2</div>
                      <div>
                        <h4 className="text-xs font-minecraft text-white">ADD SERVER</h4>
                        <p className="text-[11px] text-neutral-400 mt-0.5 font-semibold">Navigate to "Multiplayer" and click on "Add Server" button.</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-yellow-500 text-xs font-minecraft text-black font-bold">3</div>
                      <div>
                        <h4 className="text-xs font-minecraft text-white">ENTER DETAILS</h4>
                        <p className="text-[11px] text-neutral-400 mt-0.5 font-semibold">Set server name to <strong className="text-white font-minecraft text-[10px]">VoidMC</strong> and Server Address to <strong className="text-yellow-400 font-minecraft text-[10px]">play.voidmc.net</strong>.</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-yellow-500 text-xs font-minecraft text-black font-bold">4</div>
                      <div>
                        <h4 className="text-xs font-minecraft text-white">JOIN AND DEPART</h4>
                        <p className="text-[11px] text-neutral-400 mt-0.5 font-semibold">Click done, click play, and begin your ultimate void realm adventure!</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-yellow-500/10 pt-5 flex items-center justify-center gap-1.5 text-[11px] font-mono text-neutral-500">
                    <Gamepad2 className="h-4 w-4 text-yellow-400" />
                    <span>BEDROCK PORT: <strong className="text-white">19132</strong> (DEFAULT)</span>
                  </div>

                </motion.div>
              </div>
            )}
          </AnimatePresence>

        </div>
      )}
    </AnimatePresence>
  );
}
