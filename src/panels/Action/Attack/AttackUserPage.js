import { Button, Counter, Div, FormItem, Group, Input, Slider } from '@vkontakte/vkui';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { launchRoket } from '../../../actionCalculation/launchRoket';
import { changeInventory } from '../../../redux/inventory-reducer';
import { setActiveUserPage } from '../../../redux/user-reducer';
const AttackUserPage = ({activeUserPage,roket,inventoryProfile,changeInventory,user}) => {
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
    const _launchRoket = () => {
        launchRoket({countRoket:roketSend,UserIdTarget:activeUserPage,inventoryTarget:inventoryProfile,attackingUser:user.id,changeInventory:changeInventory})
    }																																																																																		
    return(
        <>
        {(roket > 0) ?
             
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
                    <Button onClick={_launchRoket} mode="commerce" size="l" after={<Counter>{roketSend}</Counter>}>Attack</Button>
                </Div>
            </Group> : <span>"You don't have rokets"</span>}
        </>
    )
}
const mapStateToProps  = (state) => ({
    roket:state.myInventory.roket,
	activeUserPage:state.usersInfo.activeUserPage,
	friends:state.usersInfo.friends,
    user:state.usersInfo.user,
})
export default connect(mapStateToProps,{setActiveUserPage,changeInventory})(AttackUserPage)
// export default AttackUserPage;