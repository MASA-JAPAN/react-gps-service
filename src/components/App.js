import React, { Component } from 'react';
import './App.css';

import Greeting from './greeting'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'Bob',
    }
  }

  handleMouseOver(){
    this.setState({name:"Bob"})
  }

  handleMouseOut(){
    this.setState({name:"Mike"})
  }

  handleNameChange(name){

    this.setState({name:name })

  }

  render() {
    return (
      <div className="App" onMouseOver={()=>this.handleMouseOver()} 
                           onMouseOut={()=>this.handleMouseOut()}>
        <input type = "text" 
        value={this.state.name} 
        onChange={(e) => this.handleNameChange(e.target.value)}/>
        <button onClick={()=>this.handleNameChange('Bobss')}>I am box</button>
        <Greeting name={this.state.name}/>
 
      </div>
    );
  }
}

export default App;
