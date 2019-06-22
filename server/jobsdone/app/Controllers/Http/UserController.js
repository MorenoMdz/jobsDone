'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password', 'password_confirmation'])

    const user = await User.create(data)

    return user.username
  }
}

module.exports = UserController
