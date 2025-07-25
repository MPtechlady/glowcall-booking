# 🌸 GlowCall Booking – Mini Fullstack Project

This is a mini full-stack project built for **THILEO Royal Co.** to enable users to book customized Glow Call cosmetic consultations online.

> 🔐 Note: Sensitive files like `.env` and UPI QR code are excluded for security reasons.

---

## 🔧 Tech Stack

- **Frontend**: React + Bootstrap + Vite
- **Backend**: Node.js + Express.js
- **Database**: MongoDB Atlas via Mongoose
- **Other**: Dotenv, CORS, Nodemon

---

## 🎯 Features

- 📩 **Booking Form** – Users can submit consultation requests
- ✅ **Validation** – Required fields, consent checkbox, etc.
- 💬 **WhatsApp Confirmation** – Notifies users of confirmation manually
- 🔐 **Backend API** – Secured route to store form data in MongoDB
- 🖼️ **UPI Payment Section** – (QR code hidden in public repo for safety)

---

## 🚀 How to Run Locally

> You'll need **Node.js** installed. Use two terminals: one for backend, one for frontend.

1. Clone the Repo
2. Add `.env` with MongoDB URI
3. Run backend: `npm run dev`
4. Run frontend: `npm run frontend`
5. Submit booking → See data saved!

