const express = require('express');
const router = express.Router();
const Invoice = require('../models/Invoice');
const auth = require('../middleware/auth');

// GET all invoices
router.get('/', auth, async (req, res) => {
  try {
    const invoices = await Invoice.find().populate('customer', 'name email').sort({ createdAt: -1 });
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST create invoice
router.post('/', auth, async (req, res) => {
  try {
    const { customer, customerName, services, totalAmount, status } = req.body;
    const invoiceNumber = 'INV-' + Date.now();
    const invoice = await Invoice.create({ invoiceNumber, customer, customerName, services, totalAmount, status });
    res.status(201).json(invoice);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;