import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,PanelHeaderBack, CardGrid, Card, RichCell } from '@vkontakte/vkui';
import { Icon24DollarCircleOutline } from '@vkontakte/icons';
import HeaderUser from '../components/Header/HeaderUser';
import { setActiveUserPage } from '../redux/user-reducer';
import { connect } from 'react-redux';
import { go } from '../redux/app-reducer';
const Friends = ({ id, go,friends,setActiveUserPage}) => {	
	const entryFriendsProfile = (e,id) => {
		setActiveUserPage(id)
		go(e)
	}
	const friendsGroup	= friends.map(u =>(
		<RichCell onClick={(e) => entryFriendsProfile(e,u.id)}
		data-to="pageView"
			key={u.id}
			before={<Avatar size={48} src={u.photo_200_orig} />}
			caption="offline"
			after={<div><span style={{display:'flex',alignItems:'center',color:'black'}}>{700}<Icon24DollarCircleOutline width={30} height={30}/></span></div>}
			>
				{u.first_name +" "+ u.last_name}
		</RichCell>
	))
	
	// <Card key={u.id}>{<img style={{width:"100%",height:"200px"}} src={}/>}</Card>)																																																																																										
    return(
		<Panel id={id}>
				<HeaderUser go={go} headerName="Friends" backButton="base"/>

				<Group header={<Header mode="secondary">Your Friends</Header>}>
						{friendsGroup}
				</Group>
			</Panel>
		)
}
const mapStateToProps  = (state) => ({
	friends:state.usersInfo.friends,
})

Friends.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	friends: PropTypes.array,
	setActiveUserPage:PropTypes.func.isRequired,
};
export default connect(mapStateToProps,{setActiveUserPage,go})(Friends)
