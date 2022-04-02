import React from 'react';

import { connect } from 'react-redux';
import { addNewMessageAC, updateMessageTextAC } from '../../redux/chatReducer';

import ChatPage from './ChatPage';

let mapStateToProps = (state) => {
    return {
        chatPage: state.chatPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addNewMessageAC())
        },
        updateTextMessage: (newMessage) => {
            dispatch(updateMessageTextAC(newMessage))
        }
    }
}

const ChatPageContainer = connect(mapStateToProps, mapDispatchToProps)(ChatPage);
export default ChatPageContainer;