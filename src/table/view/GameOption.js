/**
 * Created by zhx on 2017/9/3.
 */
import React,{Component} from 'react';

class GameOption extends Component{
    constructor(props){
        super(props);

        this.handleStart = this.handleStart.bind(this);

        this.state = {
            panelShow:false,
            joinPeople:1,
            blinds:'10/20',
        }
    }

    handleStart(){
        this.setState({panelShow:!this.state.panelShow});
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({panelShow:!this.state.panelShow});
        this.props.handleGame(this.state);
    }

    handleChange(name,e){
        let newState = {};
        newState[name] = e.target.value;
        this.setState(newState);
    }

    render(){
        let panelClassName = 'GameOption-panel';
        panelClassName += this.state.panelShow ? ' show':' hide';
        return (
            <div className="GameOption">
                <button className="btn" onClick={this.handleStart}>开始游戏</button>
                <div className={panelClassName}>
                    <form>
                        <label htmlFor="joinPeople">选择参与人数</label>
                        <input name="joinPeople" list="join" type="range" min="1" max="9" step="1" value={this.state.joinPeople} onChange={this.handleChange.bind(this,'joinPeople')}/>
                        <label htmlFor="blind">选择盲注金额</label>
                        <select name="blind" value={this.state.blinds} onChange={this.handleChange.bind(this,'blinds')}>
                            <option>10/20</option>
                            <option>25/50</option>
                            <option>50/100</option>
                        </select>
                        <button className="btn" onClick={this.handleSubmit.bind(this)}>确定</button>
                        <datalist id="join">
                            <option value="1" label="1%" />
                            <option value="2" />
                            <option value="3" />
                            <option value="4" />
                            <option value="5" label="5" />
                            <option value="6" />
                            <option value="7" />
                            <option value="8" />
                            <option value="9" label="9"/>
                        </datalist>
                    </form>
                </div>
            </div>
        )
    }
}

export default GameOption;
