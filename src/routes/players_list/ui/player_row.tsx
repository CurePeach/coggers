import * as React from 'react';

import { convert } from 'data/champions';

import { Subheading } from 'ui/typography';

import type { PlayerStore } from 'player/player_store';

export const PlayerRow = ({ player }: { player: PlayerStore }) => {
  const champList: string[] = player.scores
    .map((score) => {
      return convert(score.champion);
    })
    .filter((value, index, self) => {
      return index === self.indexOf(value);
    });

  return (
    <div key={player.key}>
      <Subheading>{player.playerName}</Subheading>
      <div>
        Winrate: {(player.winRate * 100).toFixed(2)} ({player.numWins} / {player.numGames})
      </div>
      <div>Champions played: {champList.join(', ')}</div>
    </div>
  );
};
