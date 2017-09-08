/**
 * Created by zhx on 2017/8/19.
 */
import React,{Component} from 'react';
import Card from '../../Component/Card';
import UserInfo from './UserInfo';
import UserControl from './UserControl';
import Pokers from '../../util/Pokers';

class MainSeat extends Component{
    renderCard(){
        const {cards} = this.props;
        return cards.map((item,index)=>{
            const value = Pokers.encodeCard(item)[0];
            const type = Pokers.encodeCard(item)[1];
            return (
                <Card value={value} type={type} key={index}/>
            )
        });
    }

    render(){

        return (
            <div className="main-seat">
                <UserInfo/>
                <div className="seat-usercard">
                    {this.renderCard()}
                </div>
                <UserControl/>
            </div>
        )
    }
}

export default MainSeat;