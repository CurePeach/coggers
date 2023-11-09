import { ChampionName } from 'data/champions';
import { PlayerName } from 'data/players';

export type MatchDto = {
  id: number;
  date: Date;
  effect: string;
  win: Side;
  mvp: PlayerName;
  ace: PlayerName;
  draft: DraftDto;
  teams: { blue: TeamDto; red: TeamDto };
};

export type ExtraMatchProperties = {
  duration?: number;
  dragonSoul?: Dragon;
  events?: string[];
};

export type DraftDto = {
  bans: {
    blue: ChampionName[][];
    red: ChampionName[][];
  };
  picks: {
    blue: ChampionName[];
    red: ChampionName[];
  };
};

export type TeamDto = {
  captain: PlayerName;
  players: PlayerDto[];
};

export type PlayerDto = {
  name: PlayerName;
  champion: ChampionName;
  role: Role;
  kills: number;
  deaths: number;
  assists: number;
  cs: number;
};

export type Side = 'blue' | 'red';

export type Dragon = 'infernal' | 'mountain' | 'ocean' | 'cloud' | 'hextech' | 'chemtech';

export type Role = 'top' | 'jungle' | 'mid' | 'bot' | 'support' | 'aram';
