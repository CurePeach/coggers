import * as React from 'react';

export type PlayerProps = {
  name: string;
};

export const Player = ({ name }: PlayerProps) => {
  return <div>{name}</div>;
};
