'use strict'

class HobbiesController {
    * index(request, response) {
        var hobbies = [
            {
                coding: 'javascript',
                drinking: 'bourbon',
                workout: 'lifting weights'
            },
            {
                coding: 'ruby',
                drinking: 'scotch',
                workout: 'running'
            }
        ]
        console.log(hobbies)
        yield response.sendView('hobbies', {hobbies: hobbies})
    }
}

module.exports = HobbiesController
