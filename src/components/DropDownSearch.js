import React, { Component } from "react"
import Downshift from "downshift"

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
  selectItem = item => {
    console.log(item)
  }
  render() {
    const { placeholder } = this.props
    return (
      <Downshift
        itemToString={item => (item === null ? "" : item.label)}
        onChange={this.selectItem}
      >
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          highlightedIndex
        }) => (
          <div className="dropdown-search-box">
            <input
              {...getInputProps({
                type: "search",
                className: `dropdown-search ${
                  isOpen ? "dropdown-search--open" : ""
                }`,
                placeholder: placeholder,
                onChange: this.handleChange
              })}
            />
            {isOpen && (
              <div className="dropdown-search-results-box">
                {this.state.items.map((item, index) => {
                  return (
                    <div
                      {...getItemProps({
                        item,
                        highlighted: index === highlightedIndex ? 1 : 0,
                        index,
                        key: item.value,
                        className: `dropdown-search-result ${
                          index === highlightedIndex
                            ? "dropdown-search-result--highlighted"
                            : ""
                        }`
                      })}
                    >
                      {item.label}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}
      </Downshift>
    )
  }
}

export default DropDownSearch
