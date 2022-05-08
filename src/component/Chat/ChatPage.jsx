import React, { createRef } from 'react';
import { Field, reduxForm } from 'redux-form';

import { required, maxLengthCreator } from '../utils/validators';
import { TextAreaField } from '../FieldControls/FieldControls';

import style from './ChatPage.module.css';
import ChatItem from './ChatItem/ChatItem';
import Messages from './Messages/Messages';

const ChatPage = (props) => {

    let messageAdd = (value) => {
        props.addNewMessage(value.newMessage)
    }

    const maxLenthCreator10 = maxLengthCreator(10);

    let addMessageForm = (props) => {
        return (
            <form className={style.messageHere} onSubmit={props.handleSubmit}>
                {/* <textarea onChange={updateInputText}  ref={textAreaValue} value={ props.chatPage.newMessage }></textarea>
                <button onClick={messageAdd} className={ style.sendMsgBtn }>Send</button> */}
                <Field name="newMessage" placeholder="add your message..." component={TextAreaField} validate={[required, maxLenthCreator10]}/>
                <button className={style.sendMsgBtn}>Send</button>
            </form>
        )
    }

    const AddMessageReduxForm = reduxForm({form: "messageForm"})(addMessageForm);

    return(
        <div className={style.chat__wrapper}>
            <h2>Chat component</h2>
            <div className={style.chat__column}>
                <div className={style.chat__list}>
                    <ChatItem chat={props.chatPage.chats}/>
                </div>
                <div className={style.chat__item}>
                    <Messages message={props.chatPage.messages}/>
                    <AddMessageReduxForm onSubmit={messageAdd} />
                </div>
            </div>
        </div>
    )
}

export default ChatPage;