import React, {Component} from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider, { Range } from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';
import './Navbar.css';


class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {format: "hex"};
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    this.setState({format: e.target.value})
    this.props.handleClick(e.target.value)
  }

  render(){
    const {changeLevel, level, handleClick} = this.props;
    const {format} = this.state;

    return (
      <header className="Navbar">
        <div className="logo">
            <a href="#">reactColorPicker</a>
        </div>
        <div className="slider-container">
            <span>Level: {level}</span>
            <div className="slider">
                <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
            </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleClick}>
            <MenuItem value="hex">HEX- #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - (255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA- (255,255,255, 1.0)</MenuItem>
          </Select>
        </div>
      </header>
    )
  }
}

export default Navbar;
