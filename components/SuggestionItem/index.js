// Write your code here
import './index.css'

const Item = props => {
  const {suggestionsList, display} = props
  const {id, suggestion} = suggestionsList
  const check = () => {
    display(suggestion)
  }
  return (
    <li className="item">
      <p className="list-item">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="pic"
        onClick={check}
      />
    </li>
  )
}

export default Item
