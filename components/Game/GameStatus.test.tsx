import { cleanup, render, screen } from '@/test-utils';
import { GameStatus } from './GameStatus';

describe('GameStatus', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the correct components when game is not finished', () => {
    render(<GameStatus winner={null} isDraw={false} xIsNext={true} />);
    expect(screen.getByText('Player X')).toBeInTheDocument();
    expect(screen.getByText('Player O')).toBeInTheDocument();
  });

  it('renders the correct component and shows the winner if a player won', () => {
    render(<GameStatus winner={'X'} isDraw={false} xIsNext={false} />);
    expect(screen.getByText('Player X won!')).toBeInTheDocument();
  });

  it('renders the correct component and shows a draw if the game finished in a draw', () => {
    render(<GameStatus winner={null} isDraw={true} xIsNext={false} />);
    expect(screen.getByText('Draw!')).toBeInTheDocument();
  });
});
