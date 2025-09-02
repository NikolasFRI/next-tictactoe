import { Center, Code, Container, Divider, Stack, Text, Title } from '@mantine/core';
import { Heading } from '@/components/UI/Heading';

export default function AboutPage() {
  const heading = {
    title: 'About This Project',
    description:
      'A simple TicTacToe game built for learning purposes on modern web development practices like NextJS, component architecture and UI Libraries.',
  };
  return (
    <Center style={{ width: '100%', minHeight: '60vh' }}>
      <Container size="md">
        <Stack gap="md" align="center">
          <Heading title={heading.title} description={heading.description} />

          <Stack gap="md" w="100%">
            <Title order={3}>Tech Stack</Title>

            <Stack gap="xs">
              <Text>
                <strong>Frontend Framework:</strong> <Code>NextJS 15</Code> with{' '}
                <Code>React 19</Code>
              </Text>
              <Text>
                <strong>UI Library:</strong> <Code>Mantine v8</Code>
              </Text>
              <Text>
                <strong>Language:</strong> <Code>TypeScript</Code>
              </Text>
              <Text>
                <strong>Icons:</strong> <Code>@tabler/icons-react</Code>
              </Text>
            </Stack>

            <Divider />

            <Title order={3}>Features</Title>

            <Stack gap="xs">
              <Text>• Responsive design with Mantine's AppShell layout</Text>
              <Text>• Light/dark theme toggle</Text>
              <Text>• Game state management with React hooks</Text>
              <Text>• Full test integration with Jest</Text>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Center>
  );
}
