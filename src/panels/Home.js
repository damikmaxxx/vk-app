import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import HeaderUser from '../components/Header/HeaderUser';
const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<HeaderUser headerName="Home"/>

		<Group header={<Header mode="secondary">Navigation</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="base">
					BASE
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
