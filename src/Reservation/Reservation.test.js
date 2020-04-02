import React from 'react'
import { render } from '@testing-library/react'; 
import Reservation from './Reservation.js';
 import '@testing-library/jest-dom'

describe('Reservation', () => {
  it('It should render the text that we expect', () => {
    const { getByText } = render(<Reservation
      reservation={{
        "id": 1,
        "name": "Christie",
        "date": "12/29",
        "time": "7:00",
        "number": 14
    }}
    />);

    expect(getByText("Christie")).toBeInTheDocument();
    expect(getByText("12/29")).toBeInTheDocument();
    expect(getByText("7:00")).toBeInTheDocument();
    expect(getByText("14")).toBeInTheDocument();
  })
})
