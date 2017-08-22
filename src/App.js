import React, { Component } from 'react';
import {view as Table} from './table/index';
import {view as Player} from './player/index';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Table/>
          <Player/>
        </div>

    );
  }
}

export default App;
