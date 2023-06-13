// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {listsArrow, onDisplay} = props
  const {suggestion} = listsArrow
  const onChange = () => {
    onDisplay(suggestion)
  }

  return (
    <li className="suggestion-container">
      <p className="suggestion">{suggestion}</p>
      <img
        onClick={onChange}
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="icon"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
