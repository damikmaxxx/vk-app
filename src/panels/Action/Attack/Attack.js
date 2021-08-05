import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,PanelHeaderBack, Tabs, TabsItem, View } from '@vkontakte/vkui';
import { Icon24DollarCircleOutline } from '@vkontakte/icons';
import { connect } from 'react-redux';
import AttackFriends from './AttackFriends';
import AttackOther from './AttackOther';
import HeaderUser from '../../../components/Header/HeaderUser';
import { go } from '../../../redux/app-reducer';


const Attack = ({go,id,friends}) => {
	const [activeTabs,setActiveTabs] = useState('friends');
	return(
	<Panel id={id}>
        <HeaderUser go={go}  headerName="Attack" backButton="actionNavigator"/>
        <Group header={<Header mode="secondary">Attack</Header>}>
			<Tabs>
				<TabsItem selected={activeTabs === "friends"} onClick={() => {
					setActiveTabs("friends")
				}}>
					friends
				</TabsItem>
				<TabsItem selected={activeTabs === "other"} onClick={() => {
					setActiveTabs("other")
				}}>
					other 
				</TabsItem>
			</Tabs>
			{activeTabs === "friends" && <AttackFriends go={go} friends={friends}/> }
			{activeTabs === "other" && <AttackOther/>}
        </Group> 
        
        
	</Panel>)
};

let mapStateToProps = (state) => ({
})
export default connect(mapStateToProps,{go})(Attack)