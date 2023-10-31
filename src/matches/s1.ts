import { ChampionName, ExtraMatchProperties, MatchDto, PlayerName } from './types';

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
];
