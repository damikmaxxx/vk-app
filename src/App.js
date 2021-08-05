import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { connect } from "react-redux";
import {changeInventory, CHANGE_MONEY,CHANGE_ROKET} from "./redux/inventory-reducer"
import {setFriends} from "./redux/user-reducer"
import {setUser} from "./redux/user-reducer"


//descriprion
import { HOUSE_DESCRIPTION, MONEY_DESCRIPTION, PEOPLE_DESCRIPTION, ROKET_DESCRIPTION,FOOD_DESCRIPTION } from './text/Description';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Base from './panels/Base';
import Inventory from './panels/Inventory';
import Friends from './panels/Friends';
import ActionNavigator from './panels/Action/ActionNavigator';
import Attack from './panels/Action/Attack/Attack';
import DescriptionCreator from './creator/DescriptionCreator';

import { firebaseAPI } from './api/api';
import { getDbInventory, setAccessToken, setInitSuccess,setDbInventory } from './redux/auth-reducer';

import TimerCreator from './creator/TimerCreator';
import AttackUserPage from './panels/Action/Attack/AttackUserPage';
import PageView from './panels/PageView/PageView';
import { go } from './redux/app-reducer';
const APP_ID = 7903112;
const App = (props) => {
	const [giveGold, setGiveGold] = useState(null);
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
			props.setInitSuccess()
			setPopout(null);
			
		}
		fetchData();
		
		
		
	}, []);
	
	useEffect(() => {
		async function initTimer() {
			if (!props.init) return
			setGiveGold(TimerCreator({"name":"increaseMoney","time":1*20*1000,"user":props.user,"repeat":true},() => {
				props.changeInventory(CHANGE_MONEY,+10)
			}))
		}
		initTimer()
		
			
	},[props.init])
	useEffect(() => {
		if (props.init){
			
			props.setDbInventory(props.user,props.inventory)
		}
	})
	
	//DescriptionCreator creates group with description
	const DescriptionPanels = {
		MoneyDesc	:DescriptionCreator({what:"Money",desc:MONEY_DESCRIPTION}),
		PeopleDesc	:DescriptionCreator({what:"People",desc:PEOPLE_DESCRIPTION}),
		HouseDesc	:DescriptionCreator({what:"House",desc:HOUSE_DESCRIPTION}),
		RoketDesc	:DescriptionCreator({what:"Roket",desc:ROKET_DESCRIPTION}),
		FoodDesc	:DescriptionCreator({what:"Food",desc:FOOD_DESCRIPTION}),
	}
	const DescPanelsBlocks = Object.keys(DescriptionPanels).map(key => {
		const DescPanel = DescriptionPanels[key];
		const name = String(key)
		const id = name.charAt(0).toLowerCase() + name.slice(1);
		return(
			<DescPanel key={id} {...props} id={id}  go={props.go}/>
		)
		
	})
	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={props.activePanel} popout={popout}>
					<Home {...props} id='home'  go={props.go} />
					<Base {...props} id='base'  go={props.go} />
					<Inventory {...props} id='inventory'  go={props.go} />
					<Friends {...props} id='friends'  go={props.go} />

					{/* Action Navigator */}
					<ActionNavigator {...props} id='actionNavigator'  go={props.go}/>
					<Attack {...props} id='attack'  go={props.go}/>
					<PageView {...props} id='pageView'   go={props.go}/>
					{/* Descriprion */}
					{DescPanelsBlocks}
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

let mapStateToProps = (state) => ({
	inventory:state.myInventory,
	activeUserPage:state.usersInfo.activeUserPage,
	friends:state.usersInfo.friends,
	user:state.usersInfo.user,
	init:state.auth.init,
	activePanel:state.appPage.activePanel,
})

export default connect(mapStateToProps,{setDbInventory,changeInventory,setFriends,setUser,setInitSuccess,getDbInventory,setAccessToken,go})(App)
