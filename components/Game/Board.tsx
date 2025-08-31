'use client';

import React from 'react';
import { Card, Center } from '@mantine/core';
import { GameBoard, GameControls, GameStatus } from '@/components/Game';
import { useGameState } from '@/components/hooks/useGameState';

export function Board() {
  const { squares, gameOver, winner, isDraw, handleClick, resetGame } = useGameState();

  return (
    <Center style={{ width: '100%', minHeight: '60vh' }}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <GameStatus
          winner={winner}
          isDraw={isDraw}
          xIsNext={!gameOver && squares.filter(Boolean).length % 2 === 0}
        />

        <GameBoard squares={squares} onSquareClick={handleClick} disabled={gameOver} />

        <GameControls onReset={resetGame} />
      </Card>
    </Center>
  );
}
