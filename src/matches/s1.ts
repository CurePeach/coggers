import { ExtraMatchProperties, MatchDto } from './types';
import { PlayerName } from './players';
import { ChampionName, championsStartsWith } from './champions';

export const matchesS1: (MatchDto & ExtraMatchProperties)[] = [
  {
    date: new Date('2022-11-30'),
    effect: 'Class-ism',
    win: 'red',
    mvp: PlayerName.NightRaven,
    ace: PlayerName.JemLem,
    draft: {
      bans: {
        blue: [
          [ChampionName.Aatrox],
          [ChampionName.Jhin],
          [ChampionName.Gangplank],
          [ChampionName.Tristana],
          [ChampionName.Kennen],
        ],
        red: [
          [ChampionName.Mordekaiser],
          [ChampionName.Viktor],
          [ChampionName.Syndra],
          [ChampionName.Lux],
          [ChampionName.Lissandra],
        ],
      },
      picks: {
        blue: [ChampionName.Bard, ChampionName.Taliyah, ChampionName.Amumu, ChampionName.Evelynn],
        red: [ChampionName.Aphelios, ChampionName.Vayne, ChampionName.Graves, ChampionName.Ashe],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.ThePretender,
        players: [
          {
            name: PlayerName.JemLem,
            champion: ChampionName.Bard,
            role: 'top',
            kills: 4,
            deaths: 6,
            assists: 7,
            cs: 136,
          },
          {
            name: PlayerName.ThePretender,
            champion: ChampionName.Evelynn,
            role: 'mid',
            kills: 11,
            deaths: 7,
            assists: 4,
            cs: 165,
          },
          {
            name: PlayerName.CureLemonade,
            champion: ChampionName.Taliyah,
            role: 'bot',
            kills: 1,
            deaths: 7,
            assists: 6,
            cs: 259,
          },
          {
            name: PlayerName.RayOfGayshine,
            champion: ChampionName.Amumu,
            role: 'support',
            kills: 8,
            deaths: 6,
            assists: 3,
            cs: 80,
          },
        ],
      },
      red: {
        captain: PlayerName.Draghau,
        players: [
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Graves,
            role: 'top',
            kills: 6,
            deaths: 6,
            assists: 6,
            cs: 295,
          },
          {
            name: PlayerName.Taikutsu,
            champion: ChampionName.Aphelios,
            role: 'mid',
            kills: 7,
            deaths: 3,
            assists: 3,
            cs: 228,
          },
          {
            name: PlayerName.Draghau,
            champion: ChampionName.Vayne,
            role: 'bot',
            kills: 13,
            deaths: 4,
            assists: 6,
            cs: 261,
          },
          {
            name: PlayerName.Sewerslvt,
            champion: ChampionName.Ashe,
            role: 'support',
            kills: 0,
            deaths: 11,
            assists: 14,
            cs: 295,
          },
        ],
      },
    },
    dragonSoul: 'ocean',
  },
  {
    date: new Date('2022-12-7'),
    effect: 'Character Bans',
    win: 'red',
    mvp: PlayerName.Sewerslvt,
    ace: PlayerName.Sharpaim,
    draft: {
      bans: {
        blue: [
          championsStartsWith('K'),
          championsStartsWith('V'),
          championsStartsWith('S'),
          championsStartsWith('N'),
          championsStartsWith('J'),
        ],
        red: [
          championsStartsWith('A'),
          championsStartsWith('G'),
          championsStartsWith('T'),
          championsStartsWith('E'),
          championsStartsWith('L'),
        ],
      },
      picks: {
        blue: [ChampionName.Warwick, ChampionName.Jax, ChampionName.Ekko, ChampionName.Xayah],
        red: [ChampionName.Wukong, ChampionName.Ornn, ChampionName.Lux, ChampionName.Pantheon],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.NightRaven,
        players: [
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Jax,
            role: 'top',
            kills: 4,
            deaths: 6,
            assists: 8,
            cs: 219,
          },
          {
            name: PlayerName.Sharpaim,
            champion: ChampionName.Warwick,
            role: 'jungle',
            kills: 11,
            deaths: 8,
            assists: 8,
            cs: 142,
          },
          {
            name: PlayerName.Taikutsu,
            champion: ChampionName.Ekko,
            role: 'mid',
            kills: 8,
            deaths: 7,
            assists: 6,
            cs: 156,
          },
          {
            name: PlayerName.Draghau,
            champion: ChampionName.Xayah,
            role: 'bot',
            kills: 3,
            deaths: 8,
            assists: 5,
            cs: 232,
          },
        ],
      },
      red: {
        captain: PlayerName.JemLem,
        players: [
          {
            name: PlayerName.JemLem,
            champion: ChampionName.Ornn,
            role: 'top',
            kills: 6,
            deaths: 4,
            assists: 10,
            cs: 177,
          },
          {
            name: PlayerName.ElVaux,
            champion: ChampionName.Wukong,
            role: 'jungle',
            kills: 7,
            deaths: 6,
            assists: 11,
            cs: 203,
          },
          {
            name: PlayerName.ThePretender,
            champion: ChampionName.Lux,
            role: 'mid',
            kills: 5,
            deaths: 7,
            assists: 12,
            cs: 215,
          },
          {
            name: PlayerName.Sewerslvt,
            champion: ChampionName.Pantheon,
            role: 'bot',
            kills: 10,
            deaths: 9,
            assists: 6,
            cs: 157,
          },
        ],
      },
    },
    dragonSoul: 'chemtech',
  },
  {
    date: new Date('2022-12-7'),
    effect: 'One Region',
    win: 'red',
    mvp: PlayerName.RayOfGayshine,
    ace: PlayerName.NightRaven,
    draft: {
      bans: {
        blue: [
          [ChampionName.Warwick],
          [ChampionName.Mordekaiser],
          [ChampionName.Nami],
          [ChampionName.Sett],
          [ChampionName.Rakan],
        ],
        red: [
          [ChampionName.Aatrox],
          [ChampionName.Wukong],
          [ChampionName.Poppy],
          [ChampionName.JarvanIV],
          [ChampionName.Fiora],
        ],
      },
      picks: {
        blue: [
          ChampionName.Sylas,
          ChampionName.Morgana,
          ChampionName.Vayne,
          ChampionName.Shyvana,
          ChampionName.Garen,
        ],
        red: [
          ChampionName.Yasuo,
          ChampionName.Yone,
          ChampionName.Kayn,
          ChampionName.Akali,
          ChampionName.Shen,
        ],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.Sewerslvt,
        players: [
          {
            name: PlayerName.JemLem,
            champion: ChampionName.Garen,
            role: 'top',
            kills: 3,
            deaths: 7,
            assists: 1,
            cs: 191,
          },
          {
            name: PlayerName.ElVaux,
            champion: ChampionName.Shyvana,
            role: 'jungle',
            kills: 0,
            deaths: 8,
            assists: 2,
            cs: 182,
          },
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Sylas,
            role: 'mid',
            kills: 3,
            deaths: 7,
            assists: 2,
            cs: 178,
          },
          {
            name: PlayerName.Sewerslvt,
            champion: ChampionName.Vayne,
            role: 'bot',
            kills: 0,
            deaths: 9,
            assists: 2,
            cs: 200,
          },
          {
            name: PlayerName.CureLemonade,
            champion: ChampionName.Morgana,
            role: 'support',
            kills: 1,
            deaths: 8,
            assists: 1,
            cs: 19,
          },
        ],
      },
      red: {
        captain: PlayerName.Sharpaim,
        players: [
          {
            name: PlayerName.ThePretender,
            champion: ChampionName.Yone,
            role: 'top',
            kills: 14,
            deaths: 3,
            assists: 6,
            cs: 261,
          },
          {
            name: PlayerName.Sharpaim,
            champion: ChampionName.Kayn,
            role: 'jungle',
            kills: 7,
            deaths: 0,
            assists: 18,
            cs: 183,
          },
          {
            name: PlayerName.Taikutsu,
            champion: ChampionName.Akali,
            role: 'mid',
            kills: 8,
            deaths: 3,
            assists: 10,
            cs: 153,
          },
          {
            name: PlayerName.Draghau,
            champion: ChampionName.Yasuo,
            role: 'bot',
            kills: 9,
            deaths: 1,
            assists: 10,
            cs: 306,
          },
          {
            name: PlayerName.RayOfGayshine,
            champion: ChampionName.Shen,
            role: 'support',
            kills: 1,
            deaths: 0,
            assists: 19,
            cs: 40,
          },
        ],
      },
    },
    dragonSoul: 'hextech',
    events: ['Draghau got a pentakill at Level 1!'],
  },
  {
    date: new Date('2022-12-14'),
    effect: 'Only AD',
    win: 'red',
    mvp: PlayerName.Taikutsu,
    ace: PlayerName.CureLemonade,
    draft: {
      bans: {
        blue: [
          [ChampionName.Aatrox],
          [ChampionName.Riven],
          [ChampionName.Graves],
          [ChampionName.Hecarim],
          [ChampionName.Vayne],
        ],
        red: [
          [ChampionName.Volibear],
          [ChampionName.Pyke],
          [ChampionName.Gangplank],
          [ChampionName.KogMaw],
          [ChampionName.Varus],
        ],
      },
      picks: {
        blue: [
          ChampionName.Udyr,
          ChampionName.Sett,
          ChampionName.Gnar,
          ChampionName.Nilah,
          ChampionName.KaiSa,
        ],
        red: [
          ChampionName.Pantheon,
          ChampionName.Fiora,
          ChampionName.Warwick,
          ChampionName.Jax,
          ChampionName.Samira,
        ],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.RayOfGayshine,
        players: [
          {
            name: PlayerName.JemLem,
            champion: ChampionName.Gnar,
            role: 'top',
            kills: 1,
            deaths: 7,
            assists: 6,
            cs: 202,
          },
          {
            name: PlayerName.ElVaux,
            champion: ChampionName.Udyr,
            role: 'jungle',
            kills: 1,
            deaths: 15,
            assists: 4,
            cs: 39,
          },
          {
            name: PlayerName.CureLemonade,
            champion: ChampionName.KaiSa,
            role: 'mid',
            kills: 10,
            deaths: 6,
            assists: 3,
            cs: 200,
          },
          {
            name: PlayerName.Draghau,
            champion: ChampionName.Nilah,
            role: 'bot',
            kills: 5,
            deaths: 8,
            assists: 11,
            cs: 292,
          },
          {
            name: PlayerName.RayOfGayshine,
            champion: ChampionName.Sett,
            role: 'support',
            kills: 5,
            deaths: 9,
            assists: 9,
            cs: 39,
          },
        ],
      },
      red: {
        captain: PlayerName.NightRaven,
        players: [
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Jax,
            role: 'top',
            kills: 13,
            deaths: 4,
            assists: 10,
            cs: 186,
          },
          {
            name: PlayerName.Sharpaim,
            champion: ChampionName.Warwick,
            role: 'jungle',
            kills: 8,
            deaths: 3,
            assists: 10,
            cs: 187,
          },
          {
            name: PlayerName.Sewerslvt,
            champion: ChampionName.Fiora,
            role: 'mid',
            kills: 7,
            deaths: 3,
            assists: 3,
            cs: 225,
          },
          {
            name: PlayerName.Roland,
            champion: ChampionName.Samira,
            role: 'bot',
            kills: 6,
            deaths: 6,
            assists: 14,
            cs: 243,
          },
          {
            name: PlayerName.Taikutsu,
            champion: ChampionName.Pantheon,
            role: 'support',
            kills: 11,
            deaths: 6,
            assists: 9,
            cs: 40,
          },
        ],
      },
    },
    dragonSoul: 'hextech',
  },
  {
    date: new Date('2023-1-4'),
    effect: 'Infinity Gauntlet',
    win: 'red',
    mvp: PlayerName.Sharpaim,
    ace: PlayerName.Draghau,
    draft: {
      bans: {
        blue: [
          [ChampionName.Aatrox],
          [ChampionName.Warwick],
          [ChampionName.Fiora],
          [ChampionName.Bard],
          [ChampionName.Blitzcrank],
        ],
        red: [
          [ChampionName.Pyke],
          [ChampionName.Mordekaiser],
          [ChampionName.MasterYi],
          [ChampionName.Lulu],
          [ChampionName.RenataGlasc],
        ],
      },
      picks: {
        blue: [
          ChampionName.KogMaw,
          ChampionName.Nasus,
          ChampionName.Akali,
          ChampionName.Shen,
          ChampionName.Poppy,
        ],
        red: [
          ChampionName.Varus,
          ChampionName.Nocturne,
          ChampionName.Camille,
          ChampionName.Thresh,
          ChampionName.Taliyah,
        ],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.Taikutsu,
        players: [
          {
            name: PlayerName.RayOfGayshine,
            champion: ChampionName.Shen,
            role: 'top',
            kills: 5,
            deaths: 8,
            assists: 13,
            cs: 204,
          },
          {
            name: PlayerName.summon3r003,
            champion: ChampionName.Poppy,
            role: 'jungle',
            kills: 0,
            deaths: 8,
            assists: 16,
            cs: 165,
          },
          {
            name: PlayerName.Taikutsu,
            champion: ChampionName.Akali,
            role: 'mid',
            kills: 13,
            deaths: 8,
            assists: 5,
            cs: 204,
          },
          {
            name: PlayerName.Draghau,
            champion: ChampionName.KogMaw,
            role: 'bot',
            kills: 11,
            deaths: 9,
            assists: 11,
            cs: 271,
          },
          {
            name: PlayerName.summon3r000,
            champion: ChampionName.Nasus,
            role: 'support',
            kills: 6,
            deaths: 6,
            assists: 17,
            cs: 51,
          },
        ],
      },
      red: {
        captain: PlayerName.CureLemonade,
        players: [
          {
            name: PlayerName.Sewerslvt,
            champion: ChampionName.Camille,
            role: 'top',
            kills: 4,
            deaths: 8,
            assists: 16,
            cs: 241,
          },
          {
            name: PlayerName.Sharpaim,
            champion: ChampionName.Nocturne,
            role: 'jungle',
            kills: 8,
            deaths: 8,
            assists: 20,
            cs: 204,
          },
          {
            name: PlayerName.CureLemonade,
            champion: ChampionName.Taliyah,
            role: 'mid',
            kills: 10,
            deaths: 5,
            assists: 16,
            cs: 215,
          },
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Varus,
            role: 'bot',
            kills: 15,
            deaths: 6,
            assists: 15,
            cs: 253,
          },
          {
            name: PlayerName.JemLem,
            champion: ChampionName.Thresh,
            role: 'support',
            kills: 2,
            deaths: 8,
            assists: 21,
            cs: 16,
          },
        ],
      },
    },
    dragonSoul: 'chemtech',
  },
  {
    date: new Date('2023-1-11'),
    effect: 'Spelling Bee',
    win: 'blue',
    mvp: PlayerName.ThePretender,
    ace: PlayerName.NightRaven,
    draft: {
      bans: {
        blue: [
          [ChampionName.Warwick],
          [ChampionName.Aatrox],
          [ChampionName.Nocturne],
          [ChampionName.KSante],
          [ChampionName.Sejuani],
        ],
        red: [
          [ChampionName.Riven],
          [ChampionName.Ashe],
          [ChampionName.Varus],
          [ChampionName.Ezreal],
          [ChampionName.Nami],
        ],
      },
      picks: {
        blue: [
          ChampionName.Jax,
          ChampionName.Amumu,
          ChampionName.Mordekaiser,
          ChampionName.Ekko,
          ChampionName.Samira,
        ],
        red: [
          ChampionName.Jhin,
          ChampionName.Akali,
          ChampionName.Soraka,
          ChampionName.Ornn,
          ChampionName.Nasus,
        ],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.Draghau,
        players: [
          {
            name: PlayerName.RayOfGayshine,
            champion: ChampionName.Mordekaiser,
            role: 'top',
            kills: 4,
            deaths: 2,
            assists: 0,
            cs: 192,
          },
          {
            name: PlayerName.Roland,
            champion: ChampionName.Jax,
            role: 'jungle',
            kills: 7,
            deaths: 0,
            assists: 2,
            cs: 189,
          },
          {
            name: PlayerName.ThePretender,
            champion: ChampionName.Ekko,
            role: 'mid',
            kills: 10,
            deaths: 2,
            assists: 6,
            cs: 143,
          },
          {
            name: PlayerName.Draghau,
            champion: ChampionName.Samira,
            role: 'bot',
            kills: 5,
            deaths: 3,
            assists: 9,
            cs: 177,
          },
          {
            name: PlayerName.JemLem,
            champion: ChampionName.Amumu,
            role: 'support',
            kills: 1,
            deaths: 3,
            assists: 12,
            cs: 36,
          },
        ],
      },
      red: {
        captain: PlayerName.Sharpaim,
        players: [
          {
            name: PlayerName.summon3r000,
            champion: ChampionName.Soraka,
            role: 'top',
            kills: 1,
            deaths: 3,
            assists: 8,
            cs: 110,
          },
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Nasus,
            role: 'jungle',
            kills: 5,
            deaths: 6,
            assists: 4,
            cs: 152,
          },
          {
            name: PlayerName.Taikutsu,
            champion: ChampionName.Akali,
            role: 'mid',
            kills: 2,
            deaths: 6,
            assists: 4,
            cs: 132,
          },
          {
            name: PlayerName.CureLemonade,
            champion: ChampionName.Jhin,
            role: 'bot',
            kills: 2,
            deaths: 7,
            assists: 2,
            cs: 127,
          },
          {
            name: PlayerName.Sharpaim,
            champion: ChampionName.Ornn,
            role: 'support',
            kills: 0,
            deaths: 5,
            assists: 7,
            cs: 37,
          },
        ],
      },
    },
    dragonSoul: 'cloud',
    events: ['First win for blue side!'],
  },
];
