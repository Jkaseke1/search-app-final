
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchComponent from '../SearchComponent';
import '@testing-library/jest-dom';

test('SearchComponent renders correctly', () => {
  const searchStore = { typedInput: '' };
  const setSearchStore = jest.fn();
  const spin = false;
  const setSpin = jest.fn();
  const searchFunc = jest.fn();

  const { getByPlaceholderText, getByText } = render(
    <SearchComponent
      searchStoreProp={searchStore}
      setSearchStoreProp={setSearchStore}
      spinProp={spin}
      setSpinProp={setSpin}
      searchFuncProp={searchFunc}
    />
  );

  expect(getByPlaceholderText('movie, music, podcast, ...')).toBeInTheDocument();
  expect(getByText('SEARCH')).toBeInTheDocument();
});

test('SearchComponent calls searchFunc on search button click', () => {
  const searchStore = { typedInput: 'test' };
  const setSearchStore = jest.fn();
  const spin = false;
  const setSpin = jest.fn();
  const searchFunc = jest.fn();

  const { getByText } = render(
    <SearchComponent
      searchStoreProp={searchStore}
      setSearchStoreProp={setSearchStore}
      spinProp={spin}
      setSpinProp={setSpin}
      searchFuncProp={searchFunc}
    />
  );

  fireEvent.click(getByText('SEARCH'));
  expect(searchFunc).toHaveBeenCalled();
});
