'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password', 'meta', 'currency'])

    const user = await User.create(data)

    return user.username
  }

  async show ({ params }) {
    const user = await User.findOrFail(params.id)

    return user
  }

  async update ({ params, request, response }) {
    const data = request.only(['meta', 'currency'])
    try {
      const user = await User.findOrFail(params.id)
      user.merge(data)
      await user.save()
      return user
    } catch (error) {
      response.status(error.status).send({ error: { message: 'an error ocurred' } })
    }
  }
}

module.exports = UserController
