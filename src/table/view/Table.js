import React,{Component} from 'react';
import PubCardArea from './PubCardArea';
import ChipArea from './ChipArea';
import GameOption from './GameOption';
import Game from '../../util/Game';
import {view as PlayerArea} from '../../player/index';

class Table extends Component{
    state = {
        publicCards:[],
        players:[],
        singleCards:[],
    }
    handleGame(state){
        let g = new Game(this.generateOptions(state));
        g.start();
        this.setState({
            publicCards:g.sendPublic(),
            players:g.players,
            singleCards:g.send(2)
        });
    }
    generateOptions(state){
        let options = {};
        options.count = parseInt(state.joinPeople,10);
        options.blinds = {
            big:parseInt(state.blinds.split("/")[1],10),
            small:parseInt(state.blinds.split("/")[0],10)
        };
        options.players = [];
        for(let i=0;i<options.count;i++){
            options.players.push({
                id:i,
                name:i,
                chip:1000,
            })
        }
        return options;
    }
    render(){
        return (
            <div>
                <div className="card-table">
                    <ChipArea/>
                    <PubCardArea cards={this.state.publicCards}/>
                    <GameOption handleGame={this.handleGame.bind(this)}/>
                </div>
                <PlayerArea players={this.state.players} cards={this.state.singleCards}/>
            </div>
        )
    }
}

export default Table;