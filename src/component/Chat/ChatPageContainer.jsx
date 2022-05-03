import React from 'react';

import { connect } from 'react-redux';
import { AuthRedirectComponent } from '../../hoc/withAuthRedirect';
import { addNewMessage } from '../../redux/chatReducer';

import ChatPage from './ChatPage';
import { compose } from 'redux';

const ChatPageContainer = (props) => {
    return (
        <ChatPage {...props} />
    )
}

let mapStateToProps = (state) => {
    return {
        chatPage: state.chatPage,
        auth: state.auth
    }
}

export default compose(
    connect(mapStateToProps, { addNewMessage }),
    AuthRedirectComponent
)(ChatPageContainer)

// let withAuthRedirectComponent = AuthRedirectComponent(ChatPage)

// const ChatPageContainer = connect(mapStateToProps, { addNewMessage, updateMessageText })(withAuthRedirectComponent);
// export default ChatPageContainer;