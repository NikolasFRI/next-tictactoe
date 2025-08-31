import React from 'react';
import { Button, Grid } from '@mantine/core';

interface GameSquareProps {
  value: string | null;
  index: number;
  onClick: (index: number) => void;
  disabled: boolean;
}

export function GameSquare({ value, index, onClick, disabled }: GameSquareProps) {
  return (
    <Grid.Col span={1}>
      <Button
        variant="default"
        size="xl"
        style={{
          width: 90,
          height: 90,
          backgroundColor: 'var(--mantine-color-body)',
          border: '1px solid var(--mantine-color-gray-3)',
          color: 'var(--mantine-color-text)',
        }}
        onClick={() => onClick(index)}
        disabled={disabled}
      >
        {value}
      </Button>
    </Grid.Col>
  );
}
