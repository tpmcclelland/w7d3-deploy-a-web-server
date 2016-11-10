// Pusher Setup
var pusher = new Pusher('6e5f67bde794d28881ed', {
  encrypted: true
})

var pusherChannel = pusher.subscribe('chat_app')

pusherChannel.bind('new_chat', function(chat) {
  addChatMessage(chat)
})

function addChatMessage(chat) {
  //implement logic to add chat to message div
  var parentElement = document.getElementById('messages');
  var theFirstChild = parentElement.firstChild;
  var row = document.createElement('li')
  row.classList.add('list-group-item')
  row.innerHTML = chat.message
  parentElement.insertBefore(row, theFirstChild);
}

var message = document.getElementById('message')
message.addEventListener('keypress', handleKeyPress)

function handleKeyPress(e) {
  var message = e.target.value
  if (e.key === "Enter") {
    e.target.value = ''
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
}
