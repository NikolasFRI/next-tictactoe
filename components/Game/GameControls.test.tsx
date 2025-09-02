import { cleanup, fireEvent, render, screen } from '@/test-utils';
import { GameControls } from './GameControls';

describe('GameControls', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the start over button', () => {
    render(<GameControls onReset={() => {}} />);
    expect(screen.getByText('Start Over')).toBeInTheDocument();
  });

  it('calls the onReset function when the start over button is clicked', () => {
    const onReset = jest.fn();
    render(<GameControls onReset={onReset} />);
    fireEvent.click(screen.getByText('Start Over'));
    expect(onReset).toHaveBeenCalled();
  });
});
