import { DB_USER_ROCKET, firebaseAPI } from "../api/api"
import { CHANGE_ROCKET } from "../redux/inventory-reducer"

export const launchRocket = async ({countRocket,userIdTarget,inventoryTarget,attackingUser,changeInventory}) => {
    let startCountRocket = countRocket
    let _countRocket = countRocket
    let sendInfoDefend = {}
    sendInfoDefend.Rocket = 0
    sendInfoDefend.house = 0
    sendInfoDefend.people = 0
    if (_countRocket <= 0) return
    changeInventory(CHANGE_ROCKET,-_countRocket)

    await firebaseAPI.getUnseenInfo(userIdTarget).then((snapshot) => { 
        let val = snapshot.val() 
        if (!val) return
        
        Object.keys(val.defend).map(id => {
            if(Number(id) == attackingUser){
                sendInfoDefend.Rocket += Number(val.defend[attackingUser].attack) 
                startCountRocket += Number(val.defend[attackingUser].attack) 
                sendInfoDefend.house += val.defend[attackingUser].destroyed.house || 0
                sendInfoDefend.people += val.defend[attackingUser].destroyed.people || 0
                return
            }
            
        })
        
    })
    
    // target protection
    while (inventoryTarget.Rocket > 0 && _countRocket  > 0){
        inventoryTarget.Rocket -= 1
        sendInfoDefend.Rocket += 1
        _countRocket -= 1
    }
    // after target protection
    while (_countRocket  > 0){
        inventoryTarget.house -= 1
        inventoryTarget.people -= 4
        sendInfoDefend.house += 1
        sendInfoDefend.people += 4
        _countRocket -= 1
    }  
    console.log(sendInfoDefend)
    if (sendInfoDefend.house == 0){
        delete sendInfoDefend.house
    }
    if (sendInfoDefend.people == 0){
        delete sendInfoDefend.people
    }
    if (sendInfoDefend.Rocket == 0){
        delete sendInfoDefend.Rocket
    }
    firebaseAPI.updateFullUser(userIdTarget,inventoryTarget)
    firebaseAPI.updateUnseenDefendInfo({userId:userIdTarget,attackingUser:attackingUser,sendInfoDefend:sendInfoDefend,rocketAttack:startCountRocket})

}

