import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test("renders Hello, World!", () => {
  const { getByText } = render(<App />)
  const helloElement = getByText(/Hello, World!/)
  expect(helloElement).toBeInTheDocument()
  expect(helloElement.tagName).toEqual("H1")
})
