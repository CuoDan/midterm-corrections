import {cleanup, render} from '@testing-library/react';
import { App } from './App';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('App contains text "hello world"', () => {
  const { queryByText } = render(
    <App />
  );

  expect(queryByText(/hello world/i)).toBeTruthy();
});

it('App contains text "I dunno what to say"', () => {
  const { queryByText } = render(
    <App />
  );

  expect(queryByText(/I dunno what to say/i)).toBeTruthy();
});
