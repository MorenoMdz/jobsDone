'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const moment = require('moment')
const Model = use('Model')

class Task extends Model {
  static formatDates (field, value) {
    const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ssZZ'
    return moment(value)
      .utc()
      .format(DATE_FORMAT)
  }
  user () {
    return this.belongsTo('App/Models/User')
  }

  type () {
    return this.belongsTo('App/Models/Type')
  }
}

module.exports = Task
