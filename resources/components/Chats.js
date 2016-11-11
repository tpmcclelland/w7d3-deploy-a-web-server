import React from 'react'

import ChatText from './ChatText'
import ChatImage from './ChatImage'

class Chats extends React.Component {
    constructor(props) {
        super(props)
        this.handleGetChats = this.handleGetChats.bind(this)
        this.getChats = this.getChats.bind(this)
        this.startPusher = this.startPusher.bind(this)
        // this.addChatMessage = this.addChatMessage.bind(this)
        this.state = {
            chats: []
        }
    }

    componentDidMount() {
        this.getChats()
        this.startPusher()
    }

    startPusher() {
        var pusher = new Pusher('001e13222340be518d6d', {
          encrypted: true
        })

        var pusherChannel = pusher.subscribe('chat_app')

        // pusherChannel.bind('new_chat', function(chat) {
        //   this.addChatMessage(chat)
        // })

        // I couldn't call my addChatMessage from here so I made it an arrow function instead.  Not sure this is right...
        pusherChannel.bind('new_chat', (chat) => {
            var newChats = this.state.chats
            newChats.unshift(chat)
            this.setState({
                chats: newChats
            })
        })
    }

    // addChatMessage(chat) {
    //     var newChats = this.state.chats
    //     newChats.unshift(chat.message)
    //     this.setState({
    //         chats: newChats
    //     })
    // }

    getChats() {
        fetch('/chats.json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(this.handleGetChats)
    }

    handleGetChats(response) {
        this.setState({
            chats: response
        })
    }

    render() {
        var messages = this.state.chats.map(function(chat, i) {
            if (chat.message.includes('http')) {
                return <ChatImage image={chat.message} key={i} />
            } else {
                return <ChatText message={chat.message} key={i} />
            }
        })

        return <ul id="messages" className="list-group">{messages}</ul>
    }
}

export default Chats
