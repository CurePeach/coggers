import { ChampionStore } from 'champion/champion_store';

export const ChampionRow = ({ champion }: { champion: ChampionStore }) => {
  return (
    <div key={champion.key}>
      <div>{champion.championName}</div>
      <div>
        Winrate: {(champion.winRate * 100).toFixed(2)} ({champion.numWins} / {champion.numPicks})
      </div>
      <div>Number of bans: {champion.numBans}</div>
    </div>
  );
};
