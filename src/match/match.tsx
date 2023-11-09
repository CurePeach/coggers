import * as React from 'react';

export type MatchProps = {
  date: Date;
  effect: string;
};

export const Match = ({ date, effect }: MatchProps) => {
  return (
    <div>
      <div>
        {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
      </div>
      <div>Effect: {effect}</div>
    </div>
  );
};
