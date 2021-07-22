import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,PanelHeaderBack, CardGrid, Card } from '@vkontakte/vkui';
import { Icon24DollarCircleOutline } from '@vkontakte/icons';
import HeaderUp from '../components/Header/HeaderUp';
const Friends = ({ id, go,friends}) => {	
	const cardFriends	= friends.map(u =><Card key={u.id}>{<img style={{width:"100%",height:"200px"}} src={u.photo_200_orig}/>}</Card>)																																																																																										
    return(
		<Panel id={id}>
				<HeaderUp go={go} headerName="Friends" backButton="base"/>

				<Group header={<Header mode="secondary">Your Friends</Header>}>
					<CardGrid size="s">
						{cardFriends}
					</CardGrid>
				</Group>
			</Panel>
		)
}


export default Friends;
