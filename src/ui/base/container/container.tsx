import * as React from 'react';

type Width = 'auto' | 'large' | 'medium';
type Display = 'block' | 'flex';
type FlexDirection = 'row' | 'column';

export type ContainerProps = {
  width?: Width;
  display?: Display;
  flexDirection?: FlexDirection;
  justifyContent?: 'center' | 'space-around';
  alignItems?: 'center';
  className?: string;
  children: React.ReactNode;
};

export const Container = ({
  width = 'auto',
  display = 'block',
  flexDirection = 'row',
  justifyContent = 'center',
  alignItems = 'center',
  className,
  children,
}: ContainerProps) => {
  const mapWidth = (width: Width) => {
    switch (width) {
      case 'auto':
        return '100%';
      case 'large':
        return '900px';
      case 'medium':
        return '750px';
    }
  };

  return React.createElement('div', {
    style: {
      width: mapWidth(width),
      display,
      flexDirection,
      justifyContent,
      alignItems,
    },
    className: className,
    children: children,
  });
};
