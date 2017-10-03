import React, { Component } from 'react';

class Navlink extends Component {

  handleOnClick(){
    this.props.onClick(this.props.page)
  }

  render(){
    let NavLink = null;

    if(this.props.active !== this.props.page){
      NavLink = {
        display: "block",
        padding: ".5rem 1rem",
        color: "#fff",
        // transition: "ease all .1s",
        cursor: "pointer"
      }
    }
    if(this.props.active === this.props.page){
      NavLink = {
        display: "block",
        padding: ".5rem 1rem",
        cursor: "pointer",
        // transition: "ease all .1s",
        color: "#54CBEE"
      }
    }

    return(
      <a style={NavLink} onClick={()=> this.handleOnClick()}>{this.props.page}</a>
    )
  }
}

export default Navlink;
