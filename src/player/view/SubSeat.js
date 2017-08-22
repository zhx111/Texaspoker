/**
 * Created by zhx on 2017/8/19.
 */
import React,{Component} from 'react';

class SubSeat extends Component{
    render(){
        return (
            <div className="sub-seat">
                <div className="seat-userinfo">
                    <div className="favicon">
                        <span>头像</span>
                    </div>
                    <div className="chip">
                        <div>
                            1000
                        </div>
                    </div>
                </div>
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