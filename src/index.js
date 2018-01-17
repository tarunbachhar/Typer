import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Time from './components/Time'
import Textarea from './components/Textarea'
import Results from './components/Results'
import Data from './data.json'

window.i =0;
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      paragraph:[],
      onscreen:"",
      seconds:"",
      id:"",
      time:"0:00",
      totalentry:0,
      correct:0,
      incorrect:0,
      accuracy:0,
      grossWPM:0,
      id2:"",
      netWPM:0
    }
    this.swipeRight = this.swipeRight.bind(this);
    this.swipeLeft = this.swipeLeft.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.clearTimer=this.clearTimer.bind(this);
    this.timeShift = this.timeShift.bind(this);
  }
  componentDidMount(){
    this.setState({
      paragraph:Data
    })
  }
  componentWillUnmount(){
    this.setState({
      paragraph:[]
    })
  }
  swipeRight(){
    var m = this.state.paragraph;
    this.setState({
      onscreen:m[i]
    })
    if(i<m.length-1){
      i++;
    }
    else{
      i=0;
    }
  this.clearTimer();
  this.setHolder();
  this.setState({
    totalentry:0,
    correct:0,
    incorrect:0,
    accuracy:0,
    grossWPM:0,
    netWPM:0
  })
  }
  setHolder(){
    let t = document.getElementById("text2");
    t.value=""
  }
  swipeLeft(){
    var m = this.state.paragraph;
    if(i>0){
      i--;
    }
    else{
      i=m.length;
    }
    this.setState({
      onscreen:m[i]
    })
    this.clearTimer();
    this.setHolder();
    this.setState({
      totalentry:0,
      correct:0,
      incorrect:0,
      accuracy:0,
      grossWPM:0,
      netWPM:0
    })
  }
  startTimer(){
    var seconds= 1;
    var giz = 1;
    var t;
    var time;
    var wpm;
    t =setInterval(  function add(){
      time = Math.floor(seconds/60) + ':' + ('0'+seconds%60).slice(-2)
        seconds +=1;
        this.setState({
          seconds:seconds,
          id:t,
          time:time
        })
      }.bind(this),1000)
    wpm = setInterval(function ggg(){
      let m = this.state.totalentry;
      let cc = this.state.incorrect;
      let tt = ((m/5)/giz).toFixed(2)
      let sil = (tt - (cc)/giz).toFixed(2)
      giz+=1;
      this.setState({
        id2:wpm,
        grossWPM:tt,
        netWPM:sil
      })
    }.bind(this),1000*60)
  }
  stopTimer(){
    clearInterval(this.state.id)
    clearInterval(this.state.id2)
  }
  clearTimer(){
    clearInterval(this.state.id)
    clearInterval(this.state.id2)
    this.setState({
      time:"0:00",
      seconds:0
    })
  }
  timeShift(u){
    let m = this.state.onscreen.length;
    let mal = this.state.onscreen;
    let co = mal.split(" ");
    let gen=u;
    let inco = gen.split(" ");
    let c,inc;
    c=inc=0;
    let accuracy=0;
    switch (u.length) {
      case 1:
        this.startTimer();
        break;
      case m:
        this.stopTimer();
        break;
    }
    for(let i=0; i<inco.length; i++){
      let cam = co[i];
      let sam = inco[i];
      let camm =  cam.split("")
      let samm = sam.split("")
      for(let j=0; j<camm.length; j++){
        if(camm[j]==samm[j]){
          c++;
        }
        else{
          inc++;
        }
      }
      c++;
    }
    c = c-1;
    accuracy = ((c/m)*100).toFixed(2)+" %";
    this.setState({
      totalentry:u.length,
      correct:c,
      incorrect:inc,
      accuracy:accuracy
    })
  }
  render(){
    return(
      <div>
      <h3>Type   text  from left box to right box</h3>
       <Time setTime={this.startTimer}
             time = {this.state.time}
             stopTime={this.stopTimer}
             clearTime={this.clearTimer}
       />
       <Textarea
       para = {this.state.onscreen}
       rightClick= {this.swipeRight}
       leftClick = {this.swipeLeft}
       textTimer = {this.timeShift}
       />
       <Results
       total = {this.state.totalentry}
       correct={this.state.correct}
       incorrect={this.state.incorrect}
       accuracy = {this.state.accuracy}
       grossWPM={this.state.grossWPM}
       netWPM = {this.state.netWPM}
       />
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))
