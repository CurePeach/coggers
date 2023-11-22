import { ChampionName } from './champions';
import { PlayerName } from './players';
import { ExtraMatchProperties, MatchDto, getDuration } from './types';

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
    duration: getDuration(29, 53),
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
    duration: getDuration(39, 34),
    dragonSoul: 'ocean',
    events: ['James stole my blue -Ian'],
  },
  {
    id: 303,
    date: new Date('2023-07-18'),
    effect: 'We Protec',
    win: 'blue',
    mvp: PlayerName.JemLem,
    ace: PlayerName.Applesmustdie,
    draft: {
      bans: {
        blue: [
          [ChampionName.Milio],
          [ChampionName.Orianna],
          [ChampionName.Ivern],
          [ChampionName.Galio],
          [ChampionName.Annie],
        ],
        red: [
          [ChampionName.KSante],
          [ChampionName.Fiora],
          [ChampionName.Senna],
          [ChampionName.TahmKench],
          [ChampionName.Bard],
        ],
      },
      picks: {
        blue: [
          ChampionName.Nilah,
          ChampionName.Soraka,
          ChampionName.Taric,
          ChampionName.Lux,
          ChampionName.Zilean,
        ],
        red: [
          ChampionName.Shen,
          ChampionName.LeeSin,
          ChampionName.Seraphine,
          ChampionName.Thresh,
          ChampionName.Lulu,
        ],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.NightRaven,
        players: [
          {
            name: PlayerName.summon3r000,
            champion: ChampionName.Soraka,
            role: 'top',
            kills: 1,
            deaths: 3,
            assists: 8,
            cs: 127,
          },
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Taric,
            role: 'jungle',
            kills: 3,
            deaths: 3,
            assists: 8,
            cs: 163,
          },
          {
            name: PlayerName.Roland,
            champion: ChampionName.Zilean,
            role: 'mid',
            kills: 4,
            deaths: 1,
            assists: 5,
            cs: 215,
          },
          {
            name: PlayerName.Draghau,
            champion: ChampionName.Nilah,
            role: 'bot',
            kills: 12,
            deaths: 1,
            assists: 2,
            cs: 225,
          },
          {
            name: PlayerName.JemLem,
            champion: ChampionName.Lux,
            role: 'support',
            kills: 0,
            deaths: 1,
            assists: 11,
            cs: 9,
          },
        ],
      },
      red: {
        captain: PlayerName.ElVaux,
        players: [
          {
            name: PlayerName.Applesmustdie,
            champion: ChampionName.Shen,
            role: 'top',
            kills: 3,
            deaths: 3,
            assists: 4,
            cs: 116,
          },
          {
            name: PlayerName.ElVaux,
            champion: ChampionName.LeeSin,
            role: 'jungle',
            kills: 4,
            deaths: 6,
            assists: 4,
            cs: 159,
          },
          {
            name: PlayerName.ThePretender,
            champion: ChampionName.Lulu,
            role: 'mid',
            kills: 1,
            deaths: 6,
            assists: 3,
            cs: 163,
          },
          {
            name: PlayerName.CureLemonade,
            champion: ChampionName.Seraphine,
            role: 'bot',
            kills: 1,
            deaths: 3,
            assists: 1,
            cs: 165,
          },
          {
            name: PlayerName.Boundless,
            champion: ChampionName.Thresh,
            role: 'support',
            kills: 0,
            deaths: 3,
            assists: 3,
            cs: 39,
          },
        ],
      },
    },
    duration: getDuration(27, 29),
    dragonSoul: 'cloud',
    events: ['Roland messes up runes twice', 'WFH Diff'],
  },
  {
    id: 304,
    date: new Date('2023-07-25'),
    effect: 'Only AP',
    win: 'blue',
    mvp: PlayerName.Roland,
    ace: PlayerName.Draghau,
    draft: {
      bans: {
        blue: [
          [ChampionName.Twitch],
          [ChampionName.Varus],
          [ChampionName.Vladimir],
          [ChampionName.Evelynn],
          [ChampionName.Fiddlesticks],
        ],
        red: [
          [ChampionName.Shaco],
          [ChampionName.Veigar],
          [ChampionName.Ekko],
          [ChampionName.Blitzcrank],
          [ChampionName.Bard],
        ],
      },
      picks: {
        blue: [
          ChampionName.Kassadin,
          ChampionName.Volibear,
          ChampionName.NunuWillump,
          ChampionName.Seraphine,
          ChampionName.Orianna,
        ],
        red: [
          ChampionName.Mordekaiser,
          ChampionName.Swain,
          ChampionName.KogMaw,
          ChampionName.Karthus,
          ChampionName.Fizz,
        ],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.JemLem,
        players: [
          {
            name: PlayerName.ElVaux,
            champion: ChampionName.Volibear,
            role: 'top',
            kills: 4,
            deaths: 8,
            assists: 2,
            cs: 201,
          },
          {
            name: PlayerName.JemLem,
            champion: ChampionName.NunuWillump,
            role: 'jungle',
            kills: 5,
            deaths: 4,
            assists: 20,
            cs: 181,
          },
          {
            name: PlayerName.Roland,
            champion: ChampionName.Kassadin,
            role: 'mid',
            kills: 28,
            deaths: 6,
            assists: 6,
            cs: 220,
          },
          {
            name: PlayerName.Boundless,
            champion: ChampionName.Orianna,
            role: 'bot',
            kills: 7,
            deaths: 4,
            assists: 17,
            cs: 168,
          },
          {
            name: PlayerName.summon3r000,
            champion: ChampionName.Seraphine,
            role: 'support',
            kills: 0,
            deaths: 9,
            assists: 26,
            cs: 27,
          },
        ],
      },
      red: {
        captain: PlayerName.CureLemonade,
        players: [
          {
            name: PlayerName.RayOfGayshine,
            champion: ChampionName.Mordekaiser,
            role: 'top',
            kills: 4,
            deaths: 6,
            assists: 3,
            cs: 197,
          },
          {
            name: PlayerName.ThePretender,
            champion: ChampionName.Karthus,
            role: 'jungle',
            kills: 4,
            deaths: 12,
            assists: 10,
            cs: 195,
          },
          {
            name: PlayerName.Draghau,
            champion: ChampionName.Fizz,
            role: 'mid',
            kills: 14,
            deaths: 13,
            assists: 5,
            cs: 179,
          },
          {
            name: PlayerName.CureLemonade,
            champion: ChampionName.KogMaw,
            role: 'bot',
            kills: 4,
            deaths: 6,
            assists: 4,
            cs: 171,
          },
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Swain,
            role: 'support',
            kills: 4,
            deaths: 8,
            assists: 7,
            cs: 52,
          },
        ],
      },
    },
    duration: getDuration(31, 26),
    dragonSoul: 'ocean',
    events: ['Roland penta'],
  },
  {
    id: 305,
    date: new Date('2023-08-01'),
    effect: 'You Have No MANA Abyss Mode',
    win: 'red',
    mvp: PlayerName.Boundless,
    ace: PlayerName.summon3r000,
    draft: {
      bans: {
        blue: [
          [ChampionName.Riven],
          [ChampionName.Sett],
          [ChampionName.Aatrox],
          [ChampionName.Renekton],
          [ChampionName.Zed],
        ],
        red: [
          [ChampionName.Katarina],
          [ChampionName.Vladimir],
          [ChampionName.Kennen],
          [ChampionName.Kled],
          [ChampionName.Akali],
        ],
      },
      picks: {
        blue: [ChampionName.Viego, ChampionName.Shen, ChampionName.Zac, ChampionName.Tryndamere],
        red: [
          ChampionName.Rumble,
          ChampionName.Mordekaiser,
          ChampionName.Garen,
          ChampionName.Shyvana,
        ],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.Draghau,
        players: [
          {
            name: PlayerName.Draghau,
            champion: ChampionName.Viego,
            role: 'aram',
            kills: 28,
            deaths: 9,
            assists: 16,
            cs: 89,
          },
          {
            name: PlayerName.ElVaux,
            champion: ChampionName.Tryndamere,
            role: 'aram',
            kills: 11,
            deaths: 11,
            assists: 21,
            cs: 87,
          },
          {
            name: PlayerName.summon3r000,
            champion: ChampionName.Shen,
            role: 'aram',
            kills: 4,
            deaths: 9,
            assists: 40,
            cs: 10,
          },
          {
            name: PlayerName.CureLemonade,
            champion: ChampionName.Zac,
            role: 'aram',
            kills: 5,
            deaths: 9,
            assists: 27,
            cs: 19,
          },
        ],
      },
      red: {
        captain: PlayerName.Roland,
        players: [
          {
            name: PlayerName.Roland,
            champion: ChampionName.Shyvana,
            role: 'aram',
            kills: 8,
            deaths: 13,
            assists: 22,
            cs: 55,
          },
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Rumble,
            role: 'aram',
            kills: 5,
            deaths: 10,
            assists: 26,
            cs: 38,
          },
          {
            name: PlayerName.Boundless,
            champion: ChampionName.Garen,
            role: 'aram',
            kills: 18,
            deaths: 5,
            assists: 12,
            cs: 101,
          },
          {
            name: PlayerName.JemLem,
            champion: ChampionName.Mordekaiser,
            role: 'aram',
            kills: 7,
            deaths: 10,
            assists: 23,
            cs: 25,
          },
        ],
      },
    },
    duration: getDuration(17, 27),
  },
  {
    id: 306,
    date: new Date('2023-08-08'),
    effect: 'Whel of Fortune?',
    win: 'blue',
    mvp: PlayerName.ElVaux,
    ace: PlayerName.Draghau,
    draft: {
      bans: {
        blue: [
          [ChampionName.Aatrox],
          [ChampionName.Gangplank],
          [ChampionName.Orianna],
          [ChampionName.Jax],
          [ChampionName.Garen],
        ],
        red: [
          [ChampionName.JarvanIV],
          [ChampionName.Wukong],
          [ChampionName.Riven],
          [ChampionName.KaiSa],
          [ChampionName.MissFortune],
        ],
      },
      picks: {
        blue: [
          ChampionName.Malphite,
          ChampionName.Pantheon,
          ChampionName.Diana,
          ChampionName.Ashe,
          ChampionName.Kassadin,
        ],
        red: [
          ChampionName.Xayah,
          ChampionName.Rakan,
          ChampionName.Zac,
          ChampionName.Syndra,
          ChampionName.Ornn,
        ],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.summon3r000,
        players: [
          {
            name: PlayerName.Roland,
            champion: ChampionName.Malphite,
            role: 'top',
            kills: 9,
            deaths: 3,
            assists: 16,
            cs: 188,
          },
          {
            name: PlayerName.ElVaux,
            champion: ChampionName.Diana,
            role: 'jungle',
            kills: 9,
            deaths: 3,
            assists: 11,
            cs: 246,
          },
          {
            name: PlayerName.NVRPY,
            champion: ChampionName.Kassadin,
            role: 'mid',
            kills: 4,
            deaths: 3,
            assists: 8,
            cs: 196,
          },
          {
            name: PlayerName.Sewerslvt,
            champion: ChampionName.Ashe,
            role: 'bot',
            kills: 5,
            deaths: 4,
            assists: 9,
            cs: 188,
          },
          {
            name: PlayerName.summon3r000,
            champion: ChampionName.Pantheon,
            role: 'support',
            kills: 4,
            deaths: 7,
            assists: 13,
            cs: 41,
          },
        ],
      },
      red: {
        captain: PlayerName.Boundless,
        players: [
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Ornn,
            role: 'top',
            kills: 5,
            deaths: 4,
            assists: 7,
            cs: 240,
          },
          {
            name: PlayerName.CureLemonade,
            champion: ChampionName.Zac,
            role: 'jungle',
            kills: 1,
            deaths: 9,
            assists: 9,
            cs: 83,
          },
          {
            name: PlayerName.Boundless,
            champion: ChampionName.Syndra,
            role: 'mid',
            kills: 3,
            deaths: 6,
            assists: 4,
            cs: 215,
          },
          {
            name: PlayerName.JemLem,
            champion: ChampionName.Xayah,
            role: 'bot',
            kills: 9,
            deaths: 8,
            assists: 4,
            cs: 171,
          },
          {
            name: PlayerName.Draghau,
            champion: ChampionName.Rakan,
            role: 'support',
            kills: 2,
            deaths: 4,
            assists: 14,
            cs: 30,
          },
        ],
      },
    },
    duration: getDuration(28, 22),
    dragonSoul: 'chemtech',
    events: ["summon3r000 flash W'd onto a minion"],
  },
  {
    id: 307,
    date: new Date('2023-08-15'),
    effect: 'Spelling Bee',
    win: 'blue',
    mvp: PlayerName.JemLem,
    ace: PlayerName.NightRaven,
    draft: {
      bans: {
        blue: [
          [ChampionName.Diana],
          [ChampionName.Illaoi],
          [ChampionName.Zac],
          [ChampionName.Zyra],
          [ChampionName.Yorick],
        ],
        red: [
          [ChampionName.DrMundo],
          [ChampionName.Udyr],
          [ChampionName.Malphite],
          [ChampionName.Milio],
          [ChampionName.Yone],
        ],
      },
      picks: {
        blue: [
          ChampionName.Draven,
          ChampionName.Urgot,
          ChampionName.MasterYi,
          ChampionName.Morgana,
          ChampionName.Yuumi,
        ],
        red: [
          ChampionName.Darius,
          ChampionName.Irelia,
          ChampionName.Zeri,
          ChampionName.Zilean,
          ChampionName.Yasuo,
        ],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.Draghau,
        players: [
          {
            name: PlayerName.Roland,
            champion: ChampionName.Urgot,
            role: 'top',
            kills: 2,
            deaths: 8,
            assists: 9,
            cs: 162,
          },
          {
            name: PlayerName.summon3r000,
            champion: ChampionName.MasterYi,
            role: 'jungle',
            kills: 14,
            deaths: 3,
            assists: 7,
            cs: 134,
          },
          {
            name: PlayerName.ThePretender,
            champion: ChampionName.Morgana,
            role: 'mid',
            kills: 8,
            deaths: 1,
            assists: 10,
            cs: 162,
          },
          {
            name: PlayerName.Draghau,
            champion: ChampionName.Draven,
            role: 'bot',
            kills: 6,
            deaths: 0,
            assists: 7,
            cs: 217,
          },
          {
            name: PlayerName.JemLem,
            champion: ChampionName.Yuumi,
            role: 'support',
            kills: 0,
            deaths: 0,
            assists: 17,
            cs: 3,
          },
        ],
      },
      red: {
        captain: PlayerName.ElVaux,
        players: [
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Irelia,
            role: 'top',
            kills: 8,
            deaths: 5,
            assists: 1,
            cs: 178,
          },
          {
            name: PlayerName.Boundless,
            champion: ChampionName.Darius,
            role: 'jungle',
            kills: 2,
            deaths: 6,
            assists: 3,
            cs: 149,
          },
          {
            name: PlayerName.RayOfGayshine,
            champion: ChampionName.Yasuo,
            role: 'mid',
            kills: 2,
            deaths: 8,
            assists: 2,
            cs: 149,
          },
          {
            name: PlayerName.CureLemonade,
            champion: ChampionName.Zeri,
            role: 'bot',
            kills: 0,
            deaths: 4,
            assists: 1,
            cs: 149,
          },
          {
            name: PlayerName.ElVaux,
            champion: ChampionName.Zilean,
            role: 'support',
            kills: 0,
            deaths: 7,
            assists: 2,
            cs: 37,
          },
        ],
      },
    },
    duration: getDuration(24, 57),
    dragonSoul: 'ocean',
  },
  {
    id: 308,
    date: new Date('2023-08-22'),
    effect: 'Class-ism Abyss Mode',
    win: 'red',
    mvp: PlayerName.Draghau,
    ace: PlayerName.Roland,
    draft: {
      bans: {
        blue: [
          [ChampionName.Ornn],
          [ChampionName.Malphite],
          [ChampionName.Wukong],
          [ChampionName.Lillia],
          [ChampionName.Gwen],
        ],
        red: [
          [ChampionName.Aatrox],
          [ChampionName.Riven],
          [ChampionName.MasterYi],
          [ChampionName.Kayle],
          [ChampionName.Fizz],
        ],
      },
      picks: {
        blue: [
          ChampionName.Viego,
          ChampionName.Jayce,
          ChampionName.Rammus,
          ChampionName.Mordekaiser,
        ],
        red: [
          ChampionName.Diana,
          ChampionName.JarvanIV,
          ChampionName.Gangplank,
          ChampionName.NunuWillump,
        ],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.NightRaven,
        players: [
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Jayce,
            role: 'aram',
            kills: 5,
            deaths: 6,
            assists: 13,
            cs: 27,
          },
          {
            name: PlayerName.summon3r000,
            champion: ChampionName.Rammus,
            role: 'aram',
            kills: 1,
            deaths: 6,
            assists: 10,
            cs: 7,
          },
          {
            name: PlayerName.Roland,
            champion: ChampionName.Viego,
            role: 'aram',
            kills: 11,
            deaths: 7,
            assists: 2,
            cs: 45,
          },
          {
            name: PlayerName.Boundless,
            champion: ChampionName.Mordekaiser,
            role: 'aram',
            kills: 3,
            deaths: 7,
            assists: 3,
            cs: 32,
          },
        ],
      },
      red: {
        captain: PlayerName.JemLem,
        players: [
          {
            name: PlayerName.JemLem,
            champion: ChampionName.NunuWillump,
            role: 'aram',
            kills: 7,
            deaths: 4,
            assists: 18,
            cs: 16,
          },
          {
            name: PlayerName.Draghau,
            champion: ChampionName.Gangplank,
            role: 'aram',
            kills: 8,
            deaths: 6,
            assists: 10,
            cs: 87,
          },
          {
            name: PlayerName.CureLemonade,
            champion: ChampionName.Diana,
            role: 'aram',
            kills: 6,
            deaths: 4,
            assists: 13,
            cs: 27,
          },
          {
            name: PlayerName.ElVaux,
            champion: ChampionName.JarvanIV,
            role: 'aram',
            kills: 5,
            deaths: 6,
            assists: 18,
            cs: 22,
          },
        ],
      },
    },
    duration: getDuration(12, 43),
  },
  {
    id: 309,
    date: new Date('2023-08-29'),
    effect: 'Unsealed Pandemonium',
    win: 'blue',
    mvp: PlayerName.CureLemonade,
    ace: PlayerName.JemLem,
    draft: {
      bans: {
        blue: [
          [ChampionName.JarvanIV],
          [ChampionName.Pyke],
          [ChampionName.Soraka],
          [ChampionName.Ezreal],
          [ChampionName.Volibear],
        ],
        red: [
          [ChampionName.Riven],
          [ChampionName.Aatrox],
          [ChampionName.Lissandra],
          [ChampionName.Jax],
          [ChampionName.Shyvana],
        ],
      },
      picks: {
        blue: [
          ChampionName.Wukong,
          ChampionName.Seraphine,
          ChampionName.Leona,
          ChampionName.Kassadin,
          ChampionName.Jayce,
        ],
        red: [
          ChampionName.Taric,
          ChampionName.MasterYi,
          ChampionName.Gangplank,
          ChampionName.Gnar,
          ChampionName.Shaco,
        ],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.Roland,
        players: [
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Jayce,
            role: 'top',
            kills: 5,
            deaths: 5,
            assists: 6,
            cs: 227,
          },
          {
            name: PlayerName.Roland,
            champion: ChampionName.Wukong,
            role: 'jungle',
            kills: 4,
            deaths: 4,
            assists: 7,
            cs: 192,
          },
          {
            name: PlayerName.Sewerslvt,
            champion: ChampionName.Kassadin,
            role: 'mid',
            kills: 6,
            deaths: 2,
            assists: 5,
            cs: 246,
          },
          {
            name: PlayerName.CureLemonade,
            champion: ChampionName.Seraphine,
            role: 'bot',
            kills: 13,
            deaths: 2,
            assists: 11,
            cs: 199,
          },
          {
            name: PlayerName.ThePretender,
            champion: ChampionName.Leona,
            role: 'support',
            kills: 1,
            deaths: 4,
            assists: 22,
            cs: 51,
          },
        ],
      },
      red: {
        captain: PlayerName.Draghau,
        players: [
          {
            name: PlayerName.JemLem,
            champion: ChampionName.Gnar,
            role: 'top',
            kills: 4,
            deaths: 5,
            assists: 5,
            cs: 165,
          },
          {
            name: PlayerName.summon3r000,
            champion: ChampionName.MasterYi,
            role: 'jungle',
            kills: 5,
            deaths: 5,
            assists: 3,
            cs: 155,
          },
          {
            name: PlayerName.ElVaux,
            champion: ChampionName.Shaco,
            role: 'mid',
            kills: 4,
            deaths: 4,
            assists: 1,
            cs: 182,
          },
          {
            name: PlayerName.Draghau,
            champion: ChampionName.Gangplank,
            role: 'bot',
            kills: 3,
            deaths: 9,
            assists: 6,
            cs: 264,
          },
          {
            name: PlayerName.RayOfGayshine,
            champion: ChampionName.Taric,
            role: 'support',
            kills: 1,
            deaths: 6,
            assists: 6,
            cs: 41,
          },
        ],
      },
    },
    duration: getDuration(29, 57),
    dragonSoul: 'infernal',
  },
  {
    id: 310,
    date: new Date('2023-09-05'),
    effect: 'Multiple Choice',
    win: 'blue',
    mvp: PlayerName.NightRaven,
    ace: PlayerName.Boundless,
    draft: {
      bans: {
        blue: [
          [ChampionName.Garen],
          [ChampionName.JarvanIV],
          [ChampionName.Kassadin],
          [ChampionName.Sivir],
          [ChampionName.Nautilus],
        ],
        red: [
          [ChampionName.Kayle],
          [ChampionName.Fiddlesticks],
          [ChampionName.Jayce],
          [ChampionName.Seraphine],
          [ChampionName.Morgana],
        ],
      },
      picks: {
        blue: [
          ChampionName.Blitzcrank,
          ChampionName.Swain,
          ChampionName.Jhin,
          ChampionName.Kayn,
          ChampionName.Poppy,
        ],
        red: [
          ChampionName.Ezreal,
          ChampionName.Zac,
          ChampionName.Vladimir,
          ChampionName.Elise,
          ChampionName.Darius,
        ],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.CureLemonade,
        players: [
          {
            name: PlayerName.summon3r000,
            champion: ChampionName.Poppy,
            role: 'top',
            kills: 4,
            deaths: 7,
            assists: 14,
            cs: 110,
          },
          {
            name: PlayerName.Draghau,
            champion: ChampionName.Kayn,
            role: 'jungle',
            kills: 12,
            deaths: 3,
            assists: 14,
            cs: 228,
          },
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Swain,
            role: 'mid',
            kills: 8,
            deaths: 6,
            assists: 17,
            cs: 189,
          },
          {
            name: PlayerName.CureLemonade,
            champion: ChampionName.Jhin,
            role: 'bot',
            kills: 6,
            deaths: 5,
            assists: 12,
            cs: 188,
          },
          {
            name: PlayerName.ThePretender,
            champion: ChampionName.Blitzcrank,
            role: 'support',
            kills: 4,
            deaths: 6,
            assists: 19,
            cs: 37,
          },
        ],
      },
      red: {
        captain: PlayerName.JemLem,
        players: [
          {
            name: PlayerName.Boundless,
            champion: ChampionName.Darius,
            role: 'top',
            kills: 11,
            deaths: 6,
            assists: 5,
            cs: 217,
          },
          {
            name: PlayerName.ElVaux,
            champion: ChampionName.Elise,
            role: 'jungle',
            kills: 3,
            deaths: 7,
            assists: 11,
            cs: 162,
          },
          {
            name: PlayerName.Sewerslvt,
            champion: ChampionName.Vladimir,
            role: 'mid',
            kills: 7,
            deaths: 7,
            assists: 6,
            cs: 171,
          },
          {
            name: PlayerName.Roland,
            champion: ChampionName.Ezreal,
            role: 'bot',
            kills: 5,
            deaths: 6,
            assists: 8,
            cs: 232,
          },
          {
            name: PlayerName.JemLem,
            champion: ChampionName.Zac,
            role: 'support',
            kills: 1,
            deaths: 8,
            assists: 14,
            cs: 42,
          },
        ],
      },
    },
    duration: getDuration(33, 57),
    dragonSoul: 'chemtech',
    events: ['Swain W stole last Chemtech drake', 'Gordon also stole a drake, I guess'],
  },
  {
    id: 311,
    date: new Date('2023-09-12'),
    effect: 'Item Draft',
    win: 'blue',
    mvp: PlayerName.summon3r000,
    ace: PlayerName.ElVaux,
    draft: {
      bans: {
        blue: [
          [ChampionName.JarvanIV],
          [ChampionName.Warwick],
          [ChampionName.Garen],
          [ChampionName.Nilah],
          [ChampionName.Samira],
        ],
        red: [
          [ChampionName.Aatrox],
          [ChampionName.MasterYi],
          [ChampionName.Jax],
          [ChampionName.Wukong],
          [ChampionName.Viego],
        ],
      },
      picks: {
        blue: [
          ChampionName.Blitzcrank,
          ChampionName.Gnar,
          ChampionName.Ashe,
          ChampionName.BelVeth,
          ChampionName.Illaoi,
        ],
        red: [
          ChampionName.Pantheon,
          ChampionName.Volibear,
          ChampionName.KhaZix,
          ChampionName.Sett,
          ChampionName.Tristana,
        ],
      },
    },
    teams: {
      blue: {
        captain: PlayerName.NightRaven,
        players: [
          {
            name: PlayerName.JemLem,
            champion: ChampionName.Gnar,
            role: 'top',
            kills: 4,
            deaths: 4,
            assists: 3,
            cs: 164,
          },
          {
            name: PlayerName.summon3r000,
            champion: ChampionName.BelVeth,
            role: 'jungle',
            kills: 4,
            deaths: 2,
            assists: 10,
            cs: 204,
          },
          {
            name: PlayerName.NightRaven,
            champion: ChampionName.Illaoi,
            role: 'mid',
            kills: 4,
            deaths: 1,
            assists: 5,
            cs: 236,
          },
          {
            name: PlayerName.CureLemonade,
            champion: ChampionName.Ashe,
            role: 'bot',
            kills: 4,
            deaths: 4,
            assists: 8,
            cs: 199,
          },
          {
            name: PlayerName.ThePretender,
            champion: ChampionName.Blitzcrank,
            role: 'support',
            kills: 4,
            deaths: 4,
            assists: 9,
            cs: 35,
          },
        ],
      },
      red: {
        captain: PlayerName.Boundless,
        players: [
          {
            name: PlayerName.Boundless,
            champion: ChampionName.Sett,
            role: 'top',
            kills: 4,
            deaths: 4,
            assists: 3,
            cs: 177,
          },
          {
            name: PlayerName.Sharpaim,
            champion: ChampionName.KhaZix,
            role: 'jungle',
            kills: 4,
            deaths: 1,
            assists: 4,
            cs: 132,
          },
          {
            name: PlayerName.ElVaux,
            champion: ChampionName.Volibear,
            role: 'mid',
            kills: 1,
            deaths: 4,
            assists: 3,
            cs: 166,
          },
          {
            name: PlayerName.Draghau,
            champion: ChampionName.Tristana,
            role: 'bot',
            kills: 2,
            deaths: 6,
            assists: 6,
            cs: 157,
          },
          {
            name: PlayerName.Taikutsu,
            champion: ChampionName.Pantheon,
            role: 'support',
            kills: 4,
            deaths: 5,
            assists: 5,
            cs: 52,
          },
        ],
      },
    },
    duration: getDuration(28, 9),
    dragonSoul: 'chemtech',
    events: [
      'Kevin fat fingered Flash in the first minute of the game',
      'Everyone on blue side had 4 kills',
    ],
  },
];
