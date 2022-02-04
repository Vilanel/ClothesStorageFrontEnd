import React from 'react';
import './ColorsBlock.scss';

class ColorsBlock extends React.Component{
  changeColor = (colorCode,colorName) => {
    this.props.changeColor(colorCode,colorName);
  }
  colorButtons = this.props.colors.map((el)=>{
    let buttonColor = {backgroundColor:el[0]};
    return (<span>
      <button className='color-button'
              style={buttonColor}
              onClick={()=>{this.changeColor(el[0],el[1])}}></button>
    </span>);
  })
  render(){
    return (
      <div>
        COLORS: {this.props.currentColor[1]}<br/>
        {this.colorButtons}
      </div>
    );
  } 
}

export default ColorsBlock;