import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render, waitForElement } from '@testing-library/react'; 
import '@testing-library/jest-dom'


describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('It should render the text that we expect', async () => {
    const { getByText } = render(<App />)

    await waitForElement(() => getByText("Christie"))

    expect(getByText("Christie")).toBeInTheDocument();
    expect(getByText("12/29")).toBeInTheDocument();
    expect(getByText("Leta")).toBeInTheDocument();
    expect(getByText("4/5")).toBeInTheDocument();
  })
})
