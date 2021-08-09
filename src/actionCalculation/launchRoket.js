import { DB_USER_ROKET, firebaseAPI } from "../api/api"
import { CHANGE_ROKET } from "../redux/inventory-reducer"

export const launchRoket = ({countRoket,UserIdTarget,inventoryTarget,attackingUser,changeInventory}) => {
    let _countRoket = countRoket
    let sendInfoDefend = {}
    
    if (_countRoket <= 0) return
    changeInventory(CHANGE_ROKET,-_countRoket)

    
    // target protection
    while (inventoryTarget.roket > 0 && _countRoket  > 0){
        inventoryTarget.roket -= 1
        if (!sendInfoDefend.roket){
            sendInfoDefend.roket = 0
        }
        sendInfoDefend.roket += 1
        _countRoket -= 1
    }
    // after target protection
    while (_countRoket  > 0){
        inventoryTarget.house -= 1
        inventoryTarget.people -= 4
        if (!sendInfoDefend.house){
            sendInfoDefend.house = 0
        }
        if (!sendInfoDefend.people){
            sendInfoDefend.people = 0
        }
        sendInfoDefend.house += 1
        sendInfoDefend.people += 4
        _countRoket -= 1
    }  
    console.log(sendInfoDefend)
    firebaseAPI.updateFullUser(UserIdTarget,inventoryTarget)
    firebaseAPI.updateUnseenDefendInfo({userId:UserIdTarget,attackingUser:attackingUser,sendInfoDefend:sendInfoDefend,roketAttack:countRoket})

}

