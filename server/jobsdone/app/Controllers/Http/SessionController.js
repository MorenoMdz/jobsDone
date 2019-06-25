'use strict'
const User = use('App/Models/User')

class SessionController {
  async store ({ request, auth }) {
    const { email, password } = request.all()
    const user = await User.findByOrFail('email', email)
    const data = await auth.attempt(email, password)
    data.user_id = user.id
    return data
  }
}

module.exports = SessionController
