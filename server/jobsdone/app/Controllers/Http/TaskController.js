'use strict'

const Task = use('App/Models/Task')

class TaskController {
  async index () {
    const tasks = await Task.query()
      .with('user')
      .fetch()
    return tasks
  }

  async store ({ request, auth }) {
    const data = request.only(['title', 'value', 'duration', 'type_id'])
    const task = await Task.create({ ...data, user_id: auth.user.id })
    console.log('task', task)
    return task
  }

  async show ({ params }) {
    const task = await Task.findOrFail(params.id)
    await task.load('user')
    await task.load('type')
    return task
  }

  async update ({ params, request, response }) {
    const task = await Task.findOrFail(params.id)
    const data = request.only(['title', 'value', 'duration', 'type_id'])
    console.log(data)
    try {
      task.merge(data)
      await task.save()
      return task
    } catch (error) {
      response.status(error.status).send({ error: { message: 'an error ocurred' } })
    }
  }

  async destroy ({ params, response }) {
    const task = await Task.findOrFail(params.id)
    try {
      await task.delete()
      response.send({ success: { message: 'task deleted' } })
    } catch (error) {
      response.status(error.status).send({ error: { message: 'an error ocurred' } })
    }
  }
}

module.exports = TaskController
