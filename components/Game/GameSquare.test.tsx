import { cleanup, fireEvent, render, screen } from '@/test-utils';
import { GameSquare } from './GameSquare';

describe('GameSquare', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the square with the correct value', () => {
    render(<GameSquare value="X" index={0} onClick={() => {}} disabled={false} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls the onClick function when the square is clicked', () => {
    const onClick = jest.fn();
    render(<GameSquare value="X" index={0} onClick={onClick} disabled={false} />);
    fireEvent.click(screen.getByText('X'));
    expect(onClick).toHaveBeenCalled();
  });

  it('calls the onClick function when the square is clicked with the correct index', () => {
    const onClick = jest.fn();
    render(<GameSquare value="X" index={0} onClick={onClick} disabled={false} />);
    fireEvent.click(screen.getByText('X'));
    expect(onClick).toHaveBeenCalledWith(0);
  });

  it('disables the square when the disabled prop is true', () => {
    render(<GameSquare value="X" index={0} onClick={() => {}} disabled />);

    const square = screen.getByRole('button');
    expect(square).toHaveTextContent('X');
    expect(square).toHaveAttribute('disabled');
  });

  it('does not call the onClick function when the square is disabled', () => {
    const onClick = jest.fn();
    render(<GameSquare value="X" index={0} onClick={onClick} disabled />);
    fireEvent.click(screen.getByText('X'));
    expect(onClick).not.toHaveBeenCalled();
  });
});
