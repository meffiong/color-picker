import React, {Component} from 'react';
import './App.css';
import Pallete from './Pallete';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Pallete palette={ generatePalette( seedColors[2]) }/>
      </div>
    )
  }
}

export default App;
