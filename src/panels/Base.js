import { Button, Div, Group, Header, Panel } from '@vkontakte/vkui';
import React from 'react';
import HeaderUp from '../components/Header/HeaderUp';
import { firebaseAPI } from '../api/api';
import { API_USER_MONEY } from '../api/api'
const Base = ({ id, go}) => {
	
	
	
	return(
	
	<Panel id={id}>
		<HeaderUp go={go}  headerName="Base" backButton="home"/>

		<Group header={<Header mode="secondary">Navigation</Header>}>
			<Div>
				<Button stretched size="l"  onClick={go} data-to="inventory">
					Inventory
				</Button>
			</Div>
			<Div>
				<Button stretched size="l"  onClick={go} data-to="friends">
					Friends
				</Button>
			</Div>
			<Div>
				<Button stretched size="l"  onClick={go} data-to="actionNavigator">
					Action
				</Button>
			</Div>
		</Group>
	</Panel>
	);
}
    
	


export default Base;
