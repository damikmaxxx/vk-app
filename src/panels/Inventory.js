import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,PanelHeaderBack, InfoRow, SimpleCell, Card, CardGrid, Link } from '@vkontakte/vkui';
import roket from '../img/roket.png';
import persik from '../img/persik.png';
import { Icon24DollarCircleOutline } from '@vkontakte/icons';
import { Icon44SmileOutline } from '@vkontakte/icons';
import { Icon24HomeOutline } from '@vkontakte/icons';
import { Icon24SendOutline } from '@vkontakte/icons';
import HeaderUp from '../components/Header/HeaderUp';

import { connect } from "react-redux";


const ImgSize = {
    width:30,
    height:30,
}
const Inventory = ({ id, go,money,roket,house,people }) => {
    return(          
        
            <Panel id={id}>
            <HeaderUp go={go}  headerName="Inventory" backButton="base"/>
            <Group onClick={go} data-to="moneyDesc">
                <SimpleCell>
                <Header mode="secondary">Money</Header>
                <Div><div style={{display:'flex',alignItems:'center'}}>{money}<Icon24DollarCircleOutline width={ImgSize.width} height={ImgSize.height}/></div>  </Div>
                     
                </SimpleCell>
            </Group>
            <Group onClick={go} data-to="roketDesc">
                <SimpleCell>
                    <Header mode="secondary">Roket</Header>
                    <Div><div style={{display:'flex',alignItems:'center'}}>{roket}<Icon24SendOutline width={ImgSize.width} height={ImgSize.height}/></div>  </Div> 
                </SimpleCell>
            </Group>
            <Group onClick={go} data-to="houseDesc">
                <SimpleCell>
                <Header mode="secondary">House</Header>
                <Div><div style={{display:'flex',alignItems:'center'}}>{house}<Icon24HomeOutline width={ImgSize.width} height={ImgSize.height}/></div></Div>
                </SimpleCell>
            </Group>
            <Group  onClick={go} data-to="peopleDesc">
                <SimpleCell>
                <Header mode="secondary">People</Header>
                <Div><div style={{display:'flex',alignItems:'center'}}>{people}<Icon44SmileOutline width={ImgSize.width} height={ImgSize.height}/></div></Div>
                </SimpleCell>
            </Group>

        </Panel>
        );
}


let mapStateToProps = (state) => ({
    money:state.inventoryPage.money,
    roket:state.inventoryPage.roket,
    house:state.inventoryPage.house,
    people:state.inventoryPage.people,
	init:state.auth.init,
})

export default connect(mapStateToProps)(Inventory)
// export default Inventory;
