
module.exports = function(router, controllers) {

  router.post('/api/subscriptions', controllers.subscriptions.create)
  router.get('/api/subscriptions/:uid', controllers.subscriptions.show)
  router.delete('/api/subscriptions/:uid', controllers.subscriptions.destroy)
  router.post('/api/subscriptions/:uid/payments', controllers.payments.create)
  router.get('/api/subscriptions/:uid/payments/:id', controllers.payments.create)

  router.get('/subscriptions/new', function(req, res) {
    res.render('subscriptions/new')
  })
  router.get('/subscriptions/:id', function(req, res) {
    res.render('subscriptions/show')
  })
}

