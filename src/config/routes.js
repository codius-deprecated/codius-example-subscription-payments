
module.exports = function(router, controllers) {

  router.post('/subscriptions', controllers.subscriptions.create)
  router.get('/subscriptions/:id', controllers.subscriptions.destroy)
  router.delete('/subscriptions/:id', controllers.subscriptions.destroy)
  router.post('/subscriptions/:id/payments', controllers.payments.create)
  router.get('/subscriptions/:subscription_id/payments/:payment_id', controllers.payments.create)
}

