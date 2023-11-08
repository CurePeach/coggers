import * as React from 'react';

export type PlayerPairProps = {
  names: [string, string];
};

export const PlayerPair = ({ names }: PlayerPairProps) => {
  return (
    <div>
      <div>First: {names[0]}</div>
      <div>Second: {names[1]}</div>
    </div>
  );
};
