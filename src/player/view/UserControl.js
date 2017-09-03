/**
 * Created by zhx on 2017/8/25.
 */
import React,{ Component } from 'react';

class UserControl extends Component{
    render(){
        let money = '$100';
        return (
            <div>
                <button>弃牌</button>
                <button>跟{money}</button>
                <button>加注</button>
            </div>
        )
    }
}

export default UserControl;
