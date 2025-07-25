// GlowCallBooking.jsx – Frontend Form Component (React + Bootstrap)

import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import QRCodeImage from '../assets/qr-code.jpg'; // Update path if needed

const GlowCallBooking = () => {
  const defaultValues = {
    name: '',
    email: '',
    whatsapp: '',
    package: 'Basic',
    datetime: '',
    concern: '',
    consent: false,
  };

  const [formData, setFormData] = useState({ ...defaultValues });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      setError('Please accept the consent checkbox.');
      return;
    }

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setSubmitted(true);
      setFormData({ ...defaultValues });
      setError('');
    } catch (err) {
      setError('Submission failed. Please try again.');
    }
  };

  if (submitted) {
    return (
      <Alert variant="success">
        Thank you! Your form has been submitted. We’ll confirm your slot via WhatsApp.
      </Alert>
    );
  }

  return (
    <Card className="p-4 shadow rounded-4">
      <h2 className="mb-3">THILEO Glow Call – Booking Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>WhatsApp Number</Form.Label>
          <Form.Control
            type="text"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Choose Package</Form.Label>
          <Form.Select
            name="package"
            value={formData.package}
            onChange={handleChange}
          >
            <option value="Basic">₹299 – 20 mins (Basic)</option>
            <option value="PDF">₹799 – 30 mins (with PDF)</option>
            <option value="Personalized">₹1500 – 45 mins (Full Routine)</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Preferred Date & Time</Form.Label>
          <Form.Control
            type="text"
            name="datetime"
            value={formData.datetime}
            onChange={handleChange}
            placeholder="e.g., July 30, 11AM"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Skin or Hair Concern</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="concern"
            value={formData.concern}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            name="consent"
            label="I understand this is not a medical consultation. I’m seeking cosmetic guidance only."
            checked={formData.consent}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="mb-3">
          <strong>Payment:</strong>
          <p>UPI ID: <code>7338936197@ptsbi</code></p>
          <img
            src="/qr-code.jpg"
            alt="UPI QR Code"
            className="img-fluid rounded"
            width="200"
          />
          <p>Once paid, your slot will be confirmed via WhatsApp.</p>
        </div>

        {error && <Alert variant="danger">{error}</Alert>}
        <Button type="submit">Submit Booking</Button>
      </Form>
    </Card>
  );
};

export default GlowCallBooking;


// // GlowCallBooking.jsx – Frontend Form Component (React + Bootstrap)

// import React, { useState } from 'react';
// import { Form, Button, Card, Alert } from 'react-bootstrap';
// import QRCodeImage from '../assets/qr-code.jpg'; // Replace with actual path

// const GlowCallBooking = () => {
//     const defaultValues = {
//     name: '',
//     email: '',
//     whatsapp: '',
//     package: 'Basic',
//     datetime: '',
//     concern: '',
//     consent: false,
//   };

// const [formData, setFormData] = useState({ ...defaultValues });
// const [submitted, setSubmitted] = useState(false);
// const [error, setError] = useState('');

// const handleChange = (e) => {
// const { name, value, type, checked } = e.target;
// setFormData({
// ...formData,
// [name]: type === 'checkbox' ? checked : value,
// });
// };

// const handleSubmit = async (e) => {
// e.preventDefault();
// if (!formData.consent) {
// setError('Please accept the consent checkbox.');
// return;
// }


// try {
//   const response = await fetch('/api/bookings', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(formData),
//   });

//   if (!response.ok) throw new Error('Failed to submit');

//   setSubmitted(true);
//   setFormData({ ...defaultValues });
//   setError('');
// } catch (err) {
//   setError('Submission failed. Please try again.');
// }


// };

// if (submitted) {
// return ( <Alert variant="success">
// Thank you! Your form has been submitted. We’ll confirm your slot via WhatsApp. </Alert>
// );
// }

// return ( <Card className="p-4 shadow rounded-4"> <h2 className="mb-3">THILEO Glow Call – Booking Form</h2> <Form onSubmit={handleSubmit}>
// <Form.Group className="mb-3">
// <Form.Label>Full Name</Form.Label>
// <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
// </Form.Group>


//     <Form.Group className="mb-3">
//       <Form.Label>Email</Form.Label>
//       <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
//     </Form.Group>

//     <Form.Group className="mb-3">
//       <Form.Label>WhatsApp Number</Form.Label>
//       <Form.Control type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required />
//     </Form.Group>

//     <Form.Group className="mb-3">
//       <Form.Label>Choose Package</Form.Label>
//       <Form.Select name="package" value={formData.package} onChange={handleChange}>
//         <option value="Basic">₹299 – 20 mins (Basic)</option>
//         <option value="PDF">₹799 – 30 mins (with PDF)</option>
//         <option value="Personalized">₹1500 – 45 mins (Full Routine)</option>
//       </Form.Select>
//     </Form.Group>

//     <Form.Group className="mb-3">
//       <Form.Label>Preferred Date & Time</Form.Label>
//       <Form.Control type="text" name="datetime" value={formData.datetime} onChange={handleChange} placeholder="e.g., July 30, 11AM" required />
//     </Form.Group>

//     <Form.Group className="mb-3">
//       <Form.Label>Skin or Hair Concern</Form.Label>
//       <Form.Control as="textarea" rows={3} name="concern" value={formData.concern} onChange={handleChange} required />
//     </Form.Group>

//     <Form.Group className="mb-3">
//       <Form.Check type="checkbox" name="consent" label="I understand this is not a medical consultation. I’m seeking cosmetic guidance only." checked={formData.consent} onChange={handleChange} />
//     </Form.Group>

//     <div className="mb-3">
//       <strong>Payment:</strong>
//       <p>UPI ID: <code>7338936197@ptsbi</code></p>
//       <img src={QRCodeImage} alt="UPI QR Code" className="img-fluid rounded" width="200" />
//       <p>Once paid, your slot will be confirmed via WhatsApp.</p>
//     </div>

//     {error && <Alert variant="danger">{error}</Alert>}
//     <Button type="submit">Submit Booking</Button>
//   </Form>
// </Card>


// );
// };

// export default GlowCallBooking;
