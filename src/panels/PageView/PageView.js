import { Group, Header, Panel, ScreenSpinner, Tabs, TabsItem } from '@vkontakte/vkui';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import HeaderOther from '../../components/Header/HeaderOther';
import { INIT_DATE } from '../../redux/auth-reducer';
import { firebaseAPI } from '../../api/api';
import AttackUserPage from '../Action/Attack/AttackUserPage';
import CheckUserInfo from './CheckUserInfo';
import { go } from '../../redux/app-reducer';
const PageView = ({ id, go,activeUserPage}) => {
    const [activeTabs,setActiveTabs] = useState('check');	
    const [getUserInfo,setGetUserInfo] = useState(null);
    
    useEffect(() => {
        const getUser = async () => {
            await firebaseAPI.getUserInventory(activeUserPage).then((snapshot) => { 
                const val = snapshot.val()
                if (val == null){
                    firebaseAPI.updateFullUser(activeUserPage,INIT_DATE)
                    setGetUserInfo(INIT_DATE)
                }
                else{
                    setGetUserInfo(val)
                }
                
            })	
            
        }
        getUser()
    },[])
    																																																																																					
    return(
        <Panel id={id}>
            {getUserInfo ? 
            <>
            <HeaderOther go={go} headerName="Profile" backButton="base" money={getUserInfo.money}/>
                <Group header={<Header mode="secondary">Action</Header>}>
                    <Tabs>
                        <TabsItem selected={activeTabs === "check"} onClick={() => {
                            setActiveTabs("check")
                        }}>
                            check
                        </TabsItem>
                        <TabsItem selected={activeTabs === "attack"} onClick={() => {
                            setActiveTabs("attack")
                        }}>
                            attack 
                        </TabsItem>
                    </Tabs>
                    {activeTabs === "check" && <CheckUserInfo  inventoryProfile={getUserInfo} go={go}/> }
                    {activeTabs === "attack" && <AttackUserPage inventoryProfile={getUserInfo}/>}
                </Group> 
            </>
             : <ScreenSpinner size='large' />}
            
        </Panel>
    )
}
const mapStateToProps  = (state) => ({
	activeUserPage:state.usersInfo.activeUserPage,
	friends:state.usersInfo.friends,
})
export default connect(mapStateToProps,{go})(PageView)