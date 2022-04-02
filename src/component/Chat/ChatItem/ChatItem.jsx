import React from 'react';

import {NavLink} from 'react-router-dom';

import style from './ChatItem.module.css';
// import ChatPage from '../ChatPage';

const ChatItem = (props) => {
    
    let chats = props.chat.map(item => {
        return(
            <li key={item.id}>
            <   NavLink to={`/chatPage/${item.id}`} className={style.chat__name}>{item.name}</NavLink>
            </li>
        )
    })

    return (
        <ul>
            {chats}       
        </ul>
    )
}

export default ChatItem;