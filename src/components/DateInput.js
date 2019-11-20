import React from 'react'

class DateInput extends React.Component {
  render() {
    return (
      <input
        type="text"
        className="form__input"
        placeholder="YYYY-MM-DD"
        value={this.props.date}
        onChange={this.props.selectDate}
      />
    )
  }
}
export default DateInput
