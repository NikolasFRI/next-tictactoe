import React from 'react';
import { Grid } from '@mantine/core';
import { GameSquare } from './GameSquare';

interface GameBoardProps {
  squares: (string | null)[];
  onSquareClick: (index: number) => void;
  disabled: boolean;
}

export function GameBoard({ squares, onSquareClick, disabled }: GameBoardProps) {
  return (
    <Grid gutter="sm" columns={3} style={{ width: 300 }}>
      {Array.from({ length: 9 }).map((_, idx) => (
        <GameSquare
          key={idx}
          value={squares[idx]}
          index={idx}
          onClick={onSquareClick}
          disabled={squares[idx] !== null || disabled}
        />
      ))}
    </Grid>
  );
}
