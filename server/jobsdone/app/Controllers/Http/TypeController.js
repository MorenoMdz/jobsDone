'use strict'

const Type = use('App/Models/Type')

class TypeController {
  async index () {
    const types = await Type.query()
      .with('user')
      .fetch()
    return types
  }

  async store ({ request, auth }) {
    const data = request.only(['title'])
    const type = await Type.create({ ...data, user_id: auth.user.id })
    return type
  }

  async show ({ params }) {
    const type = await Type.findOrFail(params.id)
    await type.load('user')
    return type
  }

  async update ({ params, request, response }) {
    const data = request.only(['title'])
    try {
      const type = await Type.findOrFail(params.id)
      type.merge(data)
      await type.save()
      return type
    } catch (error) {
      response.status(error.status).send({ error: { message: 'an error ocurred' } })
    }
  }

  async destroy ({ params, response }) {
    try {
      const type = await Type.findOrFail(params.id)
      await type.delete()
      response.send({ success: { message: 'type deleted' } })
    } catch (error) {
      response.status(error.status).send({ error: { message: 'an error ocurred' } })
    }
  }
}

module.exports = TypeController
