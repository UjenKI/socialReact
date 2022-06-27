import React from 'react';

import style from './Message.module.css';

const Messages = ({message}) => {
    let messages = message.map(msg => {
        return (
            <div key={msg.id} className={style.messages}>
                <p>{msg.text}</p>
            </div>
        )
    })

    return(
        <div>
            { messages }
        </div>
        
    )
}

export default Messages;