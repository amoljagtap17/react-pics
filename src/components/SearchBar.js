import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    term: ''
  }

  onInputChange = ({ target: { value } }) => {
    this.setState({ term: value })
  }

  onFormSubmit = event => {
    event.preventDefault()

    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
