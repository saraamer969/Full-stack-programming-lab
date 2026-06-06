const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');
const auth = require('../middleware/auth');

// GET all customers
router.get('/', auth, async (req, res) => {
  try {
    const { search, status } = req.query;
    let query = {};
    if (search) query.name = { $regex: search, $options: 'i' };
    if (status && status !== 'All') query.status = status;
    const customers = await Customer.find(query).sort({ createdAt: -1 });
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET single customer
router.get('/:id', auth, async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).json({ message: 'Customer not found' });
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST create customer
router.post('/', auth, async (req, res) => {
  try {
    const { name, email, phone, company, address, status, notes } = req.body;
    if (!name || !email || !phone || !company)
      return res.status(400).json({ message: 'Name, email, phone, company are required' });

    const customer = await Customer.create({ name, email, phone, company, address, status, notes });
    res.status(201).json(customer);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// PUT update customer
router.put('/:id', auth, async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!customer) return res.status(404).json({ message: 'Customer not found' });
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE customer
router.delete('/:id', auth, async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) return res.status(404).json({ message: 'Customer not found' });
    res.json({ message: 'Customer deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;