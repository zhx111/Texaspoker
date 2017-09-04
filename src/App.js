import React, { Component } from 'react';
import {view as Table} from './table/index';
import {view as Player} from './player/index';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            players:[]
        }
    }

    handleCount(players){
        this.setState({
            players:players
        });
    }

    render() {
      return (
          <div>
            <Table onHandleCount={this.handleCount.bind(this)}/>
            <Player players={this.state.players}/>
          </div>
      );
    }
}

export default App;
