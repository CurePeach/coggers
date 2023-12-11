import * as React from 'react';

type Width = 'auto' | 'full' | 'large' | 'medium';
type Display = 'block' | 'flex';
type FlexDirection = 'row' | 'column';

export type ContainerProps = {
  width?: Width;

  display?: Display;
  flexDirection?: FlexDirection;
  justifyContent?: 'center' | 'space-around';
  alignItems?: 'center' | 'normal';
  textAlign?: 'center' | 'start';

  // TODO: deprecate this field
  className?: string;
  children: React.ReactNode;
};

export const Container = ({
  width = 'auto',
  className,
  children,
  ...styleProps
}: ContainerProps) => {
  const mapWidth = (width: Width) => {
    switch (width) {
      case 'auto':
        return '';
      case 'full':
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
      ...styleProps,
    },
    className: className,
    children: children,
  });
};
