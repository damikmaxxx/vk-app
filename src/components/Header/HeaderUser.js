import React from 'react';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,PanelHeaderBack, InfoRow, SimpleCell, Card, CardGrid, Link } from '@vkontakte/vkui';
import { Icon24DollarCircleOutline } from '@vkontakte/icons';
import { connect } from 'react-redux';
import {changeInventory} from "../../redux/inventory-reducer"
import {setFriends} from "../../redux/user-reducer"
import {setUser} from "../../redux/user-reducer"
const HeaderUser = ({go,backButton,headerName,user,money}) =>{
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
        
            {user &&
            <Group header={<Header mode="secondary">Your profile</Header>}>
                <Cell 
                    before={user.photo_200 ? <Avatar src={user.photo_200}/> : null}
                    description={user.city && user.city.title ? user.city.title : ''}
                    after={<div style={{display:'flex',alignItems:'center',color:'black'}}>{money}<Icon24DollarCircleOutline width={30} height={30}/></div>}
                >
                    {`${user.first_name} ${user.last_name}`}
                </Cell>
            </Group>}
            </>
        )
} 

let mapStateToProps = (state) => ({
    money:state.myInventory.money,
	user:state.usersInfo.user
})

export default connect(mapStateToProps)(HeaderUser)