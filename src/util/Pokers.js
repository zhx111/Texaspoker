/**
 * Created by zhx on 2017/8/21.
 */
/**
 * cardarr:范围在0-51的整数，长度在5-7的数组 => [11,0,35,38,34,41,33]
 * card:[value,type]
 * 数字转花色+大小；花色：0 黑桃 1 红桃 2 梅花 3 方片
 * 0 1 2 3 4 5 6 7 8  9 10 11 12
 * 2 3 4 5 6 7 8 9 10 J Q  K  A
 */
class Pokers{
    cardPattern(cardarr){
        cardarr = cardarr.map((item)=>this.encodeCard(item));
        cardarr.sort((a,b)=>{return b[0]-a[0]});
        const vMap = new Map();//牌的大小
        const tMap = new Map();//牌的类型
        cardarr.forEach(item=>{
            let value = item[0];
            let type = item[1];
            this.addToMap(vMap,value,item);
            this.addToMap(tMap,type,item);
        });
        var sortVArr = this.sortMap(vMap);
        var sortTArr = this.sortMap(tMap);
        var cardLevel = {};
        //同花顺
        if(sortTArr[0].length>=5){
            let straight = this.getStraight(sortTArr[0]);
            if(straight.length ===5){
                cardLevel["level"] = 8;
                cardLevel["pokers"] = straight;
                return cardLevel;
            }else{
                cardLevel["level"] = 5;
                cardLevel["pokers"] = sortTArr[0].slice(0,5);
                return cardLevel;
            }
        }else{
            let maxLen = sortVArr[0].length;//最大相同牌的数量，如2222=>4
            let temp = [];
            //四条
            if(maxLen===4){
                cardLevel["level"] = 7;
                temp = sortVArr[0].concat([sortVArr[1][0]]);
                cardLevel["pokers"] = temp;
                return cardLevel;
            }//葫芦
            else if(maxLen===3&&sortVArr[1].length>=2){
                cardLevel["level"] = 6;
                temp = sortVArr[0].concat(sortVArr[1].slice(0,2));
                cardLevel["pokers"] = temp;
                return cardLevel;
            }//顺子
            else if(this.getStraight(cardarr).length===5){
                cardLevel["level"] = 4;
                temp = this.getStraight(cardarr);
                cardLevel["pokers"] = temp;
                return cardLevel;
            }//三条
            else if(maxLen===3){
                cardLevel["level"] = 3;
                temp = sortVArr[0].concat(sortVArr[1],sortVArr[2]);
                cardLevel["pokers"] = temp;
                return cardLevel;
            }//两对
            else if(maxLen===2&&sortVArr[1].length>1){
                cardLevel["level"] = 2;
                temp = sortVArr[0].concat(sortVArr[1],sortVArr[2]);
                cardLevel["pokers"] = temp;
                return cardLevel;
            }//一对
            else if(maxLen===2){
                cardLevel["level"] = 1;
                temp = sortVArr[0].concat(sortVArr[1],sortVArr[2],sortVArr[3]);
                cardLevel["pokers"] = temp;
                return cardLevel;
            }//单张
            else{
                cardLevel["level"] = 0;
                temp = sortVArr[0].concat(sortVArr[1],sortVArr[2],sortVArr[3],sortVArr[4]);
                cardLevel["pokers"] = temp;
                return cardLevel;
            }
        }
    }

    sortMap(map){
        let res = [];
        map.forEach((value)=>{res.push(value)});
        return res.sort((a,b)=>{return b.length-a.length});
    }

    addToMap(map,key,value){
        if(map.has(key)){
            let arr = map.get(key);
            arr.push(value);
            map.set(key,arr);
        }else{
            let arr = [value];
            map.set(key,arr);
        }
    }

    getStraight(cardarr){
        if(cardarr.length<5||cardarr.length>7) return [];
        let filtcards = cardarr.filter((item,i,array)=>{
            if(i&&item[0]===array[i-1][0]){
                return false;
            }else{
                return true;
            }
        });
        let res = [];
        const len = filtcards.length;
        if(len>=5){
            const distance = 4;
            const limit = len - distance;
            for(let i=0;i<limit;i++){
                if((filtcards[i][0]-filtcards[i+distance][0])===distance){
                    res = filtcards.slice(i,i+distance+1);
                    break;
                }
            }
            //考虑A5432的情况
            if(res.length===0){
                if(filtcards[0][0]===12&&filtcards[len-1][0]===0&&filtcards[len-distance][0]===3){
                    let tmp = [];
                    tmp = tmp.concat(filtcards.slice(len-distance,len),[filtcards[0]]);
                    res = tmp;
                }
            }
        }
        return res;
    }
    //比较cardLevel;res>0=>1>2;res<0=>1<2;res=0=>1==2
    compare(cards1,cards2){
        let res = cards1.level - cards2.level;
        const ONE_POKERS = 5;
        if(res === 0){
            for(let i=0;i<ONE_POKERS;i++){
                res = cards1.pokers[i][0]-cards2.pokers[i][0];
                if(res!==0){
                    break;
                }
            }
        }
        return res;
    }

    encodeCard(cardNum){
        var cardType = [];
        cardType[0] = cardNum%13;
        cardType[1] = Math.floor(cardNum/13);
        return cardType;
    }

    decodeCard(cardType){
        if(cardType instanceof Array&&cardType.length>1){
            return 13*cardType[1]+cardType[0];
        }else{
            return;
        }
    }
}


var p = new Pokers();
var res1 = p.cardPattern([8,9,10,24,11,25,12]);
var res2 = p.cardPattern([11,0,35,38,34,41,33]);
console.log(res1);
console.log(res2);
console.log(p.compare(res1,res2));

//export default Pokers;

