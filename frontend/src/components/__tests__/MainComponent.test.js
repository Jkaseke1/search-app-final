import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainComponent from '../MainComponent';
import '@testing-library/jest-dom';

test('MainComponent renders correctly', () => {
  const favourites = [];
  const setFavourites = jest.fn();

  const { getByText } = render(
    <Router>
      <MainComponent favouritesProp={favourites} setFavouritesProp={setFavourites} />
    </Router>
  );

  expect(getByText('Which')).toBeInTheDocument();
  expect(getByText('Search results will appear here')).toBeInTheDocument();
});