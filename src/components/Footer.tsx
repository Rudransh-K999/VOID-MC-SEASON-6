import React from "react";
import { Sword, ExternalLink } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
  serverIP: string;
}

export default function Footer({ setActiveTab, serverIP }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 border-t border-yellow-500/10 backdrop-blur-md py-12 px-4 md:px-8 relative z-10 text-left">
      <div className="mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
          
          {/* Column 1: Logo & brand */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2.5 select-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600 shadow shadow-yellow-500/10">
                <Sword className="h-4.5 w-4.5 text-black" />
              </div>
              <span className="font-minecraft text-lg tracking-wider text-white">
                VOID<span className="text-yellow-400">MC</span>
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-xs font-semibold">
              India's premium Minecraft Network. Experience custom survival, heart-stealing PvP, automated skyblock, and lag-free minigames.
            </p>
          </div>

          {/* Column 2: Quick Links Navigation */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest font-mono">QUICK DIRECTORY</h4>
            <div className="flex flex-col gap-2 text-xs font-semibold text-neutral-400">
              <button onClick={() => setActiveTab("home")} className="hover:text-yellow-400 transition-colors text-left cursor-pointer">Home Hub</button>
              <button onClick={() => setActiveTab("gamemodes")} className="hover:text-yellow-400 transition-colors text-left cursor-pointer">Available Realms</button>
              <button onClick={() => setActiveTab("store")} className="hover:text-yellow-400 transition-colors text-left cursor-pointer">Store Shop</button>
              <button onClick={() => setActiveTab("vote")} className="hover:text-yellow-400 transition-colors text-left cursor-pointer">Voting Portal</button>
            </div>
          </div>

          {/* Column 3: Community Resources */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest font-mono">RESOURCES</h4>
            <div className="flex flex-col gap-2 text-xs font-semibold text-neutral-400">
              <button onClick={() => setActiveTab("rules")} className="hover:text-yellow-400 transition-colors text-left cursor-pointer">Community Rules</button>
              <button onClick={() => setActiveTab("staff")} className="hover:text-yellow-400 transition-colors text-left cursor-pointer">Meet Staff</button>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors flex items-center gap-1">
                <span>Discord Group</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <span className="text-neutral-500">In-game Port: 19132</span>
            </div>
          </div>

          {/* Column 4: Quick IP info */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest font-mono">SERVER ADDRESS</h4>
            <div className="rounded-xl bg-white/5 p-3 border border-yellow-500/10 backdrop-blur-sm">
              <div className="font-mono text-xs font-bold text-yellow-400 tracking-wider select-all">{serverIP}</div>
              <div className="text-[9px] text-neutral-500 font-mono mt-1 font-semibold uppercase tracking-widest">Host IP</div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer block & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <div>
            <p className="font-semibold">VoidMC Network © {currentYear}. All rights reserved.</p>
            <p className="mt-1 text-[10px] text-neutral-600 max-w-xl leading-relaxed">
              We are NOT affiliated with Mojang Studios, Microsoft, or any Minecraft organizations. All server store purchases go directly to maintaining our cloud hardware, servers, custom plugin creation, and team developers.
            </p>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 text-[10px] text-neutral-600 border border-yellow-500/10 rounded-lg bg-white/5 p-2 font-mono select-none">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
            <span>VOIDMC MINECRAFT NETWORK</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
