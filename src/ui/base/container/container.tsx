import * as React from 'react';

type Width = 'large' | 'medium';

export type ContainerProps = {
  width?: Width;
  children: React.ReactNode;
};

export const Container = ({ width = 'medium', children }: ContainerProps) => {
  const mapWidth = (width: Width) => {
    switch (width) {
      case 'large':
        return 900;
      case 'medium':
        return 750;
    }
  };

  return React.createElement('div', {
    width: mapWidth(width),
    children: children,
  });
};
