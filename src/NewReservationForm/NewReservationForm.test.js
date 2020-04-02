import React from 'react'
import  { render, fireEvent } from '@testing-library/react'; 
import NewReservationForm from './NewReservationForm.js';
 import '@testing-library/jest-dom'

describe('NewReservationForm', () => {
  it('should render a new reservation form to the page', () => {
    const newReservation = jest.fn();
    const { getByPlaceholderText } = render(<NewReservationForm />)

    expect(getByPlaceholderText('name')).toBeInTheDocument();
  })

  it('should invoke the handleClick method on submission', () => {
    const newReservation = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <NewReservationForm />)

    fireEvent.change(getByPlaceholderText(/name/i), { target: { value: 'name' } })
    fireEvent.click(getByText("Create Reservation"));

    expect(newReservation).toHaveBeenCalled()
  })
})
