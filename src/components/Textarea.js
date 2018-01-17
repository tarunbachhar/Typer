import React from 'react'
import Right from '.././images/right2.png'
import Left from '.././images/left2.png'

class Textarea extends React.Component{
  constructor(props){
    super(props)
    this.handleRight = this.handleRight.bind(this)
    this.handleLeft = this.handleLeft.bind(this)
    this.textTime = this.textTime.bind(this)
  }

  handleRight(){
    this.props.rightClick();
  }
  handleLeft(){
    this.props.leftClick();
  }
  textTime(){
    var m = this.refs.readtext2.value;
    this.props.textTimer(m);
  }
  render(){
    return(
      <div>
      <form className="form-horizontal">
       <div className="form-group">
       <textarea name="textarea" className="textarea1"  cols="58" rows="12" type="text" ref="readtext1" value={this.props.para} disabled></textarea>
       <textarea name="textarea" className="textarea2" cols="58" rows="12" type="text" ref="readtext2" onChange={this.textTime}  placeholder="Type Here" id="text2"></textarea>
       </div>
      </form>
      <div className="battan">
       <button className="btn btn-danger bt1" onClick={this.handleLeft}><strong><img src={Left} alt="image" /></strong></button>
       <button className="btn btn-danger bt2" onClick={this.handleRight}><strong><img src={Right}  alt="image"/></strong></button>
      </div>
      </div>
    )
  }
}

module.exports = Textarea
