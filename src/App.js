import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ModalRoot, ModalCard, Button, Gradient, PanelHeaderButton, PanelHeaderClose, SimpleCell, ModalPage, ModalPageHeader, Title, Group, Header } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { connect } from "react-redux";
import {changeInventory, CHANGE_MONEY,CHANGE_ROKET, setInventory} from "./redux/inventory-reducer"
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
import { getDbInventory, setAccessToken, setInitSuccess,setDbInventory, getBdUnseenInfo, listensFunc } from './redux/auth-reducer';
import firebase from './index';
import TimerCreator from './creator/TimerCreator';
import AttackUserPage from './panels/Action/Attack/AttackUserPage';
import PageView from './panels/PageView/PageView';
import { go, modalGo, MODAL_PAGE_DEFENSE_INFO} from './redux/app-reducer';
import { Icon56NotificationOutline } from '@vkontakte/icons';
import ModalDefenseInfo from './components/modalWindow/modalDefenseInfo'

const APP_ID = 7903112;

const App = (props) => {
	const [giveGold, setGiveGold] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const modal = (
		<ModalRoot  activeModal={props.activeModal} onClose={() => {props.modalGo(null,props.user.id)}}>
			<ModalDefenseInfo  id={MODAL_PAGE_DEFENSE_INFO} />
		</ModalRoot>
	  );

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
			
			await props.getDbInventory(user.id)

			await props.getBdUnseenInfo(user.id)

			props.setInitSuccess()
			setPopout(null);
			
		}
		fetchData();
		
		
		
	}, []);
	
	useEffect(() => {
		if (!props.init) return
		async function initTimer() {
			// setGiveGold(TimerCreator({"name":"increaseMoney","time":1*20*1000,"user":props.user,"repeat":true},() => {
			// 	props.changeInventory(CHANGE_MONEY,+10)
			// }))
		}
		initTimer()
		firebaseAPI.listenUpdateUser(props.user.id,props.listensFunc)

		
	},[props.init])

	useEffect(() => {
		if (props.init){
			props.setDbInventory(props.user.id,props.inventory)
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
			<DescPanel key={id}  id={id}  go={props.go}/>
		)	
	})
	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={props.activePanel} popout={popout} modal={modal}>
					<Home id='home'  />
					<Base id='base'/>
					<Inventory id='inventory'/>
					<Friends id='friends'/>

					{/* Action Navigator */}
					<ActionNavigator id='actionNavigator'/>
					<Attack id='attack' />
					<PageView id='pageView'/>
					
					{/* Descriprion */}
					{DescPanelsBlocks}
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

let mapStateToProps = (state) => ({
	inventory:state.myInventory,
	user:state.usersInfo.user,
	init:state.auth.init,
	activePanel:state.appPage.activePanel,
	activeModal:state.appPage.activeModal,
	unseen:state.usersInfo.unseen,
})

export default connect(mapStateToProps,{setDbInventory,changeInventory,setFriends,setUser,setInitSuccess,getDbInventory,setAccessToken,go,setInventory,modalGo,getBdUnseenInfo,listensFunc})(App)
