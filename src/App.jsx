// booking/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlowCallBooking from '../Components/GlowCallBooking';
import AdminBookingDashboard from '../Components/AdminBookingDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GlowCallBooking />} />
        <Route path="/admin-dashboard" element={<AdminBookingDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
