import React from 'react'

import ChatText from './ChatText'
import ChatImage from './ChatImage'

class Chats extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <ul id="messages" className="list-group">
            <ChatText message="test" />
            <ChatImage image="http://i.giphy.com/wNlks0ID1igO4.gif" />
     </ul>
    }
}

export default Chats
