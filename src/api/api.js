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
    
    listenUpdateUser(userId,setInventory){
        firebase.database().ref(String(userId)).on('value',function(snapshot){
            var val = snapshot.val();
            setInventory(val.inventory)
          });
    },

    updateUser(userId,item,count){
        firebase.database().ref(String(userId)).child("inventory").update({[item]:count})
    },
    
    updateFullUser(userId,obj){
        firebase.database().ref(String(userId)).child("inventory").update(obj);
    },
    updateEntryTimeBD(userId,time){
        firebase.database().ref(String(userId)).child("time").child("timer").update({"entry":time});
    },
    // firstCreateTimer(userId){

    // }
    updateTimerDB(userId,timerName,info,time){
        firebase.database().ref(String(userId)).child("time").child("timer").child(timerName).update({[info]:time});
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
}
