import { Gamemode, ServerRank, StaffMember, RuleCategory, VoteSite } from "./types";

export const GAMEMODES: Gamemode[] = [
  {
    id: "economy",
    name: "Economy",
    description: "Economy SMP with high-security landclaims, robust player economy, trade shops, and quest systems.",
    longDescription: "Step into our immersive Economy realm where you can build your wealth, manage custom player-driven markets, and cooperate with other adventurers in complete safety. Protect your creations using our gold-shovel Land Claims system, establish custom chest shops, buy and sell in the central auction house, and complete daily quests to earn rewards. Experience survival built for true builders and traders.",
    icon: "Coins",
    color: "#facc15", // MC Yellow / Gold
    features: [
      "Player Shops & Chest Shops",
      "Auction Houses",
      "Bounty (place bounties on other players)",
      "Landclaims (golden shovel protection)",
      "Jobs & Daily Contracts",
      "Premium Pets",
      "Toolskins Shop"
    ],
    version: "1.16.x - 1.21.x",
    status: "ONLINE"
  },
  {
    id: "ffa",
    name: "FFA",
    description: "Free-For-All arena featuring custom modern 1.21+ combat mechanics including the LT Mace and Sword.",
    longDescription: "Unleash your pure combat potential in our fast-paced Free-For-All (FFA) dueling arena. Refine your timing and coordination using the latest Minecraft 1.21 mechanics, including the heavy-hitting LT Mace alongside traditional sword combos. Slay opponents, build up epic killstreaks, climb the competitive lobby leaderboards, and experience latency-optimized hit detection.",
    icon: "Sword",
    color: "#ef4444", // Redstone Red
    features: [
      "Next-generation LT Mace and Sword custom combat mechanics",
      "Instant respawns into high-intensity, fluid arena environments",
      "Real-time killstreak track-boards and competitive lobby leaderboards",
      "No-lag hit registration optimized for competitive players"
    ],
    version: "1.16.x - 1.21.x",
    status: "ONLINE"
  }
];

export const RANKS: ServerRank[] = [
  {
    name: "ELITE",
    price: "$4.99",
    originalPrice: "$9.99",
    color: "from-emerald-400 to-green-500",
    borderColor: "border-emerald-500/30",
    glowColor: "shadow-emerald-500/20",
    perks: [
      "Exclusive [Elite] Chat prefix and Tab name",
      "Ability to FLY in all server lobbies",
      "Up to 5 set-homes (Vanilla is 1)",
      "Elite Kit access (every 24 hours)",
      "Access to standard cosmetic particle trails",
      "Priority server queue slot (bypass full server)"
    ]
  },
  {
    name: "TITAN",
    price: "$14.99",
    originalPrice: "$29.99",
    popular: true,
    color: "from-yellow-400 to-amber-500",
    borderColor: "border-yellow-400/50",
    glowColor: "shadow-yellow-400/30",
    perks: [
      "Premium [Titan] glowing Chat Prefix",
      "All benefits of the ELITE rank included",
      "Up to 15 set-homes",
      "Access to virtual workbench (`/craft`) and trash bin",
      "Titan Kit access (every 24 hours)",
      "Custom emerald particle wings cosmetically",
      "Ability to host up to 3 active auction items"
    ]
  },
  {
    name: "VOID",
    price: "$29.99",
    originalPrice: "$59.99",
    color: "from-emerald-500 to-teal-600",
    borderColor: "border-emerald-500/60",
    glowColor: "shadow-emerald-500/40",
    perks: [
      "Prestigious [Void] dark emerald prefix in Chat",
      "All benefits of the TITAN rank included",
      "Up to 30 set-homes",
      "Access to virtual enderchest (`/ec`) and disposal",
      "Void Kit access with max protection armor sets",
      "Ability to join full survival / skyblock realms",
      "Bypass auction house sales tax completely"
    ]
  },
  {
    name: "EMERALD",
    price: "$49.99",
    originalPrice: "$99.99",
    color: "from-emerald-300 via-green-400 to-yellow-500",
    borderColor: "border-emerald-400",
    glowColor: "shadow-emerald-500/50",
    perks: [
      "Supreme [EMERALD] green-animated glowing title",
      "All benefits of the VOID rank included",
      "UNLIMITED set-homes",
      "Instant teleport (`/tpahere` and `/tpa`) without delay",
      "Emerald Kit access (contains legendary keys & relics)",
      "Keep Inventory enabled in selected survival areas",
      "Exclusive Discord priority support and private lounge"
    ]
  }
];

