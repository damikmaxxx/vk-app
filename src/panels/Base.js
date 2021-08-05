import { Button, Div, Group, Header, Panel } from '@vkontakte/vkui';
import React from 'react';
import { connect } from 'react-redux';
import HeaderUser from '../components/Header/HeaderUser';
import { go } from '../redux/app-reducer';
const Base = ({ id, go}) => {
	
	
	
	return(
	
	<Panel id={id}>
		<HeaderUser go={go}  headerName="Base" backButton="home"/>

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
    
	


let mapStateToProps = (state) => ({
})
export default connect(mapStateToProps,{go})(Base)