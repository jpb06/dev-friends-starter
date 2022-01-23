import { render } from '@testing-library/react';

import { Home } from './Home';

describe('Home components', () => {
  it('should match snapshot', () => {
    const { baseElement } = render(<Home />);

    expect(baseElement).toMatchSnapshot();
  });
});
