import React, { Component } from "react"

class DropDownSearch extends Component {
  state = {
    items: this.props.items
  }
  handleChange = e => {
    const { value } = e.target
    const { items } = this.props
    // items.forEach(element => {
    //   console.log(element)
    // })
    const results = items.filter((item, index) => {
      return item.label.toLowerCase().includes(value.toLowerCase())
    })
    this.setState({ items: results })
  }
  render() {
    const { placeholder } = this.props
    return (
      <div className="dropdown-search-box">
        <input
          type="search"
          className="dropdown-search dropdown-search--open"
          placeholder={placeholder}
          onChange={this.handleChange}
        />
        <div className="dropdown-search-results-box">
          {this.state.items.map((item, index) => {
            return (
              <div key={item.value} className="dropdown-search-result">
                {item.label}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default DropDownSearch
