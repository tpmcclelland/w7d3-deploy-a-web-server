'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/hobbies', 'HobbiesController.index')

Route.get('/user', 'UserController.show')

Route.resource('/blog', 'BlogController')

// Route.resource('/chats', 'ChatsController')
Route.resource('/chats', 'ReactChatsController').formats(['json', 'html'])

// Route.get('/hobbies', function * (request, response) {
//     const format = request.format()
//     if (format === 'html') {
//         response.sendView('hobbies')
//     }
// })
// .formats(['json','html'])
