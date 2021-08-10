export const DB_USER_MONEY = "money";
export const DB_USER_ROKET = "roket";
export const DB_USER_HOUSE = "house";
export const DB_USER_PEOPLE = "people";
export const DB_USER_FOOD = "food";

import firebase from '../index';

//updateTimerDB
export const DB_TIMER_START = "startTimer";
export const DB_TIMER_TIME = "timerTime";

export  const firebaseAPI = {
    
    listenUpdateUser(userId,listensFunc,){
        firebase.database().ref(String(userId)).on('value',function(snapshot){
            var val = snapshot.val();
            listensFunc(val,userId)
          });
    },

    //UPDATE
    updateUser(userId,item,count){
        firebase.database().ref(String(userId)).child("inventory").update({[item]:count})
    },
    
    updateFullUser(userId,obj){
        firebase.database().ref(String(userId)).child("inventory").update(obj);
    },
    updateEntryTimeBD(userId,time){
        firebase.database().ref(String(userId)).child("time").child("timer").update({"entry":time});
    },

    updateTimerDB(userId,timerName,info,time){
        firebase.database().ref(String(userId)).child("time").child("timer").child(timerName).update({[info]:time});
    },
    async updateUnseenDefendInfo({userId,attackingUser,sendInfoDefend,roketAttack}){
        let serverTime = 0
        await firebaseAPI.getServerTime().on('value', function(offset) {
            const offsetVal = offset.val() || 0;
            serverTime = Date.now() + offsetVal;
        });
        firebase.database().ref(String(userId)).child("unseenInfo").child("defend").child(String(attackingUser)).update({timeAttack:serverTime,attack:roketAttack,destroyed:sendInfoDefend});
    },
    updateClearUnseen(userId){
        firebase.database().ref(String(userId)).child("unseenInfo").child("defend").remove();
    },
    //GET
    getTimerDB(userId){
        return firebase.database().ref(String(userId)).child("time").child("timer").get()
    },
    getServerTime(){
        return firebase.database().ref("/.info/serverTimeOffset")
    },
    getUserInventory(userId){
       return firebase.database().ref(String(userId)).child("inventory").get()
    },
    getTimeUserBD(userId){
        return firebase.database().ref(String(userId)).child("time").get()
    },
    getUnseenInfo(userId){
        return firebase.database().ref(String(userId)).child("unseenInfo").get()
    },
}
