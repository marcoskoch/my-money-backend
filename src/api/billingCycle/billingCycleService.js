const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updadeOptions({new: true, runValidators: true})

module.exports = BillingCycle