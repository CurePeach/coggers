import * as React from 'react';

export const Title = ({ children }: { children: React.ReactNode }) => {
  return <h1>{children}</h1>;
};

export const Subheading = ({ children }: { children: React.ReactNode }) => {
  return <h2>{children}</h2>;
};
