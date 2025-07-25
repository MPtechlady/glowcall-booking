// backend/routes/bookingRoutes.js – Express Route for Booking Form

import express from 'express';
import Booking from '../models/bookingModel.js';

const router = express.Router();

// @route   POST /api/bookings
// @desc    Create a new booking
// @access  Public
router.post('/', async (req, res) => {
console.log('📩 Received booking form:', req.body); // Add this log
try {
const { name, email, whatsapp, package: selectedPackage, datetime, concern, consent } = req.body;


if (!name || !email || !whatsapp || !selectedPackage || !datetime || !concern || !consent) {
  return res.status(400).json({ message: 'All fields are required.' });
}

const newBooking = new Booking({
  name,
  email,
  whatsapp,
  package: selectedPackage,
  datetime,
  concern,
  consent,
  paymentStatus: 'Pending'
});

await newBooking.save();

res.status(201).json({ message: 'Booking submitted successfully!' });


} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error. Please try again later.' });
}
});

export default router;
