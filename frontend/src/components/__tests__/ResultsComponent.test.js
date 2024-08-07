import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ResultsComponent from '../ResultsComponent';
import '@testing-library/jest-dom';

test('ResultsComponent renders correctly', () => {
  const apiData = [
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
  ];

  const likeUnlikeFuncProp = jest.fn();

  const { getByText } = render(
    <ResultsComponent apiDataProp={apiData} likeUnlikeFuncProp={likeUnlikeFuncProp} spinProp={false} />
  );

  expect(getByText('Upside Down')).toBeInTheDocument();
  expect(getByText((content, element) => element.tagName.toLowerCase() === 'h5' && content.includes('Jack Johnson'))).toBeInTheDocument();
});

test('ResultsComponent calls likeUnlikeFuncProp on like click', () => {
  const apiData = [
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
  ];

  const likeUnlikeFuncProp = jest.fn();

  const { getByText } = render(
    <ResultsComponent apiDataProp={apiData} likeUnlikeFuncProp={likeUnlikeFuncProp} spinProp={false} />
  );

  fireEvent.click(getByText('Unlike'));
  expect(likeUnlikeFuncProp).toHaveBeenCalled();
});
