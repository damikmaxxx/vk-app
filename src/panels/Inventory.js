import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,PanelHeaderBack, InfoRow, SimpleCell, Card, CardGrid, Link } from '@vkontakte/vkui';
import roket from '../img/roket.png';
import persik from '../img/persik.png';
import { Icon24DollarCircleOutline } from '@vkontakte/icons';
import { Icon44SmileOutline } from '@vkontakte/icons';
import { Icon24HomeOutline } from '@vkontakte/icons';
import { Icon24SendOutline } from '@vkontakte/icons';
import { Icon28MortarOutline } from '@vkontakte/icons';
import HeaderUp from '../components/Header/HeaderUp';

import { connect } from "react-redux";


const ImgSize = {
    width:30,
    height:30,
}
const PictureName = {
    money:Icon24DollarCircleOutline,
    people:Icon44SmileOutline,
    house:Icon24HomeOutline,
    roket:Icon24SendOutline,
    food:Icon28MortarOutline,
}
const Inventory = ({ id, go,inventory }) => {
    
    const inv = Object.keys(inventory).map(key =>{
        const Pic = PictureName[key]
        return(
            <Group onClick={go} data-to={key + "Desc"}>
                <SimpleCell>
                <Header mode="secondary">{key}</Header>
                <Div><div style={{display:'flex',alignItems:'center'}}>{inventory[key]}<Pic width={ImgSize.width} height={ImgSize.height}/></div>  </Div>
                     
                </SimpleCell>
            </Group>
        )    
    })
    return(          
        
            <Panel id={id}>
            <HeaderUp go={go}  headerName="Inventory" backButton="base"/>
            {inv}
        </Panel>
        );
}


let mapStateToProps = (state) => ({
	init:state.auth.init,
    inventory:state.inventoryPage
})

export default connect(mapStateToProps)(Inventory)
