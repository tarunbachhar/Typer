import React from 'react'

class Time extends React.Component{
  render(){
    return(
      <div>
      <h3 className="time">Time  :  {this.props.time}</h3>
      </div>
    )
  }
}

module.exports = Time
