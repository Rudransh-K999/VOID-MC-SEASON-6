export interface Gamemode {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  features: string[];
  version: string;
  status: "ONLINE" | "MAINTENANCE" | "BETA";
}

export interface ServerRank {
  name: string;
  price: string;
  originalPrice: string;
  popular?: boolean;
  color: string;
  borderColor: string;
  glowColor: string;
  perks: string[];
}

export interface StaffMember {
  name: string;
  role: "FOUNDER" | "DEVELOPER" | "ADMIN" | "SR. MOD" | "MOD" | "HELPER";
  avatar: string; // Minecraft username for mc-heads.net
  description: string;
  color: string;
}

export interface RuleCategory {
  title: string;
  rules: string[];
}

export interface VoteSite {
  name: string;
  url: string;
  rewards: string[];
  votersToday: number;
}
