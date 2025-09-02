import { cleanup, render, screen } from '@/test-utils';
import AboutPage from './page';

jest.mock('@/components/UI/Heading', () => ({
  Heading: () => <div data-testid="heading">Heading</div>,
}));

describe('AboutPage', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders heading component', () => {
    render(<AboutPage />);
    const heading = screen.getByTestId('heading');
    expect(heading).toBeInTheDocument();
  });
});
