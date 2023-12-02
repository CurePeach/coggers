import classNames from 'classnames';

import { getChampionAsset } from 'assets/asset_mapper';
import { ChampionName, convert } from 'data/champions';

import styles from './champion_icon.module.css';

export type ChampionIconProps = {
  championId: ChampionName;
  size: 'medium' | 'small' | 'inline';
};

export const ChampionIcon = ({ championId, size }: ChampionIconProps) => (
  <div
    className={classNames({
      [styles.iconInlineContainer]: size === 'inline',
      [styles.iconContainer]: size !== 'inline',
    })}
  >
    <img
      src={getChampionAsset(championId)}
      alt={convert(championId)}
      className={classNames({
        [styles.medium]: size === 'medium',
        [styles.small]: size === 'small',
        [styles.inline]: size === 'inline',
      })}
    />
  </div>
);
