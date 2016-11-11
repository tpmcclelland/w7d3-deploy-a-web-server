import React from 'react'

import Chats from './Chats'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.handlePostChange = this.handlePostChange.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.post = this.post.bind(this)
        this.state = {
            post: ''
        }
    }

    handlePostChange(e) {
        this.setState({
            post: e.target.value
            })
    }

    handleKeyPress(e) {

        if (e.key === 'Enter') {
            var message = this.state.post
            this.setState({
                post: ''
            })

            this.post(message)
        }
    }

    post(message) {
        fetch('/chats', {
            method: 'POST',
            body: JSON.stringify({
                message: message
            }),
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

    render() {
        return <div className="container">
            <div className="form-group">
                <label htmlFor="message">Send Message</label>
                <input type="text" name="message" className="form-control" value={this.state.post} onChange={this.handlePostChange} onKeyPress={this.handleKeyPress}/>
            </div>
            <div className="row-wrapper">
                <Chats />
            </div>
        </div>
    }
}

export default App
