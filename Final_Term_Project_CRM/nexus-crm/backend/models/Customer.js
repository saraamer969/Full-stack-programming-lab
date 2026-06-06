const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String, required: true },
  address: { type: String },
  status: { type: String, enum: ['Lead', 'Active', 'Inactive'], default: 'Lead' },
  notes: { type: String },
  totalSpent: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Customer', CustomerSchema);