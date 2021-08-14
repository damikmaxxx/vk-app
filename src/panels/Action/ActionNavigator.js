import React from 'react';
import * as axios from "axios";
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,PanelHeaderBack } from '@vkontakte/vkui';
import { Icon24DollarCircleOutline } from '@vkontakte/icons';
import { changeInventory, CHANGE_MONEY,CHANGE_ROCKET } from '../../redux/inventory-reducer';
import HeaderUser from '../../components/Header/HeaderUser';
import { go } from '../../redux/app-reducer';
import { connect } from 'react-redux';


const ActionNavigator = ({changeInventory,go,id}) => {
	const  onChangeMoney = (num) => {
		changeInventory(CHANGE_MONEY,num)
	}
	return(
	<Panel id={id}>
        <HeaderUser  go={go}headerName="Action Navigator" backButton="base"/>
        <Group header={<Header mode="secondary">Your actions</Header>}>
            <Div>
				<Button stretched size="l"  onClick={() => onChangeMoney(-10)}>
                	Building
				</Button>
			</Div>
            <Div>
				<Button stretched size="l"  onClick={go} data-to="attack">
                	Attack
				</Button>
			</Div>
            <Div>
				<Button stretched size="l" onClick={go} data-to="defense" >
                	Defense
				</Button>
			</Div>
        </Group> 
        
        
	</Panel>)
};


let mapStateToProps = (state) => ({
})

export default connect(mapStateToProps,{go,changeInventory})(ActionNavigator)
