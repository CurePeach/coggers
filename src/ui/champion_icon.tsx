import { getChampionAsset } from 'assets/asset_mapper';
import { ChampionName, convert } from 'data/champions';

export type ChampionIconProps = {
  championId: ChampionName;
};

export const ChampionIcon = ({ championId }: ChampionIconProps) => (
  <div style={{ margin: '10px' }}>
    <img
      src={getChampionAsset(championId)}
      alt={convert(championId)}
      style={{ borderRadius: '50px', width: 100 }}
    />
  </div>
);
