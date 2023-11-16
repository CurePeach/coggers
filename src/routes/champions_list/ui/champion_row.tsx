import { AttributeValuePair, Subheading } from 'ui/typography';

import { ChampionStore } from 'champion/champion_store';

export const ChampionRow = ({ champion }: { champion: ChampionStore }) => {
  return (
    <div key={champion.key}>
      <div>
        <Subheading>{champion.championName}</Subheading>
      </div>
      <div>
        <AttributeValuePair
          attribute="Win rate"
          value={`${(champion.winRate * 100).toFixed(2)} (${champion.numWins} / ${
            champion.numPicks
          })`}
        />
        <AttributeValuePair attribute="Number of bans" value={champion.numBans.toString()} />
      </div>
    </div>
  );
};
