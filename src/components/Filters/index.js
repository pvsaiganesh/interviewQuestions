// Write you Code here
import {Component} from 'react'

import './index.css'

class Filters extends Component {
  render() {
    const {onChangeDifficultyLevel, onChangeLanguage} = this.props
    return (
      <div>
        <span>LANGUAGE</span>
        <div>
          <select onChange={onChangeLanguage}>
            <option value="ALL">ALL</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JAVASCRIPT">JAVASCRIPT</option>
          </select>
        </div>
        <span>DIFFICULTY LEVEL</span>
        <div>
          <select onChange={onChangeDifficultyLevel}>
            <option value="ALL">ALL</option>
            <option value="EASY">EASY</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HARD">HARD</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Filters
