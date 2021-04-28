// Write you Code here
import {Component} from 'react'
import Filters from '../Filters'
import InterviewQuestion from '../InterviewQuestion'
import './index.css'

class InterviewQuestionsApp extends Component {
  state = {level: 'ALL', lang: 'ALL'}

  onChangeDifficultyLevel = e => {
    this.setState({level: e.target.value})
    console.log(e.target.value)
  }

  onChangeLanguage = e => {
    this.setState({lang: e.target.value})
  }

  renderHeading = () => <h1>30 Seconds of Interviews</h1>

  render() {
    const {questionsData, levelsData, languageData} = this.props
    const {level, lang} = this.state
    return (
      <div className="bg">
        {this.renderHeading()}
        <div className="row-2">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/interview-questions-img.png"
            alt="img"
          />
        </div>
        <div>
          <p>
            <Filters
              levelsData={levelsData}
              languageData={languageData}
              onChangeDifficultyLevel={this.onChangeDifficultyLevel}
              onChangeLanguage={this.onChangeLanguage}
            />
            {questionsData.map(question => {
              const {language, difficultyLevel} = question
              let ans
              if (level === 'ALL' && lang === 'ALL') {
                ans = <InterviewQuestion question={question} />
              } else if (difficultyLevel === level && lang === 'ALL') {
                ans = <InterviewQuestion question={question} />
              } else if (language === lang && level === 'ALL') {
                ans = <InterviewQuestion question={question} />
              } else if (language === lang && difficultyLevel === level) {
                ans = <InterviewQuestion question={question} />
              }
              return ans
            })}
          </p>
        </div>
      </div>
    )
  }
}

export default InterviewQuestionsApp
