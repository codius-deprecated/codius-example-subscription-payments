
const uuid = require('uuid')
var payments = {}

module.exports = function(Subscription) {

  class Payment {

    constructor(uid, data) {
      this.uid = uid
      this.data = data
    }

    static find() {
      if (payments[uid]) {
        return new this(payments[uid])
      }
    }

    static create(options) {
      let uid = uuid.v4() 
      payments[uid] = options
      return new this(uid, options)
    }
  }

  return Payment
}

