'use client';

import React from 'react';
import { AppShell, MantineProvider } from '@mantine/core';
import { SiteFooter } from '@/components/Layout/SiteFooter';
import { SiteHeader } from '@/components/Layout/SiteHeader';
import { theme } from '../../theme';

export function AppFrame({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <AppShell header={{ height: 56 }} footer={{ height: 56 }} padding="md">
        <AppShell.Header>
          <SiteHeader />
        </AppShell.Header>
        <AppShell.Main>{children}</AppShell.Main>
        <AppShell.Footer>
          <SiteFooter />
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}
