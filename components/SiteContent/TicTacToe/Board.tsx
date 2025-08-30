'use client';

import React, { useState } from 'react';
import { Alert, Button, Card, Center, Flex, Grid, Group, Text } from '@mantine/core';

export function Board() {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i: number) => {
    if (squares[i] || gameOver) return;
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);

    const winner = calculateWinner(newSquares);
    if (winner || newSquares.every((square) => square !== null)) {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameOver(false);
  };

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);

  return (
    <Center style={{ width: '100%', minHeight: '60vh' }}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        {winner || isDraw ? (
          <Alert ta="center" color={winner ? 'green' : 'blue'} mb="md">
            {winner ? `Player ${winner} won!` : 'Draw!'}
          </Alert>
        ) : (
          <Flex justify="center" align="center">
            <Alert
              color={xIsNext ? 'yellow' : 'gray'}
              mb="md"
              style={{ width: '100%', borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }}
            >
              <Text c={xIsNext ? undefined : 'dimmed'}>Player X</Text>
            </Alert>
            <Alert
              color={!xIsNext ? 'red' : 'gray'}
              mb="md"
              style={{ width: '100%', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }}
            >
              <Text c={!xIsNext ? undefined : 'dimmed'}>Player O</Text>
            </Alert>
          </Flex>
        )}
        <Grid gutter="sm" columns={3} style={{ width: 300 }}>
          {Array.from({ length: 9 }).map((_, idx) => (
            <Grid.Col key={idx} span={1}>
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
                onClick={() => handleClick(idx)}
                disabled={squares[idx] !== null || gameOver}
              >
                {squares[idx]}
              </Button>
            </Grid.Col>
          ))}
        </Grid>
        <Group justify="center" mt="md">
          <Button onClick={resetGame} variant="outline">
            Start Over
          </Button>
        </Group>
      </Card>
    </Center>
  );
}
