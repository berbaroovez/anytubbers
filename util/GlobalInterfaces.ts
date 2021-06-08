export interface Player {
  captain: boolean;
  discord: string;
  riot: string;
  team?: string;
}

export interface Team {
  id?: string;
  name: string;
  players: Player[];
}
