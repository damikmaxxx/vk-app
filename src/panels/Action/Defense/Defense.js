import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,PanelHeaderBack, Tabs, TabsItem, View } from '@vkontakte/vkui';
import { Icon24DollarCircleOutline } from '@vkontakte/icons';
import { connect } from 'react-redux';
import DefenseHistory from './DefenseHistory';
import DefenseSettings from './DefenseSettings';
import { go } from '../../../redux/app-reducer';
import HeaderUser from '../../../components/Header/HeaderUser';
// import AttackFriends from './AttackFriends';
// import AttackOther from './AttackOther';


const Defense = ({go,id,friends}) => {
	const [activeTabs,setActiveTabs] = useState('settings');
	return(
	<Panel id={id}>
        <HeaderUser go={go}  headerName="Defense" backButton="actionNavigator" />
        <Group header={<Header mode="secondary">Defense</Header>}>
			<Tabs>
				<TabsItem selected={activeTabs === "settings"} onClick={() => {
					setActiveTabs("settings")
				}}>
					settings 
				</TabsItem>
				<TabsItem selected={activeTabs === "history"} onClick={() => {
					setActiveTabs("history")
				}}>
					history 
				</TabsItem>
			</Tabs>
			{activeTabs === "settings" && <DefenseSettings   friends={friends}/>}
			{activeTabs === "history" && <DefenseHistory friends={friends}/>}
        </Group> 
        
	</Panel>)
};

Defense.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	friends: PropTypes.array,
};

let mapStateToProps = (state) => ({
    friends:state.usersInfo.friends,
})
export default connect(mapStateToProps,{go})(Defense)