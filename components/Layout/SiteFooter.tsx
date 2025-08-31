'use client';

import React from 'react';
import { IconBrandGithub } from '@tabler/icons-react';
import { Anchor, Container, Divider, Group, Text } from '@mantine/core';

export function SiteFooter() {
  return (
    <>
      <Divider opacity={0.15} />
      <Container size="md" px="md" py="sm">
        <Group justify="space-between" align="center">
          <Text size="sm" c="dimmed">
            © 2025 Nikolas Friedlmayer
          </Text>
          <Anchor
            href="https://github.com/NikolasFRI/Next-tictactoe"
            target="_blank"
            c="dimmed"
            fw={500}
            underline="hover"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
          >
            <IconBrandGithub size={18} />
            GitHub
          </Anchor>
        </Group>
      </Container>
    </>
  );
}
