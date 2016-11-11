import React from 'react'

import Chats from './Chats'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="container">
            <div className="form-group">
                <label htmlFor="message">Send Message</label>
                <input type="text" id="message" name="message" className="form-control" value=''/>
            </div>
            <div className="row-wrapper">
                <Chats />
            </div>
        </div>
    }
}

export default App
