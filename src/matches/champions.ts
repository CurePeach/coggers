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

export const championNames: string[] = Object.keys(ChampionName).filter((key) =>
  isNaN(Number(key))
);

export const championIds: ChampionName[] = Object.values(ChampionName).filter(
  (key) => !isNaN(Number(key))
) as ChampionName[];

export const convert = (key: ChampionName) => {
  switch (key) {
    case ChampionName.AurelionSol:
      return 'Aurelion Sol';
    case ChampionName.BelVeth:
      return "Bel'Veth";
    case ChampionName.ChoGath:
      return "Cho'Gath";
    case ChampionName.DrMundo:
      return 'Dr. Mundo';
    case ChampionName.JarvanIV:
      return 'Jarvan IV';
    case ChampionName.KSante:
      return "K'Sante";
    case ChampionName.KaiSa:
      return "Kai'Sa";
    case ChampionName.KogMaw:
      return "Kog'Maw";
    case ChampionName.LeeSin:
      return 'Lee Sin';
    case ChampionName.MasterYi:
      return 'Master Yi';
    case ChampionName.MissFortune:
      return 'Miss Fortune';
    case ChampionName.NunuWillump:
      return 'Nunu & Willump';
    case ChampionName.RenataGlasc:
      return 'Renata Glasc';
    case ChampionName.TahmKench:
      return 'Tahm Kench';
    case ChampionName.TwistedFate:
      return 'Twisted Fate';
    case ChampionName.VelKoz:
      return "Vel'Koz";
    case ChampionName.XinZhao:
      return 'Xin Zhao';
    default:
      return championNames[key];
  }
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
