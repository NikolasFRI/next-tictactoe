import { cleanup, render, screen } from '@/test-utils';
import { Heading } from './Heading';

describe('Heading', () => {
  const mockProps = {
    title: 'Test Title',
    description: 'Test Description',
  };

  afterEach(() => {
    cleanup();
  });

  it('renders the title with correct text', () => {
    render(<Heading {...mockProps} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders the description with correct text', () => {
    render(<Heading {...mockProps} />);
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders a divider element', () => {
    render(<Heading {...mockProps} />);
    const divider = screen.getByRole('separator');
    expect(divider).toBeInTheDocument();
  });
});
