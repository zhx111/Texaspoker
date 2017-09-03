import React,{Component} from 'react';
import PubCardArea from './PubCardArea';
import ChipArea from './ChipArea';
import GameOption from './GameOption';

class Table extends Component{
    render(){
        return (
            <div className="card-table">
                <ChipArea/>
                <PubCardArea/>
                <GameOption/>
            </div>
        )
    }
}

export default Table;