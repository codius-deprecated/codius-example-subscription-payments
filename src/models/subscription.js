const uuid = require('uuid')

var subscriptions = {}

export default class Subscription {

  constructor(uid, destination, amount, period, secret) {
    this.uid         = uid
    this.destination = destination
    this.amount      = amount
    this.period      = period
    this.secret      = secret
  }

  static find(uid) {
    return new this(uid, subscriptions[uid])
  }

  static create(destination, amount, period, secret) {
    let uid = uuid.v4()
    subscriptions[uid] = options
    let subscription = new this(uid, destination, amount, period, secret)
    return subscription 
  }

  toJSON() {
    let json = {
      uid: this.uid
    }
    for (let key in this.data) {
      json[key] = this.data[key]
    }
    return json
  }
}

