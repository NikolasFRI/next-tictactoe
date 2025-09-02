import { cleanup, render, screen } from '@/test-utils';
import { Board } from './Board';

jest.mock('@/components/hooks/useGameState', () => ({
  useGameState: () => ({
    squares: Array(9).fill(null),
    gameOver: false,
    winner: null,
    isDraw: false,
    takeTurn: jest.fn(),
    resetGame: jest.fn(),
  }),
}));

jest.mock('@/components/Game', () => ({
  GameStatus: () => <div data-testid="mock-status">GameStatus</div>,
  GameSquare: () => (
    <button type="button" data-testid="mock-square">
      GameSquare
    </button>
  ),
  GameControls: () => (
    <button type="button" data-testid="mock-controls">
      GameControls
    </button>
  ),
}));

describe('Board', () => {
  afterEach(() => cleanup());

  it('renders status, squares, and controls', () => {
    render(<Board />);
    const squares = screen.getAllByTestId('mock-square');

    expect(screen.getByTestId('mock-status')).toBeInTheDocument();

    expect(squares.length).toBe(9);
    squares.forEach((square) => expect(square).toBeInTheDocument());

    expect(screen.getByTestId('mock-controls')).toBeInTheDocument();
  });
});
