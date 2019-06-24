'use strict'

const Model = use('Model')

class Type extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  // TODO relation to task
  tasks () {
    return this.hasMany('App/Models/Task')
  }
}

module.exports = Type
