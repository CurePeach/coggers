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

export const convert = (key: ChampionName) => {
  switch (key) {
    case ChampionName.Aatrox:
      return 'Aatrox';
    case ChampionName.Amumu:
      return 'Amumu';
    case ChampionName.Aphelios:
      return 'Aphelios';
    case ChampionName.Ashe:
      return 'Ashe';
    case ChampionName.Bard:
      return 'Bard';
    case ChampionName.Evelynn:
      return 'Evelynn';
    case ChampionName.Gangplank:
      return 'Gangplank';
    case ChampionName.Graves:
      return 'Graves';
    case ChampionName.Kennen:
      return 'Kennen';
    case ChampionName.Jhin:
      return 'Jhin';
    case ChampionName.Lissandra:
      return 'Lissandra';
    case ChampionName.Lux:
      return 'Lux';
    case ChampionName.Mordekaiser:
      return 'Mordekaiser';
    case ChampionName.Syndra:
      return 'Syndra';
    case ChampionName.Taliyah:
      return 'Taliyah';
    case ChampionName.Tristana:
      return 'Tristana';
    case ChampionName.Vayne:
      return 'Vayne';
    case ChampionName.Viktor:
      return 'Viktor';
  }

  return `Not added yet: ${key}`;
};

export const championsStartsWith = (str: string): ChampionName[] => {
  const allChampionNames = Object.keys(ChampionName).filter((key) => isNaN(Number(key)));
  const result: ChampionName[] = [];
  allChampionNames.forEach((key, value) => {
    if (key.toString().startsWith(str)) {
      result.push(value);
    }
  });

  return result;
};
