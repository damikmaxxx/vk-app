import { Button, Counter, Div, FormItem, Group, Input, Slider } from '@vkontakte/vkui';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { launchRocket } from '../../../actionCalculation/launchRocket';
import { changeInventory } from '../../../redux/inventory-reducer';
import { setActiveUserPage } from '../../../redux/user-reducer';
const AttackUserPage = ({activeUserPage,rocket,inventoryProfile,changeInventory,user}) => {
    const [rocketSend,setRocketSend] = useState(1)
    const rocketSendUpdate = (num) => {
        setRocketSend(rocketSend+num)
    }
    const rocketRange = (value) => {
        if(value > rocket){
            setRocketSend(rocket)
            return
        }
        setRocketSend(Number(value))
    }
    const _launchRocket = () => {
        launchRocket(
            {
            countRocket:rocketSend,
            userIdTarget:activeUserPage,
            inventoryTarget:inventoryProfile,
            attackingUser:user.id,
            changeInventory:changeInventory})
    }																																																																																		
    return(
        <>
        {(rocket > 0) ?
             
            <Group>
                <Div>
                    <FormItem>

                        <Input value={rocketSend} min="0" max={rocket} type="number" onChange={e => rocketRange(e.target.value)} />
                       
                    </FormItem>
                    
                    <FormItem>
                        <Slider
                            min={0}
                            step={1}
                            max={rocket}
                            value={rocketSend}
                            onChange={value => rocketRange(value)}
                        />
                    </FormItem>
                </Div>
                <Div>
                    <Button onClick={_launchRocket} mode="commerce" size="l" after={<Counter>{rocketSend}</Counter>}>Attack</Button>
                </Div>
            </Group> : <span>"You don't have rockets"</span>}
        </>
    )
}
const mapStateToProps  = (state) => ({
    rocket:state.myInventory.rocket,
	activeUserPage:state.usersInfo.activeUserPage,
	friends:state.usersInfo.friends,
    user:state.usersInfo.user,
})
export default connect(mapStateToProps,{setActiveUserPage,changeInventory})(AttackUserPage)
// export default AttackUserPage;