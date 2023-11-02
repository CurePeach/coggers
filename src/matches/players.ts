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

export const playerNames = Object.keys(PlayerName).filter((key) => isNaN(Number(key)));

export const convert = (key: PlayerName): string => {
  switch (key) {
    case PlayerName.CureLemonade:
      return 'Cure Lemonade';
    case PlayerName.SatanBlaze:
      return 'Satan Blaze';
    case PlayerName.ThePretender:
      return 'The Pretender';
    default:
      return playerNames[key];
  }
};
