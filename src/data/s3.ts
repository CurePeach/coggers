import { ChampionName } from './champions';
import { PlayerName } from './players';
import { ExtraMatchProperties, MatchDto } from './types';

export const matchesS3: (MatchDto & ExtraMatchProperties)[] = [
  {
    id: 301,
    date: new Date('2023-07-04'),
    effect: 'Unique Summoners',
    win: 'red',
    mvp: PlayerName.Draghau,
    ace: PlayerName.summon3r000,
    draft: {
      bans: {
        blue: [
          [ChampionName.Aatrox],
          [ChampionName.Warwick],
          [ChampionName.RekSai],
          [ChampionName.Twitch],
          [ChampionName.Nilah],
        ],
        red: [
          [ChampionName.JarvanIV],
          [ChampionName.Shaco],
          [ChampionName.Malphite],
          [ChampionName.Quinn],
          [ChampionName.Poppy],
        ],
      },
      picks: {
        blue: [
          ChampionName.Xayah,
          ChampionName.Mordekaiser,
          ChampionName.Thresh,
          ChampionName.Veigar,
          ChampionName.Viego,
        ],
        red: [
          ChampionName.Riven,
          ChampionName.Rakan,
          ChampionName.KhaZix,
          ChampionName.Orianna,
          ChampionName.Varus,
        ],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.ThePretender,
        players: [
          {
            name: PlayerName.JemLem,
            champion: ChampionName.Mordekaiser,
            role: 'top',
            kills: 3,
            deaths: 7,
            assists: 9,
            cs: 153,
          },
          {
            name: PlayerName.ElVaux,
            champion: ChampionName.Viego,
            role: 'jungle',
            kills: 3,
            deaths: 11,
            assists: 7,
            cs: 138,
          },
          {
            name: PlayerName.summon3r000,
            champion: ChampionName.Veigar,
            role: 'mid',
            kills: 8,
            deaths: 2,
            assists: 7,
            cs: 193,
          },
          {
            name: PlayerName.CureLemonade,
            champion: ChampionName.Xayah,
            role: 'bot',
            kills: 7,
            deaths: 6,
            assists: 11,
            cs: 218,
          },
          {
            name: PlayerName.ThePretender,
            champion: ChampionName.Thresh,
            role: 'support',
            kills: 1,
            deaths: 11,
            assists: 18,
            cs: 34,
          },
        ],
      },
      red: {
        captain: PlayerName.NightRaven,
        players: [
          {
            name: PlayerName.Roland,
            champion: ChampionName.Riven,
            role: 'top',
            kills: 9,
            deaths: 4,
            assists: 7,
            cs: 280,
          },
          {
            name: PlayerName.Sharpaim,
            champion: ChampionName.KhaZix,
            role: 'jungle',
            kills: 3,
            deaths: 7,
            assists: 13,
            cs: 155,
          },
          {
            name: PlayerName.Draghau,
            champion: ChampionName.Orianna,
            role: 'mid',
            kills: 8,
            deaths: 0,
            assists: 12,
            cs: 236,
          },
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Varus,
            role: 'bot',
            kills: 16,
            deaths: 7,
            assists: 12,
            cs: 213,
          },
          {
            name: PlayerName.RayOfGayshine,
            champion: ChampionName.Rakan,
            role: 'support',
            kills: 1,
            deaths: 5,
            assists: 28,
            cs: 30,
          },
        ],
      },
    },
    duration: 29 * 60 + 53,
    dragonSoul: 'mountain',
    events: [
      "Gordon didn't get his penta",
      'David and Gordon used Barrier while trying to Teleport',
    ],
  },
  {
    id: 302,
    date: new Date('2023-07-11'),
    effect: 'Drafting on a Budget',
    win: 'red',
    mvp: PlayerName.NightRaven,
    ace: PlayerName.ElVaux,
    draft: {
      bans: {
        blue: [
          [ChampionName.Aatrox],
          [ChampionName.Singed],
          [ChampionName.Riven],
          [ChampionName.Varus],
          [ChampionName.Jax],
        ],
        red: [
          [ChampionName.JarvanIV],
          [ChampionName.Mordekaiser],
          [ChampionName.Malphite],
          [ChampionName.Veigar],
          [ChampionName.Sett],
        ],
      },
      picks: {
        blue: [
          ChampionName.Volibear,
          ChampionName.MasterYi,
          ChampionName.Vex,
          ChampionName.Xayah,
          ChampionName.Blitzcrank,
        ],
        red: [
          ChampionName.ChoGath,
          ChampionName.Diana,
          ChampionName.Yasuo,
          ChampionName.KaiSa,
          ChampionName.Milio,
        ],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.summon3r000,
        players: [
          {
            name: PlayerName.ElVaux,
            champion: ChampionName.Volibear,
            role: 'top',
            kills: 13,
            deaths: 9,
            assists: 10,
            cs: 269,
          },
          {
            name: PlayerName.summon3r000,
            champion: ChampionName.MasterYi,
            role: 'jungle',
            kills: 15,
            deaths: 8,
            assists: 11,
            cs: 228,
          },
          {
            name: PlayerName.RayOfGayshine,
            champion: ChampionName.Vex,
            role: 'mid',
            kills: 7,
            deaths: 7,
            assists: 18,
            cs: 158,
          },
          {
            name: PlayerName.CureLemonade,
            champion: ChampionName.Xayah,
            role: 'bot',
            kills: 6,
            deaths: 4,
            assists: 7,
            cs: 277,
          },
          {
            name: PlayerName.JemLem,
            champion: ChampionName.Blitzcrank,
            role: 'support',
            kills: 1,
            deaths: 10,
            assists: 20,
            cs: 37,
          },
        ],
      },
      red: {
        captain: PlayerName.Draghau,
        players: [
          {
            name: PlayerName.Applesmustdie,
            champion: ChampionName.ChoGath,
            role: 'top',
            kills: 6,
            deaths: 6,
            assists: 8,
            cs: 230,
          },
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Diana,
            role: 'jungle',
            kills: 14,
            deaths: 7,
            assists: 11,
            cs: 243,
          },
          {
            name: PlayerName.Roland,
            champion: ChampionName.Yasuo,
            role: 'mid',
            kills: 7,
            deaths: 10,
            assists: 9,
            cs: 318,
          },
          {
            name: PlayerName.Draghau,
            champion: ChampionName.KaiSa,
            role: 'bot',
            kills: 10,
            deaths: 10,
            assists: 14,
            cs: 263,
          },
          {
            name: PlayerName.ThePretender,
            champion: ChampionName.Milio,
            role: 'support',
            kills: 0,
            deaths: 9,
            assists: 23,
            cs: 11,
          },
        ],
      },
    },
    duration: 39 * 60 + 34,
    dragonSoul: 'ocean',
    events: ['James stole my blue -Ian'],
  },
];
