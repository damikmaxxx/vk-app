import { Group, Header, ModalPage,ModalCard ,Div, Panel, PanelHeader, Button,Cell,Avatar,PanelHeaderBack, InfoRow, SimpleCell, Card, CardGrid, Link, HorizontalCell, HorizontalScroll} from "@vkontakte/vkui"
import { connect } from "react-redux"
import { Icon24DollarCircleOutline } from '@vkontakte/icons';
import { Icon44SmileOutline } from '@vkontakte/icons';
import { Icon24HomeOutline } from '@vkontakte/icons';
import { Icon24SendOutline } from '@vkontakte/icons';
import { Icon28MortarOutline } from '@vkontakte/icons';
import { PICTURE_NAME } from "../../panels/Inventory";

const ModalDefenseInfo = ({ id,unseen,friends}) => {
    if(!unseen){
        return <ModalCard  id={id}></ModalCard>
    }
    // unseen.defend длина 
    // атака 1 из длина
    const attackUser =  Object.keys(unseen.defend).map(id => {
        const time = Number(unseen.defend[id].timeAttack)
        const timeAttack = new Date(time).toLocaleString('en-GB', { timeZone: 'UTC' });
        const attackRocket = Number(unseen.defend[id].attack) 
        const destroyed = unseen.defend[id].destroyed 
        const userPageInfo = friends.find(user => user.id == id)
        const inv = Object.keys(destroyed).map(key =>{
            const Pic = PICTURE_NAME[key]
            return(
                <HorizontalCell key={key} size='s' header={<div style={{textAlign:"center"}}>{destroyed[key]}</div>}>
                    <Pic width={25} height={25}/>
                </HorizontalCell>
            )    
        })
        return(
            <Group key={id} header={<Header mode="secondary">User info</Header>}>
                <Cell 
                    before={userPageInfo?.photo_200_orig ? <Avatar src={userPageInfo.photo_200_orig}/> : null}
                    description={userPageInfo.city && userPageInfo.city.title ? userPageInfo.city.title : ''}
                    after={<div style={{display:'flex',alignItems:'center',color:'black'}}>{attackRocket}<Icon24SendOutline width={20} height={20}/></div>}
                    description={"последнее нападение: "+ timeAttack}
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
        )
    })
     
    
    
    
    return(
        <ModalCard id={id} header={"Defend info"}>
                {attackUser}
            
        </ModalCard>
    )
}


let mapStateToProps = (state) => ({
    unseen:state.usersInfo.unseen,
    friends:state.usersInfo.friends,
    inventory:state.myInventory
})
export default connect(mapStateToProps,{})(ModalDefenseInfo)