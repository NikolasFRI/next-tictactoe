import { cleanup, render, screen } from '@/test-utils';
import { SiteFooter } from './SiteFooter';

describe('SiteFooter', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the copyright text', () => {
    render(<SiteFooter />);
    expect(screen.getByText('© 2025 Nikolas Friedlmayer')).toBeInTheDocument();
  });

  it('renders the GitHub link', () => {
    render(<SiteFooter />);
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  it('renders a divider element', () => {
    render(<SiteFooter />);
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });
});
