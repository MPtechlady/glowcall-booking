// backend/routes/adminRoutes.js – View All Bookings (Admin Dashboard)

import express from 'express';
import Booking from '../models/bookingModel.js';

const router = express.Router();

// @route   GET /api/admin/bookings
// @desc    Get all bookings (Admin view)
// @access  Public (can restrict later with auth)
router.get('/bookings', async (req, res) => {
try {
const bookings = await Booking.find().sort({ createdAt: -1 });
res.json(bookings);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Failed to fetch bookings' });
}
});

export default router;
