// Write you Code here
import {Component} from 'react'

import './index.css'

class InterviewQuestion extends Component {
  state = {ans: undefined, status: false}

  showAnswer = () => {
    const {status} = this.state
    const {question} = this.props
    const {answerText} = question
    if (status) {
      this.setState({ans: undefined, status: false})
    } else {
      this.setState({ans: answerText, status: true})
    }
  }

  render() {
    const {question} = this.props
    const {questionText, language, difficultyLevel} = question
    const {status, ans} = this.state
    return (
      <div className="question">
        <div className="row">
          <span className={`${language} lan`}>{language}</span>
          <span className={`${difficultyLevel} lev`}>{difficultyLevel}</span>
        </div>
        <h1>{questionText}</h1>
        <div>
          <button type="button" onClick={this.showAnswer}>
            {status ? 'Hide' : 'Show'}
            <img
              src={
                status
                  ? 'https://assets.ccbp.in/frontend/react-js/up-arrow.png'
                  : 'https://assets.ccbp.in/frontend/react-js/down-arrow.png'
              }
              alt={status ? 'up arrow' : 'down arrow'}
            />{' '}
          </button>
        </div>
        <div>{status ? ans : ''}</div>
      </div>
    )
  }
}
export default InterviewQuestion
