import React,{Component} from 'react';
import Card from '../../Component/Card';
import Pokers from '../../util/Pokers';

class PubCardArea extends Component{
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
            <div className="PubCardArea">
                {this.renderCard()}
            </div>
        )
    }
}

export default PubCardArea;