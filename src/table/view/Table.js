import React,{Component} from 'react';
import PubCardArea from './PubCardArea';
import ChipArea from './ChipArea';
import GameOption from './GameOption';
import Game from '../../util/Game';

class Table extends Component{
    handleGame(state){
        let g = new Game(this.generateOptions(state));
        this.props.onHandleCount(g.players);
        g.start();
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
            <div className="card-table">
                <ChipArea/>
                <PubCardArea/>
                <GameOption handleGame={this.handleGame.bind(this)}/>
            </div>
        )
    }
}

export default Table;