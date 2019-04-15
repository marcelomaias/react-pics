import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    term: ''
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.term)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label htmlFor="search">Search</label>
          <input type="text" name="term" id="seach" value={this.state.term} onChange={this.handleInput} />
        </div>
      </form>
    )
  }
}

export default SearchBar
