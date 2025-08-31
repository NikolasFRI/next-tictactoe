import React from 'react';
import { Alert, Flex, Text } from '@mantine/core';

interface GameStatusProps {
  winner: string | null;
  isDraw: boolean;
  xIsNext: boolean;
}

export function GameStatus({ winner, isDraw, xIsNext }: GameStatusProps) {
  if (winner || isDraw) {
    return (
      <Alert ta="center" color={winner ? 'green' : 'blue'} mb="md">
        <Text fw={600}>{winner ? `Player ${winner} won!` : 'Draw!'}</Text>
      </Alert>
    );
  }

  return (
    <Flex justify="center" align="center">
      <Alert
        color={xIsNext ? 'yellow' : 'gray'}
        mb="md"
        style={{
          width: '100%',
          borderTopRightRadius: '0px',
          borderBottomRightRadius: '0px',
        }}
      >
        <Text fw={xIsNext ? 800 : 500} c={xIsNext ? undefined : 'dimmed'}>
          Player X
        </Text>
      </Alert>
      <Alert
        color={!xIsNext ? 'red' : 'gray'}
        mb="md"
        style={{
          textAlign: 'right',
          width: '100%',
          borderTopLeftRadius: '0px',
          borderBottomLeftRadius: '0px',
        }}
      >
        <Text fw={!xIsNext ? 800 : 500} c={!xIsNext ? undefined : 'dimmed'}>
          Player O
        </Text>
      </Alert>
    </Flex>
  );
}
