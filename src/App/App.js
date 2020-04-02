import React, { Component } from 'react';
import Reservation from '../Reservation/Reservation';
import NewReservationForm from '../NewReservationForm/NewReservationForm';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  addNewReservation = (reservation) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then(response => response.json())
      .then(responseJSON => {
        console.log(responseJSON)
      })
      .catch(err => console.log(err.message))
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(reservations => {
        this.setState({
          reservations: reservations
        })
      })
  }

  buildReservationComponent(reservations) {
    return this.state.reservations.map(reservation => {
      return <Reservation key={reservation.id} reservation={reservation}/>
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <NewReservationForm addNewReservation={this.addNewReservation}/>
          {this.buildReservationComponent()}
        </div>
      </div>
    )
  }
}

export default App;
