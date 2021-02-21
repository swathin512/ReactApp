import React from 'react';
import ReactDOM from 'react-dom';
import './Theme.css';

const green = '#39D1B4';
const yellow = '#FFD712';
const red = '#F44E3B';

export default class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
    this.changeColor1 = this.changeColor1.bind(this);
  }
  changeColor(){
    const newColor = this.state.color == green ? red : green;
    this.setState({ color: newColor })
  }
   changeColor1(){
    const newColor1 = this.state.color == green ? yellow : green;
    this.setState({ color: newColor1 })
  }
  render(){
    return(
      <div style={{background: this.state.color}}>
      <h1>Change color</h1>
      <button onClick={this.changeColor}>ClickToChange</button>
      <button onClick={this.changeColor1}>ClickToChange</button>
      </div>
    )
  }
}
ReactDOM.render(<Toggle />, document.getElementById('root'))
