// AppFrame.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppFrame } from './AppFrame';

jest.mock('@/components/Layout/SiteHeader', () => ({
  SiteHeader: () => <div data-testid="mock-header">Header</div>,
}));

jest.mock('@/components/Layout/SiteFooter', () => ({
  SiteFooter: () => <div data-testid="mock-footer">Footer</div>,
}));

describe('AppFrame', () => {
  it('renders the mocked header', () => {
    render(
      <AppFrame>
        <div data-testid="child">Child content</div>
      </AppFrame>
    );

    const header = screen.getByTestId('mock-header');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Header');
  });

  it('renders the mocked footer', () => {
    render(
      <AppFrame>
        <div data-testid="child">Child content</div>
      </AppFrame>
    );

    const footer = screen.getByTestId('mock-footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent('Footer');
  });

  it('renders the children', () => {
    render(
      <AppFrame>
        <div data-testid="child">Child content</div>
      </AppFrame>
    );

    const child = screen.getByTestId('child');
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent('Child content');
  });

  it('renders correctly with no children', () => {
    render(<AppFrame>{null}</AppFrame>);

    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();

    const main = screen.queryByTestId('child');
    expect(main).not.toBeInTheDocument();
  });
});
