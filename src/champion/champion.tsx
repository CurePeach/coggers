import * as React from 'react';

export type ChampionProps = {
  name: string;
};

export const Champion = ({ name }: ChampionProps) => {
  return <div>{name}</div>;
};
