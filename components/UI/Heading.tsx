import { Divider, Text, Title } from '@mantine/core';

export function Heading({ title, description }: { title: string; description: string }) {
  return (
    <>
      <Title order={1} ta="center">
        {title}
      </Title>

      <Text size="lg" ta="center" c="dimmed">
        {description}
      </Text>

      <Divider w="100%" />
    </>
  );
}
