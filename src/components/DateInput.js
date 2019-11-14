import React from 'react'
import moment from 'moment'

class DateInput extends React.Component {
  constructor(props) {
    super(props)
    const today = moment().format('DD-MM-YYYY')
    console.log(today)
    this.state = {
      date: '',
    }
  }
  handleChange = e => {
    const { value } = e.target
    this.setState({ date: value })
  }
  render() {
    return (
      <input
        type="date"
        className="form__input"
        placeholder="MM-DD-YYYY"
        value={this.state.date}
        onChange={this.handleChange}
      />
    )
  }
}
export default DateInput
