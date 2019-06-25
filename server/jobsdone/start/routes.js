'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update')

Route.group(() => {
  Route.get('users/:id', 'UserController.show')
  Route.put('users/:id', 'UserController.update')
  Route.get('search', 'SearchController.index')
  Route.resource('tasks', 'TaskController').apiOnly()
  Route.resource('types', 'TypeController').apiOnly()
}).middleware(['auth'])
