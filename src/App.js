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
const APP_ID = 7903112;
const App = (props) => {
	const [activePanel, setActivePanel] = useState('base');
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
			setGiveGold(TimerCreator({"name":"increaseMoney","time":1*20*1000,"user":props.user,"repeat":true,"consoleView":true},() => {
				props.changeInventory(CHANGE_MONEY,+10)
			}))
			// setGiveGold(TimerCreator({"name":"increaseRoket","time":1*20*1000,"user":props.user,"repeat":true},() => {
			// 	props.changeInventory(CHANGE_ROKET,+1)
			// }))
		}
		initTimer()
		
			
	},[props.init])
	useEffect(() => {
		if (props.init){
			
			props.setDbInventory(props.user,props.inventory)
			// firebaseAPI.updateEntryTimeBD(props.user.id,props.entryTime)
			// let diff = props.entryTime - props.oldEntryTime
			// giveGold.decrease(diff)
		}
	})
	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

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
			<DescPanel {...props} id={id}  go={go}/>
		)
		
	})
	

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Home {...props} id='home'  go={go} />
					<Base {...props} id='base'  go={go} />
					<Inventory {...props} id='inventory'  go={go} />
					<Friends {...props} id='friends'  go={go} />

					{/* Action Navigator */}
					<ActionNavigator {...props} id='actionNavigator'  go={go}/>
					<Attack {...props} id='attack'  go={go}/>

					{/* Descriprion */}
					{DescPanelsBlocks}
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

let mapStateToProps = (state) => ({
	inventory:state.inventoryPage,
	friends:state.usersInfo.friends,
	user:state.usersInfo.user,
	init:state.auth.init,
})

export default connect(mapStateToProps,{setDbInventory,changeInventory,setFriends,setUser,setInitSuccess,getDbInventory,setAccessToken})(App)
