// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onDisplay = value => {
    const toUpper = value.toLowerCase()
    this.setState({searchInput: toUpper})
    console.log(toUpper)
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const updatedSearch = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput),
    )

    onchange = event => {
      this.setState({searchInput: event.target.value})
    }

    return (
      <div className="bg-container">
        <div className="google-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="logo"
            alt="google logo"
          />
          <div className="tag-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="icon"
              />
              <input
                className="search-bar"
                placeholder="Search Google"
                type="search"
                value={searchInput}
                onChange={onchange}
              />
            </div>

            <ul className="list-container">
              {updatedSearch.map(each => (
                <SuggestionItem
                  listsArrow={each}
                  key={each.id}
                  onDisplay={this.onDisplay}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
