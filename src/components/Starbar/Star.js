import React, { Component } from 'react';

class Star extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:this.props.value,
    }
  }
  handleMouseEnter(){
    this.props.onStarHover(this.state.value)
  }

  render(){
    if (this.props.highlight === false){
      return(
        <span className="star" onMouseOver={event=> this.handleMouseEnter()} > &#9734; </span>
      )
    }

    if (this.props.highlight === true){
      return(
        <span className="star" onMouseOver={event=> this.handleMouseEnter()}> &#9733; </span>
      )
    }
  }
}
export default Star;
