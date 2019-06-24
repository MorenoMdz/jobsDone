'use strict'

const { subDays, startOfToday, isAfter } = require('date-fns')
const crypto = require('crypto')
const User = use('App/Models/User')
const Mail = use('Mail')

class ForgotPasswordController {
  async store ({ request, response }) {
    try {
      const email = request.input('email')
      const user = await User.findByOrFail('email', email)
      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()
      await user.save()
      await Mail.send(
        ['emails.forgot_password'],
        { email, token: user.token, link: `${request.input('redirect_url')}?token=${user.token}` },
        message => {
          message
            .to(user.email)
            .from('morenomdz@gmail.com')
            .subject('Password recovery')
        }
      )

      return response.send({ success: { message: "Job's done" } })
    } catch (error) {
      return response.status(error.status).send({ error: { message: 'Something went wrong!' } })
    }
  }

  async update ({ request, response }) {
    try {
      const { token, password } = request.all()
      const user = await User.findByOrFail('token', token)
      const tokenExpired = isAfter(subDays(Date.now(), 2), user.token_created_at)
      if (tokenExpired) return response.send({ error: { message: 'The reset token is expired' } })
      user.token = null
      user.token_created_at = null
      user.password = password
      await user.save()
      response.send({ success: { message: 'Password changed successfully' } })
    } catch (error) {
      return response.status(error.status).send({ error: { message: 'Something went wrong!' } })
    }
  }
}

module.exports = ForgotPasswordController
