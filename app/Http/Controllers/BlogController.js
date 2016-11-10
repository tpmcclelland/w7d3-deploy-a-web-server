'use strict'

const Post = use('App/Model/Post')

class BlogController {

  * index(request, response) {
    //
    var posts = yield Post.query().select('*').orderBy('id', 'desc')
    yield response.sendView('posts', {
      posts: posts
    })
  }

  * create(request, response) {
    //
    yield response.sendView('create')
  }

  * store(request, response) {
    //
    var post = new Post()
    post.author = request.input('author')
    post.headline = request.input('headline')
    post.body = request.input('body')

    yield post.save()

    response.redirect('/blog')
  }

  * show(request, response) {
    //
    var post = yield Post.find(request.param('id'))
    yield response.sendView('post', {
      post: post
    })
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

module.exports = BlogController
