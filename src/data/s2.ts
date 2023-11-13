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
  {
    id: 202,
    date: new Date('2023-02-28'),
    effect: 'My Liege!',
    win: 'blue',
    mvp: PlayerName.Sewerslvt,
    ace: PlayerName.Draghau,
    draft: {
      bans: {
        blue: [
          [ChampionName.Gangplank],
          [ChampionName.Riven],
          [ChampionName.JarvanIV],
          [ChampionName.Diana],
          [ChampionName.Thresh],
        ],
        red: [
          [ChampionName.Aatrox],
          [ChampionName.Warwick],
          [ChampionName.Jax],
          [ChampionName.Nocturne],
          [ChampionName.Kassadin],
        ],
      },
      picks: {
        blue: [
          ChampionName.Mordekaiser,
          ChampionName.Bard,
          ChampionName.Varus,
          ChampionName.Wukong,
          ChampionName.Vi,
        ],
        red: [
          ChampionName.Pantheon,
          ChampionName.Kayle,
          ChampionName.Draven,
          ChampionName.AurelionSol,
          ChampionName.Elise,
        ],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.RayOfGayshine,
        players: [
          {
            name: PlayerName.Sewerslvt,
            champion: ChampionName.Wukong,
            role: 'top',
            kills: 9,
            deaths: 3,
            assists: 9,
            cs: 199,
          },
          {
            name: PlayerName.Sharpaim,
            champion: ChampionName.Vi,
            role: 'jungle',
            kills: 3,
            deaths: 5,
            assists: 12,
            cs: 148,
          },
          {
            name: PlayerName.RayOfGayshine,
            champion: ChampionName.Mordekaiser,
            role: 'mid',
            kills: 8,
            deaths: 3,
            assists: 4,
            cs: 149,
          },
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Varus,
            role: 'bot',
            kills: 8,
            deaths: 1,
            assists: 8,
            cs: 216,
          },
          {
            name: PlayerName.JemLem,
            champion: ChampionName.Bard,
            role: 'support',
            kills: 1,
            deaths: 6,
            assists: 17,
            cs: 13,
          },
        ],
      },
      red: {
        captain: PlayerName.ThePretender,
        players: [
          {
            name: PlayerName.ThePretender,
            champion: ChampionName.AurelionSol,
            role: 'top',
            kills: 0,
            deaths: 7,
            assists: 7,
            cs: 181,
          },
          {
            name: PlayerName.ElVaux,
            champion: ChampionName.Elise,
            role: 'jungle',
            kills: 8,
            deaths: 6,
            assists: 7,
            cs: 135,
          },
          {
            name: PlayerName.Roland,
            champion: ChampionName.Kayle,
            role: 'mid',
            kills: 2,
            deaths: 4,
            assists: 6,
            cs: 280,
          },
          {
            name: PlayerName.Draghau,
            champion: ChampionName.Draven,
            role: 'bot',
            kills: 7,
            deaths: 8,
            assists: 6,
            cs: 204,
          },
          {
            name: PlayerName.Taikutsu,
            champion: ChampionName.Pantheon,
            role: 'support',
            kills: 1,
            deaths: 4,
            assists: 10,
            cs: 78,
          },
        ],
      },
    },
    dragonSoul: 'cloud',
    events: [
      "JemLem didn't use Anathema's Chains because he was panicking.",
      'Inhibitor taken before 20 minutes.',
    ],
  },
  {
    id: 203,
    date: new Date('2023-03-07'),
    effect: 'Top Lane Island',
    win: 'red',
    mvp: PlayerName.ElVaux,
    ace: PlayerName.Roland,
    draft: {
      bans: {
        blue: [
          [ChampionName.JarvanIV],
          [ChampionName.Wukong],
          [ChampionName.Aatrox],
          [ChampionName.Blitzcrank],
          [ChampionName.Varus],
        ],
        red: [
          [ChampionName.Warwick],
          [ChampionName.Pyke],
          [ChampionName.Nilah],
          [ChampionName.Mordekaiser],
          [ChampionName.Xayah],
        ],
      },
      picks: {
        blue: [
          ChampionName.Gangplank,
          ChampionName.RekSai,
          ChampionName.Amumu,
          ChampionName.Braum,
          ChampionName.Samira,
        ],
        red: [
          ChampionName.Taliyah,
          ChampionName.Ashe,
          ChampionName.Rengar,
          ChampionName.Jayce,
          ChampionName.Thresh,
        ],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.Draghau,
        players: [
          {
            name: PlayerName.JemLem,
            champion: ChampionName.Amumu,
            role: 'top',
            kills: 1,
            deaths: 6,
            assists: 12,
            cs: 65,
          },
          {
            name: PlayerName.Sharpaim,
            champion: ChampionName.RekSai,
            role: 'jungle',
            kills: 6,
            deaths: 10,
            assists: 3,
            cs: 118,
          },
          {
            name: PlayerName.Draghau,
            champion: ChampionName.Gangplank,
            role: 'mid',
            kills: 4,
            deaths: 6,
            assists: 4,
            cs: 228,
          },
          {
            name: PlayerName.Roland,
            champion: ChampionName.Samira,
            role: 'bot',
            kills: 8,
            deaths: 5,
            assists: 6,
            cs: 252,
          },
          {
            name: PlayerName.RayOfGayshine,
            champion: ChampionName.Braum,
            role: 'support',
            kills: 0,
            deaths: 10,
            assists: 13,
            cs: 35,
          },
        ],
      },
      red: {
        captain: PlayerName.Sewerslvt,
        players: [
          {
            name: PlayerName.Sewerslvt,
            champion: ChampionName.Rengar,
            role: 'top',
            kills: 8,
            deaths: 5,
            assists: 13,
            cs: 125,
          },
          {
            name: PlayerName.ElVaux,
            champion: ChampionName.Taliyah,
            role: 'jungle',
            kills: 4,
            deaths: 1,
            assists: 17,
            cs: 184,
          },
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Jayce,
            role: 'mid',
            kills: 19,
            deaths: 3,
            assists: 13,
            cs: 241,
          },
          {
            name: PlayerName.CureLemonade,
            champion: ChampionName.Ashe,
            role: 'bot',
            kills: 5,
            deaths: 3,
            assists: 12,
            cs: 183,
          },
          {
            name: PlayerName.ThePretender,
            champion: ChampionName.Thresh,
            role: 'support',
            kills: 1,
            deaths: 7,
            assists: 26,
            cs: 31,
          },
        ],
      },
    },
    dragonSoul: 'infernal',
  },
  {
    id: 204,
    date: new Date('2023-03-14'),
    effect: 'Non-Human Smackdown',
    win: 'blue',
    mvp: PlayerName.CureLemonade,
    ace: PlayerName.ThePretender,
    draft: {
      bans: {
        blue: [
          [ChampionName.Yuumi],
          [ChampionName.Ornn],
          [ChampionName.Blitzcrank],
          [ChampionName.Shaco],
          [ChampionName.Volibear],
        ],
        red: [
          [ChampionName.Nocturne],
          [ChampionName.Veigar],
          [ChampionName.Kennen],
          [ChampionName.Rumble],
          [ChampionName.Anivia],
        ],
      },
      picks: {
        blue: [
          ChampionName.Wukong,
          ChampionName.Twitch,
          ChampionName.Rakan,
          ChampionName.AurelionSol,
          ChampionName.Neeko,
        ],
        red: [
          ChampionName.Jax,
          ChampionName.Xayah,
          ChampionName.Bard,
          ChampionName.Poppy,
          ChampionName.Ahri,
        ],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.Roland,
        players: [
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Wukong,
            role: 'top',
            kills: 7,
            deaths: 2,
            assists: 16,
            cs: 196,
          },
          {
            name: PlayerName.Roland,
            champion: ChampionName.AurelionSol,
            role: 'jungle',
            kills: 16,
            deaths: 2,
            assists: 6,
            cs: 215,
          },
          {
            name: PlayerName.CureLemonade,
            champion: ChampionName.Neeko,
            role: 'mid',
            kills: 3,
            deaths: 2,
            assists: 12,
            cs: 197,
          },
          {
            name: PlayerName.Draghau,
            champion: ChampionName.Twitch,
            role: 'bot',
            kills: 5,
            deaths: 4,
            assists: 11,
            cs: 223,
          },
          {
            name: PlayerName.RayOfGayshine,
            champion: ChampionName.Rakan,
            role: 'support',
            kills: 0,
            deaths: 4,
            assists: 18,
            cs: 37,
          },
        ],
      },
      red: {
        captain: PlayerName.ElVaux,
        players: [
          {
            name: PlayerName.Sewerslvt,
            champion: ChampionName.Jax,
            role: 'top',
            kills: 3,
            deaths: 9,
            assists: 0,
            cs: 215,
          },
          {
            name: PlayerName.ElVaux,
            champion: ChampionName.Poppy,
            role: 'jungle',
            kills: 3,
            deaths: 10,
            assists: 3,
            cs: 102,
          },
          {
            name: PlayerName.Taikutsu,
            champion: ChampionName.Ahri,
            role: 'mid',
            kills: 2,
            deaths: 4,
            assists: 3,
            cs: 160,
          },
          {
            name: PlayerName.ThePretender,
            champion: ChampionName.Xayah,
            role: 'bot',
            kills: 5,
            deaths: 5,
            assists: 4,
            cs: 257,
          },
          {
            name: PlayerName.JemLem,
            champion: ChampionName.Bard,
            role: 'support',
            kills: 1,
            deaths: 3,
            assists: 9,
            cs: 22,
          },
        ],
      },
    },
    dragonSoul: 'cloud',
  },
  {
    id: 205,
    date: new Date('2023-03-21'),
    effect: 'Wheel of Fortune?',
    win: 'red',
    mvp: PlayerName.ElVaux,
    ace: PlayerName.Sewerslvt,
    draft: {
      bans: {
        blue: [
          [ChampionName.Blitzcrank],
          [ChampionName.JarvanIV],
          [ChampionName.Jhin],
          [ChampionName.Viktor],
          [ChampionName.Anivia],
        ],
        red: [
          [ChampionName.Warwick],
          [ChampionName.Aatrox],
          [ChampionName.Jax],
          [ChampionName.Xayah],
          [ChampionName.Varus],
        ],
      },
      picks: {
        blue: [
          ChampionName.Pantheon,
          ChampionName.AurelionSol,
          ChampionName.Nautilus,
          ChampionName.Nilah,
          ChampionName.Diana,
        ],
        red: [
          ChampionName.Wukong,
          ChampionName.Sylas,
          ChampionName.Thresh,
          ChampionName.Jinx,
          ChampionName.Shen,
        ],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.CureLemonade,
        players: [
          {
            name: PlayerName.CureLemonade,
            champion: ChampionName.Pantheon,
            role: 'top',
            kills: 1,
            deaths: 9,
            assists: 2,
            cs: 126,
          },
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Diana,
            role: 'jungle',
            kills: 1,
            deaths: 9,
            assists: 5,
            cs: 162,
          },
          {
            name: PlayerName.Sewerslvt,
            champion: ChampionName.AurelionSol,
            role: 'mid',
            kills: 2,
            deaths: 8,
            assists: 3,
            cs: 181,
          },
          {
            name: PlayerName.Sharpaim,
            champion: ChampionName.Nilah,
            role: 'bot',
            kills: 2,
            deaths: 9,
            assists: 3,
            cs: 197,
          },
          {
            name: PlayerName.Roland,
            champion: ChampionName.Nautilus,
            role: 'support',
            kills: 4,
            deaths: 8,
            assists: 2,
            cs: 42,
          },
        ],
      },
      red: {
        captain: PlayerName.ThePretender,
        players: [
          {
            name: PlayerName.ThePretender,
            champion: ChampionName.Shen,
            role: 'top',
            kills: 6,
            deaths: 2,
            assists: 13,
            cs: 178,
          },
          {
            name: PlayerName.ElVaux,
            champion: ChampionName.Wukong,
            role: 'jungle',
            kills: 12,
            deaths: 2,
            assists: 13,
            cs: 199,
          },
          {
            name: PlayerName.Draghau,
            champion: ChampionName.Sylas,
            role: 'mid',
            kills: 8,
            deaths: 3,
            assists: 17,
            cs: 151,
          },
          {
            name: PlayerName.RayOfGayshine,
            champion: ChampionName.Jinx,
            role: 'bot',
            kills: 16,
            deaths: 2,
            assists: 11,
            cs: 181,
          },
          {
            name: PlayerName.Taikutsu,
            champion: ChampionName.Thresh,
            role: 'support',
            kills: 1,
            deaths: 1,
            assists: 26,
            cs: 32,
          },
        ],
      },
    },
    dragonSoul: 'infernal',
    events: ['Dragon survived on 1HP then got stolen'],
  },
];
