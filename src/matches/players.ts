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

export const convert = (key: PlayerName): string => {
  switch (key) {
    case PlayerName.Applesmustdie:
      return 'Applesmustdie';
    case PlayerName.Boundless:
      return 'Boundless';
    case PlayerName.CureLemonade:
      return 'Cure Lemonade';
    case PlayerName.Delucidationer:
      return 'Delucidationer';
    case PlayerName.Draghau:
      return 'Draghau';
    case PlayerName.edmododragon:
      return 'edmododragon';
    case PlayerName.ElVaux:
      return 'ElVaux';
    case PlayerName.JemLem:
      return 'JemLem';
    case PlayerName.NVRPY:
      return 'NVRPY';
    case PlayerName.NightRaven:
      return 'NightRaven';
    case PlayerName.RayOfGayshine:
      return 'RayOfGayshine';
    case PlayerName.Roland:
      return 'Roland';
    case PlayerName.SatanBlaze:
      return 'Satan Blaze';
    case PlayerName.Sewerslvt:
      return 'Sewerslvt';
    case PlayerName.Sharpaim:
      return 'Sharpaim';
    case PlayerName.summon3r000:
      return 'summon3r000';
    case PlayerName.summon3r003:
      return 'summon3r003';
    case PlayerName.Taikutsu:
      return 'Taikutsu';
    case PlayerName.ThePretender:
      return 'The Pretender';
  }

  return `Not added yet: ${key}`;
};
