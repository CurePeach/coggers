import * as React from 'react';

import { ChampionName as ChampionId, convert } from 'data/champions';
import { ChampionIcon } from 'ui/base/champion_icon/champion_icon';

export type ChampionNameProps = {
  championId: ChampionId;
  withComma: boolean;
};

export const ChampionName = ({ championId, withComma }: ChampionNameProps) => {
  return (
    <>
      <ChampionIcon championId={championId} size="inline" />
      {convert(championId)}
      {withComma && ', '}
    </>
  );
};
