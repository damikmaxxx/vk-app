import { Group, Header, ModalPage,ModalCard ,Div, Panel, PanelHeader, Button,Cell,Avatar,PanelHeaderBack, InfoRow, SimpleCell, Card, CardGrid, Link, HorizontalCell, HorizontalScroll} from "@vkontakte/vkui"
import { connect } from "react-redux"
import { Icon24DollarCircleOutline } from '@vkontakte/icons';
import { Icon44SmileOutline } from '@vkontakte/icons';
import { Icon24HomeOutline } from '@vkontakte/icons';
import { Icon24SendOutline } from '@vkontakte/icons';
import { Icon28MortarOutline } from '@vkontakte/icons';
const ModalDefenseInfo = ({ id,unseen,friends}) => {
    if(!unseen){
        return <ModalCard  id={id}></ModalCard>
    }
    const activeUserPage = Number(Object.keys(unseen.defend)[0])
    const timeAttack = Number(unseen.defend[activeUserPage].timeAttack)
    const attackRoket = Number(unseen.defend[activeUserPage].attack) 
    const destroyed = unseen.defend[activeUserPage].destroyed 
    const userPageInfo = friends.find(user => user.id == activeUserPage) 
    const PictureName = {
        money:Icon24DollarCircleOutline,
        people:Icon44SmileOutline,
        house:Icon24HomeOutline,
        roket:Icon24SendOutline,
        food:Icon28MortarOutline,
    }
    const inv = Object.keys(destroyed).map(key =>{
        const Pic = PictureName[key]
        return(
            <HorizontalCell key={key} size='s' header={<div style={{textAlign:"center"}}>{destroyed[key]}</div>}>
                <Pic width={25} height={25}/>
            </HorizontalCell>
        )    
    })
    
    return(
        <ModalCard id={id} header={"Defend info"}>
            <Group header={<Header mode="secondary">User info</Header>}>
                <Cell 
                    before={userPageInfo?.photo_200_orig ? <Avatar src={userPageInfo.photo_200_orig}/> : null}
                    description={userPageInfo.city && userPageInfo.city.title ? userPageInfo.city.title : ''}
                    after={<div style={{display:'flex',alignItems:'center',color:'black'}}>{attackRoket}<Icon24SendOutline width={20} height={20}/></div>}
                    description={timeAttack}
                >
                    {`${userPageInfo.first_name} ${userPageInfo.last_name}`}
                </Cell>
                <Header mode="secondary">Destroied</Header>
                <HorizontalScroll>
                    <div style={{display: 'flex',justifyContent:"space-between"}}>
                    {inv}
                    </div>
                </HorizontalScroll>
            </Group>
        </ModalCard>
    )
}


let mapStateToProps = (state) => ({
    unseen:state.usersInfo.unseen,
    friends:state.usersInfo.friends,
    inventory:state.myInventory
})
export default connect(mapStateToProps,{})(ModalDefenseInfo)