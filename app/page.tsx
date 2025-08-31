import { Container, Stack } from '@mantine/core';
import { Heading } from '@/components/UI/Heading';
import { Board } from '../components/Game/Board';

export default function HomePage() {
  const heading = {
    title: 'Tic Tac Toe',
    description: 'Players take turns clicking the tiles with X and O. Get three in a row to win!',
  };

  return (
    <Container size="md">
      <Stack gap="md" align="center">
        <Heading title={heading.title} description={heading.description} />
        <Board />
      </Stack>
    </Container>
  );
}
