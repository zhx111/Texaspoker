/**
 * Created by zhx on 2017/8/19.
 */
import React,{Component} from 'react';
import Card from '../../Component/Card';
import UserInfo from './UserInfo';
import UserControl from './UserControl';

class MainSeat extends Component{
    render(){
        return (
            <div className="main-seat">
                <UserInfo/>
                <div className="seat-usercard">
                    <Card type={1} value={11}/>
                    <Card type={0} value={10}/>
                </div>
                <UserControl/>
            </div>
        )
    }
}

export default MainSeat;