import * as React from 'react';

import { ChampionName as ChampionId, convert } from 'data/champions';

export type ChampionNameProps = {
  championId: ChampionId;
  withComma: boolean;
};

export const ChampionName = ({ championId, withComma }: ChampionNameProps) => {
  return (
    <>
      {convert(championId)}
      {withComma && ','}{' '}
    </>
  );
};
