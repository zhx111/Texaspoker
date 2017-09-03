/**
 * Created by zhx on 2017/8/19.
 */
import React,{Component} from 'react';
import UserInfo from './UserInfo';
class SubSeat extends Component{
    render(){
        return (
            <div className="sub-seat">
                <UserInfo/>
                <div className="seat-usercard">
                   <div className="hasCards">
                       两张牌
                   </div>
                </div>
            </div>
        )
    }
}

export default SubSeat;