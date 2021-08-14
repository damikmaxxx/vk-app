import React, { useState } from 'react';
import { Group, Card,CardGrid, RichCell, Avatar } from '@vkontakte/vkui';
import { Icon24DollarCircleOutline } from '@vkontakte/icons';
import { connect } from 'react-redux';


const AttackFriends = ({friends,go,setActiveUserPage}) => {
	const entryFriendsProfile = (e,id) => {
		setActiveUserPage(id)
		go(e)
	}
	
	const friendsGroup	= friends.map(u =>(
		<RichCell  onClick={(e) => entryFriendsProfile(e,u.id)}
			data-to="pageView"
			key={u.id}
			before={<Avatar size={48} src={u.photo_200_orig} />}
			caption="info"
			after="700 ₽"
			>
				{u.first_name +" "+ u.last_name}
		</RichCell>
	))
	return(
        <Group>
						{friendsGroup}
        </Group>
	)
};

export default AttackFriends