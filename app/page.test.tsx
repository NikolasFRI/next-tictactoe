import { cleanup, render, screen } from '@/test-utils';
import HomePage from './page';

jest.mock('@/components/UI/Heading', () => ({
  Heading: () => <div data-testid="heading">Heading</div>,
}));

jest.mock('@/components/Game/Board', () => ({
  Board: () => <div data-testid="board">Board</div>,
}));

describe('AboutPage', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders heading component', () => {
    render(<HomePage />);
    const heading = screen.getByTestId('heading');
    expect(heading).toBeInTheDocument();
  });

  it('renders the board component', () => {
    render(<HomePage />);
    expect(screen.getByTestId('board')).toBeInTheDocument();
  });
});
