'use client';

import React from 'react';
import { Card, Center, Grid } from '@mantine/core';
import { GameControls, GameSquare, GameStatus } from '@/components/Game';
import { useGameState } from '@/components/hooks/useGameState';

export function Board() {
  const { squares, gameOver, winner, isDraw, takeTurn, resetGame } = useGameState();

  return (
    <Center style={{ width: '100%', minHeight: '60vh' }}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <GameStatus
          winner={winner}
          isDraw={isDraw}
          xIsNext={!gameOver && squares.filter(Boolean).length % 2 === 0}
        />

        <Grid gutter="sm" columns={3} style={{ width: 300 }}>
          {Array.from({ length: 9 }).map((_, idx) => (
            <GameSquare
              key={idx}
              value={squares[idx]}
              index={idx}
              onClick={takeTurn}
              disabled={squares[idx] !== null || gameOver}
            />
          ))}
        </Grid>

        <GameControls onReset={resetGame} />
      </Card>
    </Center>
  );
}
