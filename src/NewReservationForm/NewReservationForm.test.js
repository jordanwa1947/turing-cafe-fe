import React from 'react'
import  { render, fireEvent } from '@testing-library/react'; 
import NewReservationForm from './NewReservationForm.js';
 import '@testing-library/jest-dom'

describe('NewReservationForm', () => {
  it('should render a new reservation form to the page', () => {
    const newReservation = jest.fn();
    const { getByPlaceholderText, getByText } = render(<NewReservationForm />)

    expect(getByPlaceholderText('name')).toBeInTheDocument();
    expect(getByPlaceholderText('date')).toBeInTheDocument();
    expect(getByPlaceholderText('name')).toBeInTheDocument();
    expect(getByText("Create Reservation")).toBeInTheDocument();
  })

  it('should invoke the handleClick method on submission', () => {
    const newReservation = jest.fn();
    const { getByTestId, getByPlaceholderText, getByText } = render(
      <NewReservationForm addNewReservation={newReservation}/>
    )

    fireEvent.change(getByPlaceholderText(/name/i), { target: { value: 'name' } })
    fireEvent.submit(getByTestId("form"));
    fireEvent.click(getByText("Create Reservation"));

    expect(newReservation).toHaveBeenCalled()
  })
})
