const uuid   = require('uuid')
const ripple = require('ripple-lib')

var subscriptions = {}

export default class Subscription {

  constructor(uid, options) {
    if (subscriptions[uid]) {
      options = subscriptions[uid]
    } else {
      subscriptions[uid] = options
    }
    this.uid         = uid
    this.destination = options.destination
    this.amount      = options.amount
    this.period      = options.period
    this.secret      = options.secret
    this.source      = new ripple.Wallet(options.secret).getAddress().value
    this.start       = options.start
  }

  static find(uid) {
    if (subscriptions[uid]) { 
      return new this(uid)
    }
  }

  static create(options) {
    let uid = uuid.v4()

    options.start = new Date().getTime()

    return new this(uid, options)
  }

  toJSON() {
    return {
      uid: this.uid,
      destination: this.destination,
      amount: this.amount,
      period: this.period,
      source: this.source,
      start: this.start
    }
  }

  static destroy(uid) {
    delete subscriptions[uid]
  }
}

