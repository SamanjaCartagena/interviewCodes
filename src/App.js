import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';


export class App extends Component {
  
  constructor(props){
    super(props)
    this.state={
      message:"Welcome to React World!"
    }
    
    this.activate= this.activate.bind(this);
    
  }
    activate() {
      this.setState(state =>({
        message:"Hi"
      }));
   }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.activate}>Click</button>
      </div>
    )
  }
}

export default App

