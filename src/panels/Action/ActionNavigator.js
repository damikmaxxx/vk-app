import React from 'react';
import * as axios from "axios";
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,PanelHeaderBack } from '@vkontakte/vkui';
import { Icon24DollarCircleOutline } from '@vkontakte/icons';
import { CHANGE_MONEY,CHANGE_ROKET } from '../../redux/inventory-reducer';
import HeaderUp from '../../components/Header/HeaderUp';


const ActionNavigator = ({changeInventory,go,id}) => {
	const  onChangeMoney = (num) => {
		changeInventory(CHANGE_MONEY,num)
	}
	const  Attack = (e) => {
		changeInventory(CHANGE_ROKET,-1)
		go(e)
	}
	return(
	<Panel id={id}>
        <HeaderUp  go={go}headerName="Action Navigator" backButton="base"/>
        <Group header={<Header mode="secondary">Your actions</Header>}>
            <Div>
				<Button stretched size="l"  onClick={() => onChangeMoney(-10)}>
                Building
				</Button>
			</Div>
            <Div>
				<Button stretched size="l"  onClick={Attack} data-to="attack">
                Attack
				</Button>
			</Div>
            <Div>
				<Button stretched size="l"  onClick={() => onChangeMoney(-10)}>
                Defense
				</Button>
			</Div>
        </Group> 
        
        
	</Panel>)
};



export default ActionNavigator
