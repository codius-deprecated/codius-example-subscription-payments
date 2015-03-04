const uuid = require('uuid')
const Subscription = require('../models/subscription')

module.exports = function() {

  return {
    create: function(req, res, error) {
      let subscription = Subscription.create(req.body)
  
      res.status(201).send({
        success: true,
        subscription: subscription.toJSON()
      })
    },
  
    show: function(req, res, error) {
      let subscription = Subscription.find(req.params.uid)
      
      if (subscription) {
        res.status(200).send({
          success: true,
          subscription: subscription.toJSON()
        })
      } else {
        res.status(404).send({
          success: false,
          error: 'subscription not found'
        })
      }
    },

    destroy: function(req, res, error) {

      if (Subscription.destroy(req.params.uid)) {
        res.status(200).send({
          success: true
        })
      } else {
        res.status(404).send({
          success: false
        })
      }
    }
  }
}
