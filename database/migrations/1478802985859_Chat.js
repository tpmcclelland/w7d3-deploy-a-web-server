'use strict'

const Schema = use('Schema')

class ChatsTableSchema extends Schema {

  up () {
    this.create('chats', (table) => {
        table.string('message')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('chats')
  }

}

module.exports = ChatsTableSchema
