/**
 * Created by zhx on 2017/8/25.
 */
/**
 * options = {
 *   players:[{
 *     name:'',
 *     chip:1000,
 *   },{},..],
 *   blinds:{
 *     small:25,
 *     big:50
 *   },
 *   count:5
 * }
 */
var poker = require('./Pokers')
class Game {
    constructor(options){
        this.players = options.players;
        this.blinds = options.blinds;
        this.count = options.players.length;
        //牌型大小判断器
        this.p = new poker();
        this._init();
    }
    _init(){
        //初始化一副牌
        this.pokers = [...Array(52)].map((item,index)=>index);
        //初始化奖池
        this.jackpot = {
            main:0,
            sub:[]
        };
        //初始化最小跟注额
        this.minChip = this.blinds.big;
    }
    start(){
        let log = console.log.bind(console);
        log("Game start!");
        //大小盲注
        log(this.players[0].name+"下注："+this.blinds.small);
        log(this.players[1].name+"下注："+this.blinds.big);
        //发牌
        this.players[0].card = this._sendCard(2);
        this.players[1].card = this._sendCard(2);
        this.players[2].card = this._sendCard(2);
        this.players[3].card = this._sendCard(2);
        log(this.players)
        //翻牌前下注
        log(this.players[2].name+"选择：跟注"+this.minChip);
        log(this.players[3].name+"选择：跟注"+this.minChip);
        log(this.players[0].name+"选择：跟注到"+this.minChip);
        log(this.players[1].name+"选择：跟注到"+this.minChip);
        //翻牌 + 发公共牌（3张）
        log(this._sendCard(3))
        this.players[0].card = this.players[0].card.concat(this._sendCard(3));
        this.players[1].card = this.players[1].card.concat(this._sendCard(3));
        this.players[2].card = this.players[2].card.concat(this._sendCard(3));
        this.players[3].card = this.players[3].card.concat(this._sendCard(3));
        log(this.players)
        //下注
        //...
        //翻转牌
        log(this._sendCard(1));

        //翻河牌
        log(this._sendCard(1));

        //斗牌
        log(this.players);
        let cards = [];
        this.players.forEach((item)=>{
            cards.push({id:item.id,card:item.card});
        })
        log(cards);
        const res = this.p.sortCard(cards);
        log('赢得人是：'+this.players[res[0][0].id].name);

    }
    _sendCard(num){
        const card = [];
        for(let i=0;i<num;i++){
            card.push(...this.pokers.splice(this._random(),1));
        }
        return card;
    }

    _random(){
        return Math.floor(Math.random()*this.pokers.length);
    }



}

var options = {
       players:[{
             id:0,
             name:'zhx',
             chip:1000,
           },{
           id:1,
           name:'yyf',
           chip:1000,
       },{
           id:2,
           name:'dd',
           chip:1000,
       },{
           id:3,
           name:'zhou',
           chip:1000,
       }],
   blinds:{
     small:25,
     big:50
   }
};

var g = new Game(options);
g.start();

