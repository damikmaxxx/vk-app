import React, { useState } from 'react';
import { Group, Card,CardGrid } from '@vkontakte/vkui';
import { Icon24DollarCircleOutline } from '@vkontakte/icons';

const AttackFriends = ({friends}) => {
	const cardFriends	= friends.map(u =><Card>{<img style={{width:"100%",height:"200px"}} src={u.photo_200_orig}/>}</Card>)	
	return(
        <Group>
            <Group>
					<CardGrid size="s">
						{cardFriends}
					</CardGrid>
				</Group>
        </Group>
	)
};


export default AttackFriends