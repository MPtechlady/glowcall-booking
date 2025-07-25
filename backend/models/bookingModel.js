// backend/models/bookingModel.js – Mongoose Schema for Booking

import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
{
name: { type: String, required: true },
email: { type: String, required: true },
whatsapp: { type: String, required: true },
package: {
type: String,
enum: ['Basic', 'PDF', 'Personalized'],
required: true,
},
datetime: { type: String, required: true },
concern: { type: String, required: true },
consent: { type: Boolean, required: true },
paymentStatus: {
type: String,
enum: ['Pending', 'Paid'],
default: 'Pending',
},
},
{
timestamps: true,
}
);

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
