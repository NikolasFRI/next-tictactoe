// tests/hooks/useGameState.test.ts
import { act, renderHook } from '@testing-library/react';
import { useGameState } from '@/components/hooks/useGameState';

describe('useGameState', () => {
  it('initializes with empty squares and X to start', () => {
    const { result } = renderHook(() => useGameState());

    expect(result.current.squares).toEqual(Array(9).fill(null));
    expect(result.current.xIsNext).toBe(true);
    expect(result.current.gameOver).toBe(false);
    expect(result.current.winner).toBeNull();
    expect(result.current.isDraw).toBe(false);
  });

  it('updates squares and toggles player turn when takeTurn is called', () => {
    const { result } = renderHook(() => useGameState());

    act(() => {
      result.current.takeTurn(0);
    });

    expect(result.current.squares[0]).toBe('X');
    expect(result.current.xIsNext).toBe(false);
  });

  it('does not overwrite an already filled square', () => {
    const { result } = renderHook(() => useGameState());

    act(() => result.current.takeTurn(0));
    act(() => result.current.takeTurn(0));

    expect(result.current.squares[0]).toBe('X');
    expect(result.current.xIsNext).toBe(false);
  });

  it('sets gameOver when a winner is found', () => {
    const { result } = renderHook(() => useGameState());

    act(() => result.current.takeTurn(0));
    act(() => result.current.takeTurn(3));
    act(() => result.current.takeTurn(1));
    act(() => result.current.takeTurn(4));
    act(() => result.current.takeTurn(2));

    expect(result.current.winner).toBe('X');
    expect(result.current.gameOver).toBe(true);
  });

  it('resets the game when resetGame is called', () => {
    const { result } = renderHook(() => useGameState());

    act(() => result.current.takeTurn(0));
    const oldSquareText = result.current.squares[0];
    act(() => result.current.resetGame());

    expect(oldSquareText).toBe('X');
    expect(result.current.squares).toEqual(Array(9).fill(null));
    expect(result.current.xIsNext).toBe(true);
    expect(result.current.gameOver).toBe(false);
  });
});
