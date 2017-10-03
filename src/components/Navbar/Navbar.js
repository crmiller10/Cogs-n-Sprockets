import React, { Component } from 'react';
import Navlink from './Navlink';
import logo from '../../logo.svg';


class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: "Home",
    }
  }

  handleLinkClick(pageName){
    this.setState({
      currentPage: pageName
    });
  }

  render(){
    return(
      <nav className="navbar navbar-expand-sm navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand" href="">
            <img src={logo} className="App-logo" alt="logo" width="50" height="50" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Navlink page="Home" active={this.state.currentPage} onClick={ (pageName) => this.handleLinkClick(pageName)}/>
              </li>
              <li className="nav-item">
                <Navlink page="Products" active={this.state.currentPage} onClick={ (pageName) => this.handleLinkClick(pageName)}/>
              </li>
              <li className="nav-item">
                <Navlink page="Services" active={this.state.currentPage} onClick={ (pageName) => this.handleLinkClick(pageName)}/>
              </li>
              <li className="nav-item">
                <Navlink page="About" active={this.state.currentPage} onClick={ (pageName) => this.handleLinkClick(pageName)}/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;