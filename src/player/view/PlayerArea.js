/**
 * Created by zhx on 2017/8/19.
 */
import React,{Component} from 'react';
import MainSeat from './MainSeat';
import SubSeat from './SubSeat';

class PlayerArea extends Component{

    renderSeats(){
        const players = this.props.players;
        const count = players.length;
        const {cards} =  this.props;
        const seats = players.map((item)=>{
            if(item.id === Math.floor(count/2)){
                return (
                    <MainSeat key={item.id} cards={cards}/>
                )
            }else{
                return (
                    <SubSeat key={item.id}/>
                )
            }
        });
        return seats;
    }
    render(){
        return (
            <div>
                {this.renderSeats()}
            </div>
        )
    }
}

export default PlayerArea;