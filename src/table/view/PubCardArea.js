import React,{Component} from 'react';
import Card from '../../Component/Card';

class PubCardArea extends Component{
    render(){
        return (
            <div className="PubCardArea">
                <Card value={1} type={1}/>
                <Card value={2} type={2}/>
                <Card value={3} type={3}/>
            </div>
        );
    }
}

export default PubCardArea;