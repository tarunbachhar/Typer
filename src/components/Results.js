import React from 'react'

class Results extends React.Component{
  render(){
    return(
      <div>
      <div>
      <h3 className="speed"><strong>Net WPM : &nbsp; &nbsp;{this.props.netWPM}</strong></h3>
      <h3 className="accuracy"><strong>Accuracy : &nbsp; &nbsp;{this.props.accuracy}</strong></h3>
      <h3 className="wpm"><strong>Gross WPM : &nbsp; &nbsp; {this.props.grossWPM}</strong></h3>
      </div>
      <div>
      <h3 className="speed1"><strong>Correct entries : &nbsp; &nbsp; {this.props.correct}</strong></h3>
      <h3 className="accuracy1"><strong>Incorrect Entries : &nbsp; &nbsp; {this.props.incorrect}</strong></h3>
      <h3 className="wpm1"><strong>Total Entries: &nbsp; &nbsp; {this.props.total}</strong></h3>
      </div>
      </div>
    )
  }
}

module.exports = Results
