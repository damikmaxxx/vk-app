import React from 'react';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,PanelHeaderBack, InfoRow, SimpleCell, Card, CardGrid, Link } from '@vkontakte/vkui';
import { Icon24DollarCircleOutline } from '@vkontakte/icons';
import { connect } from 'react-redux';
import {changeInventory} from "../../redux/inventory-reducer"
import {setFriends} from "../../redux/user-reducer"
import {setUser} from "../../redux/user-reducer"
const HeaderUp = (props) =>{
    return(
            <>
            {props.backButton ? 
            <PanelHeader
                left={<PanelHeaderBack onClick={props.go} data-to={props.backButton}/>}
            >
                {props.headerName}
            </PanelHeader>
            :
            <PanelHeader>
                {props.headerName}
            </PanelHeader>
            }
        
            {props.user &&
            <Group header={<Header mode="secondary">Your profile</Header>}>
                <Cell 
                    before={props.user.photo_200 ? <Avatar src={props.user.photo_200}/> : null}
                    description={props.user.city && props.user.city.title ? props.user.city.title : ''}
                    after={<div style={{display:'flex',alignItems:'center',color:'black'}}>{props.money}<Icon24DollarCircleOutline width={30} height={30}/></div>}
                >
                    {`${props.user.first_name} ${props.user.last_name}`}
                </Cell>
            </Group>}
            </>
        )
} 

let mapStateToProps = (state) => ({
    money:state.inventoryPage.money,
	user:state.usersInfo.user
})

export default connect(mapStateToProps)(HeaderUp)