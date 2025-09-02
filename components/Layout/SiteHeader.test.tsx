import { cleanup, render, screen } from '@/test-utils';
import { SiteHeader } from './SiteHeader';

describe('SiteHeader', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the Play button', () => {
    render(<SiteHeader />);
    expect(screen.getByText('Play')).toBeInTheDocument();
  });

  it('renders the About button', () => {
    render(<SiteHeader />);
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders the color scheme toggle button', () => {
    render(<SiteHeader />);
    expect(screen.getByLabelText('Toggle color scheme')).toBeInTheDocument();
  });
});
