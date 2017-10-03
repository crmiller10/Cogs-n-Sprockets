import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Starbar from './components/Starbar/Starbar';
import DropdownMenu from './components/Dropdown/DropdownMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <section>
            <Starbar />
          </section>
          <section>
            <DropdownMenu />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
