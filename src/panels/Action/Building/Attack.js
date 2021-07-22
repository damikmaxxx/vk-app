import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,PanelHeaderBack, Tabs, TabsItem, View } from '@vkontakte/vkui';
import { Icon24DollarCircleOutline } from '@vkontakte/icons';
import { connect } from 'react-redux';
import AttackFriends from './AttackFriends';
import AttackOther from './AttackOther';


const Attack = ({go,id,fetchedUser,money,friends}) => {
	const [activeTabs,setActiveTabs] = useState('friends');
	return(
	<Panel id={id}>
        <PanelHeader
			left={<PanelHeaderBack onClick={go} data-to="actionNavigator"/>}
		>
			Attack
		</PanelHeader>
        
		{fetchedUser &&
		<Group header={<Header mode="secondary">Your profile</Header>}>
            <Cell 
                before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
                description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
                after={<div style={{display:'flex',alignItems:'center',color:'black'}}>{money}<Icon24DollarCircleOutline width={30} height={30}/></div>}
            >
                {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
            </Cell>
        </Group>}
        <Group header={<Header mode="secondary">Attack</Header>}>
			<Tabs>
				<TabsItem selected={activeTabs === "friends"} onClick={() => {
					setActiveTabs("friends")
				}}>
					Друзья 
				</TabsItem>
				<TabsItem selected={activeTabs === "other"} onClick={() => {
					setActiveTabs("other")
				}}>
					Другие 
				</TabsItem>
			</Tabs>
			{activeTabs === "friends" && <AttackFriends friends={friends}/> }
			{activeTabs === "other" && <AttackOther/>}
        </Group> 
        
        
	</Panel>)
};


export default Attack