import { Button, Div, Group, Header, ModalCard, Panel, Textarea, withAdaptivity } from '@vkontakte/vkui';
import React from 'react';
import { connect } from 'react-redux';
import { MODAL_CARD_NOTIFICATIONS } from '../App';
import HeaderUser from '../components/Header/HeaderUser';
import { go, modalGo, MODAL_PAGE_DEFENSE_INFO } from '../redux/app-reducer';
import PropTypes from 'prop-types';
let Base = ({ id, go, modalGo,viewWidth}) => {
	return(
	
	<Panel id={id}>
		<HeaderUser go={go}  headerName="Base" backButton="home"/>

		<Group header={<Header mode="secondary">Navigation</Header>}>
			<Div>
				<Button stretched size="l"  onClick={go} data-to="inventory" >
					Inventory 
				</Button>
			</Div>
			<Div>
				<Button stretched size="l"  onClick={go} data-to="friends">
					Friends
				</Button>
			</Div>
			<Div>
				<Button stretched size="l"  onClick={go} data-to="actionNavigator">
					Action
				</Button>
			</Div>
		</Group>
	</Panel>
	);
}
    
	


let mapStateToProps = (state) => ({
})
	Base = withAdaptivity(Base,{ viewWidth: true });
Base.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	modalGo: PropTypes.func.isRequired,
};


export default connect(mapStateToProps,{go,modalGo})(Base)