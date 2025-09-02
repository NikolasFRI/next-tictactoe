import React from 'react';
import { cleanup, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Board } from '@/components/Game/Board';
import { useGameState } from '@/components/hooks/useGameState';
import { render } from '@/test-utils/render';

describe('Board', () => {
  afterEach(() => cleanup());

  it('should display the value of the player the square when it is clicked', () => {
    render(<Board />);
    const squares = screen.getAllByTestId('square');
    fireEvent.click(squares[0]);
    fireEvent.click(squares[1]);
    expect(squares[0]).toHaveTextContent('X');
    expect(squares[1]).toHaveTextContent('O');
  });

  it('resets the game when reset button is clicked', () => {
    render(<Board />);

    const squares = screen.getAllByTestId('square');
    fireEvent.click(squares[0]);
    const clickedSquareText = squares[0].textContent;

    const resetButton = screen.getByText('Start Over');
    fireEvent.click(resetButton);

    expect(clickedSquareText).toBe('X');
    expect(screen.getAllByTestId('square').every((square) => square.textContent === '')).toBe(true);
  });

  it('show the winner when a player wins', () => {
    render(<Board />);

    const squares = screen.getAllByTestId('square');

    //simulate a win for player x
    fireEvent.click(squares[0]);
    fireEvent.click(squares[1]);
    fireEvent.click(squares[3]);
    fireEvent.click(squares[4]);
    fireEvent.click(squares[6]);

    expect(screen.getByText('Player X won!')).toBeInTheDocument();
  });

  it('show a draw when the game ends in a draw', () => {
    render(<Board />);

    const squares = screen.getAllByTestId('square');

    //simulate a draw
    fireEvent.click(squares[0]);
    fireEvent.click(squares[1]);
    fireEvent.click(squares[2]);
    fireEvent.click(squares[4]);
    fireEvent.click(squares[3]);
    fireEvent.click(squares[5]);
    fireEvent.click(squares[7]);
    fireEvent.click(squares[6]);
    fireEvent.click(squares[8]);

    expect(screen.getByText('Draw!')).toBeInTheDocument();
  });
});
