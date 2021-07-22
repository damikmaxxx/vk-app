export const DB_USER_MONEY = "money";
export const DB_USER_ROKET = "roket";
export const DB_USER_HOUSE = "house";
export const DB_USER_PEOPLE = "people";
import firebase from '../index';

export  const firebaseAPI = {
    updateUser(userId,item,count){
        firebase.database().ref(String(userId)).update({[item]:count})
    },
    updateFullUser(userId,obj){
        firebase.database().ref(String(userId)).update(obj);
    },
    getUser(userId){
       return firebase.database().ref(String(userId)).get()
    }
}