export const STAFF_MEMBERS: StaffMember[] = [
  {
    name: "VoidAdmin",
    role: "FOUNDER",
    avatar: "Notch",
    description: "The architectural creator and systems administrator of the VoidMC infrastructure.",
    color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10"
  },
  {
    name: "VoidDev",
    role: "DEVELOPER",
    avatar: "jeb_",
    description: "Lead programmer specializing in writing custom Java plugins, gameplay features, and database performance.",
    color: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10"
  },
  {
    name: "GrianMC",
    role: "ADMIN",
    avatar: "Grian",
    description: "Manages day-to-day operations, community events, custom server quests, and staff schedules.",
    color: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10"
  },
  {
    name: "VoidMod",
    role: "SR. MOD",
    avatar: "Mumbo",
    description: "Oversees the moderation team, handles ban appeals, and ensures fair play across all gamemodes.",
    color: "text-yellow-500 border-yellow-500/20 bg-yellow-500/5"
  },
  {
    name: "LifestealHero",
    role: "MOD",
    avatar: "Purpled",
    description: "Dedicated to policing hackers, monitoring chat violations, and helping out players.",
    color: "text-emerald-200 border-emerald-200/20 bg-emerald-200/5"
  },
  {
    name: "VoidHelper",
    role: "HELPER",
    avatar: "Skeppy",
    description: "Answering player questions, greeting newcomers, and maintaining order in the lobbies.",
    color: "text-neutral-400 border-neutral-400/20 bg-neutral-400/5"
  }
];

export const RULE_CATEGORIES: RuleCategory[] = [
  {
    title: "General Code of Conduct",
    rules: [
      "Be respectful to all players in chat, Discord, and on our platforms.",
      "Do not send hateful, discriminatory, racist, or extremely toxic messages.",
      "Do not spam, write in all-caps excessively, or advertise external servers/websites.",
      "Avoid discussing highly political, sensitive, or offensive topics.",
      "Impersonation of staff members or any content creators is strictly prohibited."
    ]
  },
  {
    title: "Fair Play & Modifications",
    rules: [
      "Any hacking clients, cheat modules, auto-clickers, or x-ray resource packs are banned.",
      "Allowed client modifications: OptiFine, Sodium, Lunar Client, Badlion, Minimaps (no radar).",
      "Do not exploit any bugs or glitches. Report them to staff immediately to earn rewards.",
      "Macro keys and hardware-level automation for farming or grinding are not allowed.",
      "Do not evade bans or mutes using secondary accounts."
    ]
  },
  {
    title: "Gameplay Regulations",
    rules: [
      "Griefing, stealing, or destroying player claims on Survival is strictly prohibited.",
      "PvP is fully allowed in designated wild zones or Lifesteal SMP, but spawn killing is banned.",
      "Do not trap nether portals, create infinite lag machines, or crash server instances.",
      "Cross-teaming in solo Bedwars maps or organizing massive target focus lists is not allowed.",
      "Scamming players of in-game items using real-world money transfers is a permanent ban."
    ]
  }
];

export const VOTE_SITES: VoteSite[] = [
  {
    name: "Minecraft-MP Portal",
    url: "https://minecraft-mp.com/",
    rewards: ["1x Emerald Vote Key", "$5,000 In-game Balance", "50 Claim Blocks"],
    votersToday: 412
  },
  {
    name: "TopG Voting Site",
    url: "https://topg.org/",
    rewards: ["1x Emerald Crate Key", "100x XP Bottle Levels", "2x Vote Points"],
    votersToday: 389
  },
  {
    name: "PlanetMinecraft List",
    url: "https://www.planetminecraft.com/",
    rewards: ["1x Lifesteal Booster Key", "$10,000 In-game Cash", "Custom Emerald Trail"],
    votersToday: 512
  }
];
