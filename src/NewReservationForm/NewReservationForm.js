import React from 'react'
import './NewReservationForm.css'

class NewReservationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }

  render() {
    return (
      <form onSubmit={this.props.addNewReservation} data-testid="form">
        <input type='text' placeholder="name" />
        <button>Create Reservation</button>
      </form>
    )
  }
}

export default NewReservationForm;
