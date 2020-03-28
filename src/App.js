import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      repeat: ""
    }
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange={this.updateRepeater.bind(this)} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.repeat}</p>
      </div>
    );
  }

  updateRepeater(event){
    this.setState({
      repeat: event.target.value
    });
  }

}

export default App;
