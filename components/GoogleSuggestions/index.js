// Write your code here
import {Component} from 'react'

import Item from '../SuggestionItem/index'

import './index.css'

class GoogleSuggestions extends Component {
  state = {input: '', value: 'Search Google'}

  searchInput = event => {
    this.setState({input: event.target.value})
  }

  display = suggestion => {
    this.setState({value: suggestion})
    this.setState({input: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {input, value} = this.state

    const suggestionList = suggestionsList.filter(item =>
      item.suggestion.toLowerCase().includes(input.toLowerCase()),
    )

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="goo"
        />
        <div className="card">
          <div className="box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search"
            />
            <input
              type="search"
              placeholder={value}
              className="textbox"
              onChange={this.searchInput}
            />
          </div>
          <ul className="list-container">
            {suggestionList.map(eachItem => (
              <Item
                suggestionsList={eachItem}
                key={eachItem.id}
                display={this.display}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
