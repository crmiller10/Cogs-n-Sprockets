import React, { Component } from 'react';

import DropdownItem from './DropdownItem';

class DropdownMenu extends Component{
  constructor(props){
    super(props);

    this.state = {
      visible: false,
    }
  }

  handleDropdown(){
    if(this.state.visible===false){
      this.setState({
        visible: true,
      })
    }

    if(this.state.visible === true){
      this.setState({
        visible: false,
      })
    }
  }

  render(){

    if (this.state.visible === false){
      return(
        <div className="dropdown">
          <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton"onClick={event=>this.handleDropdown()}>
            <span className="mr-1">File</span>
          </button>
        </div>
      )
    }

    if(this.state.visible === true){
      return(
        <div className="dropdown">
          <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" onClick={()=>this.handleDropdown()}><span className="mr-1">File</span></button>
          <div className="dropdown-menu">
           <DropdownItem name='New' message="Create New File "/>
           <DropdownItem name='Save' message="Save File As..."/>
           <DropdownItem name='Exit' message="Close File"/>
         </div>
        </div>
      )
    }
  }
}

export default DropdownMenu;