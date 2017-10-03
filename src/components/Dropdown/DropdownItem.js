import React, { Component } from 'react';

class DropdownItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      active: false
    }
  }

  handleItemHover(){
  if (this.state.active === false){
   this.setState({
     active: true,
   })
   }
   if (this.state.active === true){
     this.setState({
       active: false
     })
   }
  }

  //Add Select Color
  //Log dropdown item's message when clicked
  handleItemSelect(){
    console.log(this.props.message)
  }

  render(){

    let itemStyle = null;

    if (this.state.active === true){
       itemStyle = {
        backgroundColor: "#BABFD1",
        color: "#fff"
      }
    }

    if (this.state.active === false){
       itemStyle = {
        bacgroundColor: "#fff"
      }
    }

    return(
      <a className="dropdown-item"
      onMouseOver={event => this.handleItemHover()}
      onMouseLeave={() => this.handleItemHover()}
      onClick={()=> this.handleItemSelect()}
      style={itemStyle}> {this.state.name} </a>
    )
  }
}

export default DropdownItem;
