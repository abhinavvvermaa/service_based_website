const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  serviceType: String,
  description: String,
  status: { type: String, default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);
