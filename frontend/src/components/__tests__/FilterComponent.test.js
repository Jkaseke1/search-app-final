
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FiltersComponent from '../FiltersComponent';
import '@testing-library/jest-dom';

test('FiltersComponent renders correctly', () => {
  const setSearchStoreProp = jest.fn();
  const searchFuncProp = jest.fn();

  const { getByText } = render(
    <FiltersComponent setSearchStoreProp={setSearchStoreProp} searchFuncProp={searchFuncProp} />
  );

  expect(getByText('movie')).toBeInTheDocument();
  expect(getByText('music')).toBeInTheDocument();
  expect(getByText('podcast')).toBeInTheDocument();
});

test('FiltersComponent calls searchFuncProp on filter click', () => {
  const setSearchStoreProp = jest.fn();
  const searchFuncProp = jest.fn();

  const { getByText } = render(
    <FiltersComponent setSearchStoreProp={setSearchStoreProp} searchFuncProp={searchFuncProp} />
  );

  fireEvent.click(getByText('movie'));
  expect(searchFuncProp).toHaveBeenCalledWith('movie');
});
