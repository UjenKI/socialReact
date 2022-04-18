import React from 'react';

import { connect } from 'react-redux';
import { AuthRedirectComponent } from '../../hoc/withAuthRedirect';
import { addNewMessage, updateMessageText } from '../../redux/chatReducer';

import ChatPage from './ChatPage';

let mapStateToProps = (state) => {
    return {
        chatPage: state.chatPage,
        auth: state.auth
    }
}

let withAuthRedirectComponent = AuthRedirectComponent(ChatPage)

const ChatPageContainer = connect(mapStateToProps, { addNewMessage, updateMessageText })(withAuthRedirectComponent);
export default ChatPageContainer;