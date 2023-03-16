import React from 'react';
import './App.css';
import Color from './Color';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      // colors: ['red', 'blue', 'green', 'yellow'],
      selectedColor: '',
    }
  }

  updateSelectedColor = (color) => {
    this.setState({ selectedColor: color })
  }

  render() {
    const colors = ['red', 'blue', 'green', 'yellow']
    return <>
      <div className='div-container' style={{ backgroundColor: this.state.selectedColor }}>
        {
          colors.map(color => {
            return <Color color={color} updateSelectedColor={this.updateSelectedColor} />
          })
        }
      </div>
    </>
  }
}

export default App;