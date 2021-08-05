import { Group, Header, Panel, ScreenSpinner, Tabs, TabsItem,CardGrid,Card } from '@vkontakte/vkui';
import React, { useState } from 'react';
import { Icon24DollarCircleOutline } from '@vkontakte/icons';
import { Icon44SmileOutline } from '@vkontakte/icons';
import { Icon24HomeOutline } from '@vkontakte/icons';
import { Icon24SendOutline } from '@vkontakte/icons';
import { Icon28MortarOutline } from '@vkontakte/icons';
import MoneyBackground from "../../assets/images/moneyBackground.jpg"
import WorkerBackground from "../../assets/images/workerBackground.jpg"
import styles from './PageView.module.css';
// import { setActiveUserPage } from '../../redux/user-reducer';
// import AttackUserPage from '../Action/Attack/AttackUserPage';
const CheckUserInfo = ({ id, go,inventoryProfile}) => {	
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
    const BackgroundName = {
        money:MoneyBackground,
        people:WorkerBackground,
        house:null,
        roket:null,
        food:null,
    }
    const inv = Object.keys(inventoryProfile).map(key =>{
        const Pic = PictureName[key]
        return(
            // 
                <Card key={key} className={styles.card}>
                {BackgroundName[key] ? <img src={BackgroundName[key]} alt={"logo"}/> : null  } 
                <span>{inventoryProfile[key]}<Pic width={ImgSize.width} height={ImgSize.height}/></span>
                     
                </Card>
        )    
    })																																																																																		
    return(
        <Group>
            {/* <CardGrid size="s">
                <Card className={styles.card}>
                    1000p
                </Card>
                <Card className={styles.card}>
                </Card>
                <Card className={styles.card}>
                </Card>
            </CardGrid> */}
            <CardGrid size="s">
                {inv}
            </CardGrid>
        </Group>
    )
}
export default CheckUserInfo