import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentslide: 0,
    }
  }

  render() {
    let slides = [{ title: "title 1", description: "description 1" }, { title: "title 2", description: "description 2" },
    { title: "title 3", description: "description 3" }, { title: "title 4", description: "description 4" }]
    return (
      <div>
        <h1>{slides[this.state.currentslide].title}</h1>
        <h3>{slides[this.state.currentslide].description}</h3>

        <div>
          <button onClick={() => {
            this.setState({ currentslide: this.state.currentslide - 1 })
          }} disabled={this.state.currentslide === 0}>Previous</button>
          <button onClick={() => {
            this.setState({ currentslide: this.state.currentslide + 1 })
          }} disabled={this.state.currentslide === slides.length - 1}>Next</button>
        </div>
      </div>
    )
  }
}

export default App;
