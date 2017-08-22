/**
 * Created by zhx on 2017/8/19.
 */
import React,{Component} from 'react';
import Card from '../../Component/Card';

class MainSeat extends Component{
    render(){
        return (
            <div className="main-seat">
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
                    <Card type={1} value={11}/>
                    <Card type={0} value={10}/>
                </div>
            </div>
        )
    }
}

export default MainSeat;