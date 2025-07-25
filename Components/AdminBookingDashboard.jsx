// AdminBookingDashboard.jsx – React Admin Table View

import React, { useEffect, useState } from 'react';
import { Table, Badge, Spinner } from 'react-bootstrap';

const AdminBookingDashboard = () => {
const [bookings, setBookings] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
const fetchBookings = async () => {
try {
const response = await fetch('/api/admin/bookings');
const data = await response.json();
setBookings(data);
} catch (err) {
console.error('Failed to load bookings:', err);
} finally {
setLoading(false);
}
};


fetchBookings();


}, []);

if (loading) return <Spinner animation="border" variant="primary" />;

return ( <div className="p-4"> <h3 className="mb-3">THILEO Glow Call – Admin Dashboard</h3> <Table striped bordered hover responsive className="rounded"> <thead> <tr> <th>#</th> <th>Name</th> <th>WhatsApp</th> <th>Package</th> <th>Concern</th> <th>Date & Time</th> <th>Status</th> </tr> </thead> <tbody>
{bookings.map((b, idx) => ( <tr key={b._id}> <td>{idx + 1}</td> <td>{b.name}</td> <td>{b.whatsapp}</td> <td>{b.package}</td> <td>{b.concern}</td> <td>{b.datetime}</td> <td>
<Badge bg={b.paymentStatus === 'Paid' ? 'success' : 'warning'}>
{b.paymentStatus} </Badge> </td> </tr>
))} </tbody> </Table> </div>
);
};

export default AdminBookingDashboard;
