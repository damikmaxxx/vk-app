import React, { useState } from 'react';
import { Group, Card,CardGrid } from '@vkontakte/vkui';
import { Icon24DollarCircleOutline } from '@vkontakte/icons';

const AttackOther = ({friends}) => {
    // const cardFriends	= friends.map(u =><Card>{<img style={{width:"100%",height:"200px"}} src={u.photo_200_orig}/>}</Card>)	
	return(
        <Group>
            {/* <CardGrid size="s">
                {cardFriends}
            </CardGrid> */}
        </Group>
	)
};


export default AttackOther