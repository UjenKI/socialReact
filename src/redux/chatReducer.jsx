const NEW_MESSAGE = 'NEW_MESSAGE';
// const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

let initialState = {
    chats: [
        {id: 1, name: 'Natali'},
        {id: 2, name: 'Vova'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Kolya'},
        {id: 5, name: 'Dima'},
        {id: 6, name: 'Vlad'}
    ],
    messages: [
        {id: 1, text: 'hi)'},
        {id: 2, text: 'Hello)'},
        {id: 3, text: 'How are you?)'},
    ]
}

let chatReducer = (state = initialState, action) => {
    switch(action.type) {
        case NEW_MESSAGE: {
            let newMessage = {
                id: state.messages.length + 1,
                text: action.newMessage
            }

            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        }
        // case UPDATE_MESSAGE_TEXT: {
        //     return {
        //         ...state,
        //         newMessage: action.newMessage
        //     }
        // }
        default: {
            return state
        }
    }
}

export const addNewMessage = (newMessage) => ({type: NEW_MESSAGE, newMessage});
// export const updateMessageText = (newMessage) => ({type: UPDATE_MESSAGE_TEXT, newMessage});

export default chatReducer;