import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';

class App extends Component {
  
  constructor() {
    super()
    this.state={
      selected: 'circleOne'
    }
  }

  handleSelect = (circle) => {
    this.setState({
      selected: circle
    })
  }

  sectionStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: "url(https://images.unsplash.com/photo-1533709752211-118fcaf03312?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)",
  };
  
  
  render() {
    return (
      <div className="App" style={this.sectionStyle}>
        <header className="App-header">Alex Pensavalle - SEI-9 UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
              selected={this.state.selected}
              handleSelect={this.handleSelect}
            />
          <Circles
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
}

export default App;
