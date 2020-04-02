import React from 'react'
import './Reservation.css'

function Reservation({ reservation }) {
  return (
    <section>
      <h3>{reservation.name}</h3>
      <p>{reservation.date}</p>
      <p>{reservation.time}</p>
      <p>{reservation.number}</p>
    </section>
  )
}

export default Reservation;
