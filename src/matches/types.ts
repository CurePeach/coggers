import { PlayerName } from './players';
import { ChampionName } from './champions';

export type MatchDto = {
  date: Date;
  effect: string;
  win: 'blue' | 'red';
  mvp: PlayerName;
  ace: PlayerName;
  draft: DraftDto;
  teams: { blue: TeamDto; red: TeamDto };
};

export type ExtraMatchProperties = {
  duration?: number;
  dragonSoul?: 'infernal' | 'mountain' | 'ocean' | 'cloud' | 'hextech' | 'chemtech';
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
  role: 'top' | 'jungle' | 'mid' | 'bot' | 'support' | 'aram';
  kills: number;
  deaths: number;
  assists: number;
  cs: number;
};
