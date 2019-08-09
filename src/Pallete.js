import React, { Component } from 'react'
import ColorBox from './ColorBox';
import './Pallete.css';
import Navbar from './Navbar';

class Pallete extends Component{
    constructor(props){
        super(props);
        this.state = {level:500, format: "hex"}
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level){
        this.setState({level});
    }

    changeFormat(val){
        this.setState({format: val});
    }
    

    render(){
        const {colors} = this.props.palette;
        const {level, format} = this.state;
        const colorBoxes = colors[level].map( color => (
            <ColorBox background={color[format]} name={color.name} />
        ));
        return(
            <div className="Pallete">
                <Navbar level={level} changeLevel={this.changeLevel} handleClick={this.changeFormat} />
                {/* Header */}
                    <div className="Pallete-colors">
                        {colorBoxes}
                    </div>

                {/* Footer */}
            </div>
        );
    }
}

export default Pallete;