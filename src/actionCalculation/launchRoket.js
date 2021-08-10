import { DB_USER_ROKET, firebaseAPI } from "../api/api"
import { CHANGE_ROKET } from "../redux/inventory-reducer"

export const launchRoket = async ({countRoket,UserIdTarget,inventoryTarget,attackingUser,changeInventory}) => {
    let startCountRoket = countRoket
    let _countRoket = countRoket
    let sendInfoDefend = {}
    sendInfoDefend.roket = 0
    sendInfoDefend.house = 0
    sendInfoDefend.people = 0
    if (_countRoket <= 0) return
    changeInventory(CHANGE_ROKET,-_countRoket)

    await firebaseAPI.getUnseenInfo(UserIdTarget).then((snapshot) => { 
        let val = snapshot.val() 
        if (!val) return
        
        Object.keys(val.defend).map(id => {
            if(Number(id) == attackingUser){
                sendInfoDefend.roket += Number(val.defend[attackingUser].attack) 
                startCountRoket += Number(val.defend[attackingUser].attack) 
                sendInfoDefend.house += val.defend[attackingUser].destroyed.house || 0
                sendInfoDefend.people += val.defend[attackingUser].destroyed.people || 0
                return
            }
            
        })
        
    })
    
    // target protection
    while (inventoryTarget.roket > 0 && _countRoket  > 0){
        inventoryTarget.roket -= 1
        sendInfoDefend.roket += 1
        _countRoket -= 1
    }
    // after target protection
    while (_countRoket  > 0){
        inventoryTarget.house -= 1
        inventoryTarget.people -= 4
        sendInfoDefend.house += 1
        sendInfoDefend.people += 4
        _countRoket -= 1
    }  
    console.log(sendInfoDefend)
    if (sendInfoDefend.house == 0){
        delete sendInfoDefend.house
    }
    if (sendInfoDefend.people == 0){
        delete sendInfoDefend.people
    }
    if (sendInfoDefend.roket == 0){
        delete sendInfoDefend.roket
    }
    firebaseAPI.updateFullUser(UserIdTarget,inventoryTarget)
    firebaseAPI.updateUnseenDefendInfo({userId:UserIdTarget,attackingUser:attackingUser,sendInfoDefend:sendInfoDefend,roketAttack:startCountRoket})

}

