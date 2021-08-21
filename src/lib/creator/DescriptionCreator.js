import React from 'react';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,PanelHeaderBack, CardGrid, Card } from '@vkontakte/vkui';
import { Icon24DollarCircleOutline } from '@vkontakte/icons';
import HeaderUser from '../../components/Header/HeaderUser';
const DescriptionCreator = (create) => {																																																																																										
    return ({id,go}) => (
		<Panel id={id}>		
			<HeaderUser go={go}  headerName={create.what} backButton="inventory"/>

				<Group header={<Header mode="secondary">decription</Header>}>
                    <Div>
                    {create.desc}
                    </Div>
					
				</Group>
			</Panel>
		)
}



export default DescriptionCreator