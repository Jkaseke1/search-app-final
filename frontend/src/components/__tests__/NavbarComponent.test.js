
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarComponent from '../NavbarComponent';
import '@testing-library/jest-dom';

test('NavbarComponent renders correctly', () => {
  const { getByText } = render(
    <Router>
      <NavbarComponent />
    </Router>
  );

  expect(getByText('Expressearch')).toBeInTheDocument();
  expect(getByText('Favourites')).toBeInTheDocument();
  expect(getByText('GitHub')).toBeInTheDocument();
});
