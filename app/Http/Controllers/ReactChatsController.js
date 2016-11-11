'use strict'

const Pusher = require('pusher')
const Chat = use('App/Model/Chat')
const Env = use('Env')

class ReactChatsController {

  * index(request, response) {
    //
    const type = request.format()

    switch (type) {
      case 'json':
        var chats = yield Chat.query().orderBy('id', 'desc')
        response.json(chats)
        break
      case 'html':
        yield response.sendView('reactChats')
        break
      case null:
        yield response.sendView('reactChats')
        break
    }
  }

  * store(request, response) {
    //
    var message = request.input('message')

    var pusher = new Pusher({
      // appId: '131622',
      // key: '6e5f67bde794d28881ed',
      // secret: 'cc5ab615a7d0aa9056c4',
      appId: Env.get('PUSHER_APP_ID'),
      key: Env.get('PUSHER_KEY'),
      secret: Env.get('PUSHER_SECRET'),
      encrypted: true
    })

    pusher.trigger('chat_app', 'new_chat', {
      message: message
    })

    var chat = new Chat()
    chat.message = message
    yield chat.save()

    response.json(true)

  }

}

module.exports = ReactChatsController
