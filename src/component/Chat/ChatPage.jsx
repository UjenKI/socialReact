import React, { createRef } from 'react';

// import { Navigate } from 'react-router-dom';

import style from './ChatPage.module.css';
import ChatItem from './ChatItem/ChatItem';
import Messages from './Messages/Messages';

const ChatPage = (props) => {

console.log(props.auth.isAuth)

// if(!props.auth.isAuth) return <Navigate to={'/login'} />

    let textAreaValue = React.createRef();

    let messageAdd = () => {
        props.addMessage()
    }

    let updateInputText = () => {
        let txt = textAreaValue.current.value;
        props.updateTextMessage(txt);
        console.log(props.chatPage);
    }

    return(
        <div className={style.chat__wrapper}>
            <h2>Chat component</h2>
            <div className={style.chat__column}>
                <div className={style.chat__list}>
                    <ChatItem chat={props.chatPage.chats}/>
                </div>
                <div className={style.chat__item}>
                    <Messages message={props.chatPage.messages}/>
                   <div className={style.messageHere}>
                        <textarea onChange={updateInputText}  ref={textAreaValue} value={ props.chatPage.newMessage }></textarea>
                        <button onClick={messageAdd} className={ style.sendMsgBtn }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;