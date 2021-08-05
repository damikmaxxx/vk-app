import { Button, Counter, Div, FormItem, Group, Input, Slider } from '@vkontakte/vkui';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { launchRoket } from '../../../actionCalculation/launchRoket';
import { changeInventory } from '../../../redux/inventory-reducer';
import { setActiveUserPage } from '../../../redux/user-reducer';
const AttackUserPage = ({activeUserPage,roket,inventoryProfile,changeInventory}) => {
    const [roketSend,setRoketSend] = useState(1)
    const roketSendUpdate = (num) => {
        setRoketSend(roketSend+num)
    }
    const roketRange = (value) => {
        if(value > roket){
            setRoketSend(roket)
            return
        }
        setRoketSend(Number(value))
    }
    // const launchRoket = () => {
    //     if (roket <= 0){
    //         return
    //     }
    //     changeInventory(CHANGE_ROKET,-1)
    //     firebaseAPI.updateUser(activeUserPage,DB_USER_MONEY,inventoryProfile.money - 1000)
    // }	
    																																																																																			
    return(
            <Group>
                <Div>
                    <FormItem>

                        <Input value={roketSend} min="0" max={roket} type="number" onChange={e => roketRange(e.target.value)} />
                       
                    </FormItem>
                    
                    <FormItem>
                        <Slider
                            min={0}
                            step={1}
                            max={roket}
                            value={roketSend}
                            onChange={value => roketRange(value)}
                        />
                    </FormItem>
                </Div>
                <Div>
                    <Button onClick={() => {launchRoket({countRoket:roketSend,UserId:activeUserPage,inventoryTarget:inventoryProfile,changeInventory:changeInventory},)}} mode="commerce" size="l" after={<Counter>{roketSend}</Counter>}>Attack</Button>
                </Div>
            </Group>
    )
}
const mapStateToProps  = (state) => ({
    roket:state.myInventory.roket,
	activeUserPage:state.usersInfo.activeUserPage,
	friends:state.usersInfo.friends,
})
export default connect(mapStateToProps,{setActiveUserPage,changeInventory})(AttackUserPage)
// export default AttackUserPage;