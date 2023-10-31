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

export enum PlayerName {
  Applesmustdie,
  Boundless,
  CureLemonade,
  Delucidationer,
  Draghau,
  edmododragon,
  ElVaux,
  JemLem,
  NightRaven,
  NVRPY,
  RayOfGayshine,
  Roland,
  SatanBlaze,
  Sewerslvt,
  Sharpaim,
  summon3r000,
  summon3r003,
  Taikutsu,
  ThePretender,
}

export enum ChampionName {
  Aatrox,
  Ahri,
  Akali,
  Akshan,
  Alistar,
  Amumu,
  Anivia,
  Annie,
  Aphelios,
  Ashe,
  AurelionSol,
  Azir,
  Bard,
  BelVeth,
  Blitzcrank,
  Brand,
  Braum,
  Briar,
  Caitlyn,
  Camille,
  Cassiopeia,
  ChoGath,
  Corki,
  Darius,
  Diana,
  DrMundo,
  Draven,
  Ekko,
  Elise,
  Evelynn,
  Ezreal,
  Fiddlesticks,
  Fiora,
  Fizz,
  Galio,
  Gangplank,
  Garen,
  Gnar,
  Gragas,
  Graves,
  Gwen,
  Hecarim,
  Heimerdinger,
  Illaoi,
  Irelia,
  Ivern,
  Janna,
  JarvanIV,
  Jax,
  Jayce,
  Jhin,
  Jinx,
  KSante,
  KaiSa,
  Kalista,
  Karma,
  Karthus,
  Kassadin,
  Katarina,
  Kayle,
  Kayn,
  Kennen,
  KhaZix,
  Kindred,
  Kled,
  KogMaw,
  Leblanc,
  LeeSin,
  Leona,
  Lillia,
  Lissandra,
  Lucian,
  Lulu,
  Lux,
  Malphite,
  Malzahar,
  Maokai,
  MasterYi,
  Milio,
  MissFortune,
  Mordekaiser,
  Morgana,
  Naafiri,
  Nami,
  Nasus,
  Nautilus,
  Neeko,
  Nidalee,
  Nilah,
  Nocturne,
  NunuWillump,
  Olaf,
  Orianna,
  Ornn,
  Pantheon,
  Poppy,
  Pyke,
  Qiyana,
  Quinn,
  Rakan,
  Rammus,
  RekSai,
  Rell,
  RenataGlasc,
  Renekton,
  Rengar,
  Riven,
  Rumble,
  Ryze,
  Samira,
  Sejuani,
  Senna,
  Seraphine,
  Sett,
  Shaco,
  Shen,
  Shyvana,
  Singed,
  Sion,
  Sivir,
  Skarner,
  Sona,
  Soraka,
  Swain,
  Sylas,
  Syndra,
  TahmKench,
  Taliyah,
  Talon,
  Taric,
  Teemo,
  Thresh,
  Tristana,
  Trundle,
  Tryndamere,
  TwistedFate,
  Twitch,
  Udyr,
  Urgot,
  Varus,
  Vayne,
  Veigar,
  VelKoz,
  Vex,
  Vi,
  Viego,
  Viktor,
  Vladimir,
  Volibear,
  Warwick,
  Wukong,
  Xayah,
  Xerath,
  XinZhao,
  Yasuo,
  Yone,
  Yorick,
  Yuumi,
  Zac,
  Zed,
  Zeri,
  Ziggs,
  Zilean,
  Zoe,
  Zyra,
}
