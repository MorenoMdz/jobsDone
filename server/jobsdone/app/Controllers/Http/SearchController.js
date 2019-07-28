'use strict'
const Task = use('App/Models/Task')
const { format, addDays, endOfMonth, startOfMonth } = require('date-fns')

class SearchController {
  async index ({ request, auth, response }) {
    const { day, month } = request.get()
    const userId = auth.user.id
    if (day) {
      const date = format(day, 'YYYY-MM-DD')
      const nextDay = addDays(date, 1)
      const tasks = await Task.query()
        .whereBetween('created_at', [date, nextDay])
        .where('user_id', userId)
        .with('type')
        .fetch()
      return tasks
    } else if (month) {
      const date = format(month, 'YYYY-MM-DD')
      const tasks = await Task.query()
        .where('created_at', '>', startOfMonth(date))
        .where('created_at', '<', endOfMonth(date))
        .where('user_id', userId)
        .fetch()
      console.log('tasks', tasks)
      return tasks
    }
    return response.send({ message: { error: 'No task found' } })
  }
}

module.exports = SearchController
