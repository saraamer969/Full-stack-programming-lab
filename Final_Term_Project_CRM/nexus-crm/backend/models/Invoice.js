const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
  invoiceNumber: { type: String, required: true, unique: true },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  customerName: { type: String, required: true },
  services: [{ description: String, amount: Number }],
  totalAmount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['Paid', 'Pending', 'Overdue'], default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Invoice', InvoiceSchema);