const express = require('express')

module.exports = function(server) {
  // URL base para rotas
  const router = express.Router()
  server.use('/api', router)

  // Rota BillingCycle
  const BillingCycle = require('../api/billingCycle/billingCycleService')
  BillingCycle.register(router, '/billingCycles')
}