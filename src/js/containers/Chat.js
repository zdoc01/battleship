import { connect } from 'react-redux';
import { sendMessage } from '../actions/creators';
import Chat from '../components/Chat';

const mapDispatchToProps = dispatch => ({
	onSubmit: message => {
		dispatch(sendMessage(message));
	}
});

const mapStateToProps = state => ({
	messages: state.messages
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
