import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FavouritesComponent from '../FavouritesComponent';
import '@testing-library/jest-dom';

test('FavouritesComponent renders correctly', () => {
  const favourites = [
    {
      artworkUrl100: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ae/4c/d4/ae4cd42a-80a9-d950-16f5-36f01a9e1881/source/100x100bb.jpg',
      trackName: 'Upside Down',
      artistName: 'Jack Johnson',
      trackPrice: 1.29,
      primaryGenreName: 'Rock',
      kind: 'song',
      likeStatus: true,
      description: null,
      shortDescription: null,
      longDescription: null,
    },
    {
      artworkUrl100: 'https://is1-ssl.mzstatic.com/image/thumb/Video125/v4/2a/0c/0e/2a0c0ef1-6026-4659-f5f0-8f1f9a0b5e8a/source/100x100bb.jpg',
      trackName: 'Jumanji: Welcome to the Jungle',
      artistName: 'Jake Kasdan',
      trackPrice: 7.99,
      primaryGenreName: 'Action & Adventure',
      kind: 'feature-movie',
      likeStatus: true,
      description: 'Four teenagers in detention discover an old video console with a game they’ve never heard of. When',
      shortDescription: null,
      longDescription: 'Four teenagers in detention discover an old video console with a game they’ve never heard of. When they decide to play, they are immediately sucked into the jungle world of Jumanji in the bodies of their avatars (Dwayne Johnson, Jack Black, Kevin Hart, and Karen Gillan). They’ll have to complete the adventure of their lives filled with fun, thrills and danger or be stuck in the game forever!',
    },
  ];

  const setFavourites = jest.fn();

  const { getByText } = render(
    <FavouritesComponent favouritesProp={favourites} setFavouritesProp={setFavourites} />
  );

  expect(getByText('Upside Down')).toBeInTheDocument();
  expect(getByText((content, element) => element.tagName.toLowerCase() === 'h5' && content.includes('Jack Johnson'))).toBeInTheDocument();
  expect(getByText('Jumanji: Welcome to the Jungle')).toBeInTheDocument();
  expect(getByText((content, element) => element.tagName.toLowerCase() === 'h5' && content.includes('Jake Kasdan'))).toBeInTheDocument();
});