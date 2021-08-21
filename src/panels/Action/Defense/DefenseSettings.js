import React, { useState } from 'react';
import { Group, Card,CardGrid,Header,SimpleCell,Switch} from '@vkontakte/vkui';
import { Icon24DollarCircleOutline } from '@vkontakte/icons';

const DefenseSettings = ({friends}) => {
	// const cardFriends	= friends.map(u =><Card>{<img style={{width:"100%",height:"200px"}} src={u.photo_200_orig}/>}</Card>)	
	return(
        <Group>
            <Header mode="secondary">Settings</Header>
              <SimpleCell disabled after={<Switch defaultChecked />}>Use rockets for defense (no effect)</SimpleCell>
              <SimpleCell disabled after={<Switch />}>... (no effect)</SimpleCell>
        </Group>
	)
};


export default DefenseSettings