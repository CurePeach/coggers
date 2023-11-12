import { ExtraMatchProperties, MatchDto } from 'data/types';

import { ChampionName } from './champions';
import { PlayerName } from './players';

export const matchesS2: (MatchDto & ExtraMatchProperties)[] = [
  {
    id: 201,
    date: new Date('2023-02-21'),
    effect: 'Multiple Choice',
    win: 'red',
    mvp: PlayerName.ThePretender,
    ace: PlayerName.RayOfGayshine,
    draft: {
      bans: {
        blue: [
          [ChampionName.Nasus],
          [ChampionName.Maokai],
          [ChampionName.Zac],
          [ChampionName.Sivir],
          [ChampionName.Amumu],
        ],
        red: [
          [ChampionName.Riven],
          [ChampionName.Poppy],
          [ChampionName.Ekko],
          [ChampionName.Varus],
          [ChampionName.Taric],
        ],
      },
      picks: {
        blue: [
          ChampionName.Gangplank,
          ChampionName.Gragas,
          ChampionName.Rakan,
          ChampionName.Jhin,
          ChampionName.Ryze,
        ],
        red: [
          ChampionName.Gnar,
          ChampionName.Sylas,
          ChampionName.Syndra,
          ChampionName.Blitzcrank,
          ChampionName.Yasuo,
        ],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.Roland,
        players: [
          {
            name: PlayerName.Taikutsu,
            champion: ChampionName.Gangplank,
            role: 'top',
            kills: 1,
            deaths: 8,
            assists: 5,
            cs: 170,
          },
          {
            name: PlayerName.Draghau,
            champion: ChampionName.Gragas,
            role: 'jungle',
            kills: 4,
            deaths: 5,
            assists: 8,
            cs: 143,
          },
          {
            name: PlayerName.Roland,
            champion: ChampionName.Ryze,
            role: 'mid',
            kills: 3,
            deaths: 6,
            assists: 4,
            cs: 264,
          },
          {
            name: PlayerName.Sharpaim,
            champion: ChampionName.Jhin,
            role: 'bot',
            kills: 6,
            deaths: 5,
            assists: 7,
            cs: 156,
          },
          {
            name: PlayerName.RayOfGayshine,
            champion: ChampionName.Rakan,
            role: 'support',
            kills: 1,
            deaths: 8,
            assists: 7,
            cs: 43,
          },
        ],
      },
      red: {
        captain: PlayerName.Sewerslvt,
        players: [
          {
            name: PlayerName.JemLem,
            champion: ChampionName.Gnar,
            role: 'top',
            kills: 7,
            deaths: 1,
            assists: 5,
            cs: 210,
          },
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Sylas,
            role: 'jungle',
            kills: 8,
            deaths: 3,
            assists: 10,
            cs: 209,
          },
          {
            name: PlayerName.CureLemonade,
            champion: ChampionName.Syndra,
            role: 'mid',
            kills: 9,
            deaths: 2,
            assists: 7,
            cs: 222,
          },
          {
            name: PlayerName.Sewerslvt,
            champion: ChampionName.Yasuo,
            role: 'bot',
            kills: 7,
            deaths: 4,
            assists: 13,
            cs: 219,
          },
          {
            name: PlayerName.ThePretender,
            champion: ChampionName.Blitzcrank,
            role: 'support',
            kills: 1,
            deaths: 5,
            assists: 18,
            cs: 37,
          },
        ],
      },
    },
    dragonSoul: 'mountain',
    events: [
      'NightRaven fully stacked Mejais at one point',
      'NightRaven died in the enemy fountain (fake news)',
      'Draghau landed a Flash E on Cure Lemonade while on 200 ping',
    ],
  },
];
