import React from 'react'

import ChatText from './ChatText'
import ChatImage from './ChatImage'

class Chats extends React.Component {
    constructor(props) {
        super(props)
        this.handleGetChats = this.handleGetChats.bind(this)
        this.getChats = this.getChats.bind(this)
        this.state = {
            chats: []
        }
    }

    componentDidMount() {
        this.getChats()
    }

    getChats() {
        fetch('/reactchats.json', {
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
