import React from 'react';
import {render} from '@testing-library/react';

import Main from './Main';

test('Find Home link', () => {
  const { getByText } = render(<Main />);
  expect(getByText(/Home/i).closest('a')).toHaveAttribute('href', '#')
});

test('Make sure there is a title', () => {
  const { getByText } = render(<Main />);
  const title = getByText(/Student Report/i)
  expect(title).toBeInTheDocument()
})

test("Check if table has student name", () => {
  const {getByText} = render(<Main />);
  const name = getByText(/Student Name/i)
  expect(name).toBeInTheDocument()
})

test("check for student grade", () => {
    const {getByText} = render(<Main />)
    const grade = getByText(/Grade/i)
    expect(grade).toBeInTheDocument()
})

