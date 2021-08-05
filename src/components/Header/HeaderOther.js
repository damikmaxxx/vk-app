import React from 'react';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,PanelHeaderBack, InfoRow, SimpleCell, Card, CardGrid, Link } from '@vkontakte/vkui';
import { Icon24DollarCircleOutline } from '@vkontakte/icons';
import { connect } from 'react-redux';
import {changeInventory} from "../../redux/inventory-reducer"
import {setFriends} from "../../redux/user-reducer"
import {setUser} from "../../redux/user-reducer"
const HeaderOther = ({go,backButton,headerName,money,friends,activeUserPage}) =>{
    const userPageInfo = friends.find(user => user.id === activeUserPage)
    return(
            <>
            {backButton ? 
            <PanelHeader
                left={<PanelHeaderBack onClick={go} data-to={backButton}/>}
            >
                {headerName}
            </PanelHeader>
            :
            <PanelHeader>
                {headerName}
            </PanelHeader>
            }
        
            {userPageInfo &&
            <Group header={<Header mode="secondary">Profile</Header>}>
                <Cell 
                    before={userPageInfo.photo_200_orig ? <Avatar src={userPageInfo.photo_200_orig}/> : null}
                    description={userPageInfo.city && userPageInfo.city.title ? userPageInfo.city.title : ''}
                    after={<div style={{display:'flex',alignItems:'center',color:'black'}}>{money}<Icon24DollarCircleOutline width={30} height={30}/></div>}
                >
                    {`${userPageInfo.first_name} ${userPageInfo.last_name}`}
                </Cell>
            </Group>}
            </>
        )
} 

let mapStateToProps = (state) => ({
    activeUserPage:state.usersInfo.activeUserPage,
	friends:state.usersInfo.friends,
})

export default connect(mapStateToProps)(HeaderOther)