/**
 * Created by zhx on 2017/8/19.
 */
import React,{Component} from 'react';
import MainSeat from './MainSeat';
import SubSeat from './SubSeat';

class PlayerArea extends Component{
    render(){
        return (
            <div>
                <SubSeat/>
                <SubSeat/>
                <SubSeat/>
                <MainSeat/>
                <SubSeat/>
                <SubSeat/>
                <SubSeat/>
            </div>
        )
    }
}

export default PlayerArea;