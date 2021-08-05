import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,PanelHeaderBack, CardGrid, Card, RichCell, ScreenSpinner, Counter } from '@vkontakte/vkui';
import { Icon24Add, Icon24DollarCircleOutline } from '@vkontakte/icons';
import HeaderOther from '../../../components/Header/HeaderOther';
import { setActiveUserPage } from '../../../redux/user-reducer';
import { connect } from 'react-redux';
import { DB_USER_MONEY, firebaseAPI } from '../../../api/api';
import { INIT_DATE } from '../../../redux/auth-reducer';
import { changeInventory, CHANGE_ROKET } from '../../../redux/inventory-reducer';
const AttackUserPage = ({ id, go,activeUserPage,roket,inventoryProfile}) => {
    const [roketSend,setRoketSend] = useState(0)
    const roketSendUpdate = (num) => {
        setRoketSend(roketSend+num)
    }
    const roketRange = (e) => {
        
        console.log(e.target.value)
        
        setRoketSend(Number(e.target.value))
    }
    const launchRoket = () => {
        if (roket <= 0){
            return
        }
        changeInventory(CHANGE_ROKET,-1)
        firebaseAPI.updateUser(activeUserPage,DB_USER_MONEY,inventoryProfile.money - 1000)
    }	
    																																																																																			
    return(
            <Group>
                <Div>
                    <Button onClick={() => {roketSendUpdate(-1)}}>-</Button>
                    <input type="number" name="roketSend"
                    min="0" max="100" value={roketSend} />
                    <Button onClick={() => {roketSendUpdate(1)}}>+</Button>   
                </Div>
                <Div>
                    <span>0</span>
                    <input type="range" min="0" max={roket} value={roketSend} onChange={roketRange}/>
                    <span>{roket}</span>   
                </Div>
                <Div>
                    <Button onClick={launchRoket} mode="commerce" size="l" after={<Counter>{roketSend}</Counter>}>Attack</Button>
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