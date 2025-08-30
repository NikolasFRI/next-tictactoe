'use client';

import React from 'react';
import Link from 'next/link';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, Box, Button, Flex, Group, useMantineColorScheme } from '@mantine/core';

export function SiteHeader() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const toggle = () => setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  return (
    <Group h="100%" px="md">
      <Flex align="center" justify="space-between" w="100%">
        <Box w={40} />
        <Group gap="sm">
          <Button component={Link} href="/" variant="subtle" size="md">
            Play
          </Button>
          <Button component={Link} href="/about" variant="subtle" size="md">
            About
          </Button>
        </Group>
        <ActionIcon variant="default" size="lg" onClick={toggle} aria-label="Toggle color scheme">
          {colorScheme === 'light' ? <IconMoon size={18} /> : <IconSun size={18} />}
        </ActionIcon>
      </Flex>
    </Group>
  );
}
