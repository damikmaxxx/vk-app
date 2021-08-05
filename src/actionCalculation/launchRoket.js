import { DB_USER_ROKET, firebaseAPI } from "../api/api"
import { CHANGE_ROKET } from "../redux/inventory-reducer"

export const launchRoket = ({countRoket,UserId,inventoryTarget,changeInventory}) => {
    changeInventory(CHANGE_ROKET,-countRoket)
    debugger
    if (countRoket <= 0) return

    while (inventoryTarget.roket > 0 && countRoket  > 0){
        inventoryTarget.roket -= 1
        countRoket -= 1
    }
    debugger
    while (countRoket  > 0){
        inventoryTarget.house -= 1
        inventoryTarget.people -= 4
        countRoket -= 1
    }  
    console.log(countRoket,inventoryTarget)
    debugger
    
    firebaseAPI.updateFullUser(UserId,inventoryTarget)
}

