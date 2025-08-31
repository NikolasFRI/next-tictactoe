import React from 'react';
import { Button, Group } from '@mantine/core';

interface GameControlsProps {
  onReset: () => void;
}

export function GameControls({ onReset }: GameControlsProps) {
  return (
    <Group justify="center" mt="md">
      <Button onClick={onReset} variant="outline">
        Start Over
      </Button>
    </Group>
  );
}
