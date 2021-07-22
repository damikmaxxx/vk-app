import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { connect } from "react-redux";
import {changeInventory} from "./redux/inventory-reducer"
import {setFriends} from "./redux/user-reducer"
import {setUser} from "./redux/user-reducer"


//descriprion
import { HOUSE_DESCRIPTION, MONEY_DESCRIPTION, PEOPLE_DESCRIPTION, ROKET_DESCRIPTION } from './text/Description';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Base from './panels/Base';
import Inventory from './panels/Inventory';
import Friends from './panels/Friends';
import ActionNavigator from './panels/Action/ActionNavigator';
import Attack from './panels/Action/Attack/Attack';
import DescriptionCreator from './creator/DescriptionCreator';

import { firebaseAPI, DB_USER_MONEY,DB_USER_ROKET,DB_USER_HOUSE,DB_USER_PEOPLE } from './api/api';
import { getDbInventory, setAccessToken, setInitSuccess } from './redux/auth-reducer';

const APP_ID = 7903112;
const App = (props) => {
	const [activePanel, setActivePanel] = useState('base');
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	
	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			//user
			const user = await bridge.send('VKWebAppGetUserInfo');
			props.setUser(user)

			//access_token
			const userInfo = await bridge.send("VKWebAppGetAuthToken", {"app_id": APP_ID, "scope": "friends,status"});
			props.setAccessToken(userInfo.access_token)

			//User friends
			const userFriends = await bridge.send("VKWebAppCallAPIMethod", {"method": "friends.get", "params": {"fields":"nickname,photo_200_orig","v":"5.131", "access_token":userInfo.access_token,}});
			props.setFriends(userFriends.response.items)
			
			await props.getDbInventory(user)
			setPopout(null);
			props.setInitSuccess()
		}
		fetchData();
		
		

	}, []);
	useEffect(() => {
		if (props.init){
			firebaseAPI.updateFullUser(props.user.id,{
				[DB_USER_MONEY]:props.money,
				[DB_USER_ROKET]:props.roket,
				[DB_USER_HOUSE]:props.house,
				[DB_USER_PEOPLE]:props.people,
			})
		}
	})
	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};
	//DescriptionCreator creates group with description
	const MoneyDesc  =  DescriptionCreator({what:"Money",desc:MONEY_DESCRIPTION})
	const PeopleDesc =  DescriptionCreator({what:"People",desc:PEOPLE_DESCRIPTION})
	const HouseDesc  =  DescriptionCreator({what:"House",desc:HOUSE_DESCRIPTION})
	const RoketDesc  =  DescriptionCreator({what:"Roket",desc:ROKET_DESCRIPTION})
	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Home {...props} id='home'  go={go} />
					<Base {...props} id='base'  go={go} />
					<Inventory id='inventory'  go={go} />
					<Friends {...props} id='friends'  go={go} />

					{/* Action Navigator */}
					<ActionNavigator {...props} id='actionNavigator'  go={go}/>
					<Attack {...props} id='attack'  go={go}/>

					{/* Descriprion */}
					<MoneyDesc {...props} id='moneyDesc'  go={go}/>
					<PeopleDesc {...props} id='peopleDesc'  go={go}/>
					<HouseDesc {...props} id='houseDesc'  go={go}/>
					<RoketDesc {...props} id='roketDesc'  go={go}/>
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

let mapStateToProps = (state) => ({
    money:state.inventoryPage.money,
    roket:state.inventoryPage.roket,
    house:state.inventoryPage.house,
    people:state.inventoryPage.people,

	friends:state.usersInfo.friends,
	user:state.usersInfo.user,
	init:state.auth.init,
})

export default connect(mapStateToProps,{changeInventory,setFriends,setUser,setInitSuccess,getDbInventory,setAccessToken})(App)
