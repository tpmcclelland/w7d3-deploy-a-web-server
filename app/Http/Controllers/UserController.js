'use strict'

const Database = use('Database')

class UserController {

  * index(request, response) {
    //
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    //
  }

  * show(request, response) {
    var email = request.input('email')
    var data

    if (email !== null) {
      var user = yield Database.from('users').where('email', email)

      if(user.length !== 0) {
        data = user
      } else {
        data = {error: 'no user with that email was found'}
      }
    } else {
      data = {error: 'no email was received'}
    }

      response.json(data)

  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = UserController
