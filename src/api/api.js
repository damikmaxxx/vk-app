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
    
    //GET
    getTimerDB(userId){
        return firebase.database().ref(String(userId)).child("time").child("timer").get()
    },
    getServerTime(){
        return firebase.database().ref("/.info/serverTimeOffset")
    },
    getUser(userId){
       return firebase.database().ref(String(userId)).child("inventory").get()
    },
    getTimeUserBD(userId){
        return firebase.database().ref(String(userId)).child("time").get()
    },
}
