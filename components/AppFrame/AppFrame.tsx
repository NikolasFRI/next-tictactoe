'use client';

import React from 'react';
import { AppShell, MantineProvider } from '@mantine/core';
import { theme } from '../../theme';
import { SiteFooter } from '../SiteFooter/SiteFooter';
import { SiteHeader } from '../SiteHeader/SiteHeader';

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
