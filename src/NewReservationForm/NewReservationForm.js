import React from 'react'
import './NewReservationForm.css'

class NewReservationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <form onSubmit={() => {this.props.addNewReservation(this.state)}} data-testid="form">
        <input
          type='text'
          name='name'
          placeholder="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          type='date'
          name='date'
          placeholder="date"
          onChange={this.handleChange}
          value={this.state.date}
        />
        <input
          type='number'
          name='number'
          onChange={this.handleChange}
          value={this.state.number}
        />
        <select value={this.state.time} onChange={this.handleChange} name='time'>
          <option value="7:00">7:00</option>
          <option value="7:30">7:30</option>
          <option value="8:00">8:00</option>
          <option value="8:30">8:30</option>
          <option value="9:00">9:00</option>
        </select>
        <button>Create Reservation</button>
      </form>
    )
  }
}

export default NewReservationForm;
