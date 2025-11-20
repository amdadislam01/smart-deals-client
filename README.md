# 🛍️ Smart Deals - E-commerce Platform


A modern **Buy & Sell Marketplace** where users can easily list, browse, and manage second-hand products.  
Built with **React**, **Tailwind CSS**, **Express**, **Firebase**, and **MongoDB**, this project offers a smooth, secure, and responsive experience — both for buyers and sellers.

---

## 🔗 Live Links

🌐 **Client:** [Smart Deals Client](https://smart-deals-client.vercel.app/)  
⚙️ **Server:** [Smart Deals Server](https://smart-deals-server-five.vercel.app/)

---

## 🔗 GitHub Links

🌐 **Client Code :** [Smart Deals Client](https://github.com/amdadislam01/smart-deals-client.git)  
⚙️ **Server Code :** [Smart Deals Server](https://github.com/amdadislam01/smart-deals-server)

---

## 📸 Preview

<img src="https://i.ibb.co.com/dsBsCrwR/screencapture-localhost-5173-2025-11-07-12-08-18.png"  alt="image" />
<br />

---

## 🚀 Features

- 🔐 **User Authentication** (Firebase Email & Google Sign-In)
- 🛒 **Add / Edit / Delete** Product Listings
- 🧭 **Category & Filter System** (price range, usage, condition)
- ⚙️ **RESTful API** with Express & MongoDB
- 💬 **Notifications** using Toastify & SweetAlert2
- 📱 **Fully Responsive** design with Tailwind CSS
- 🔥 **Secure Admin Operations** via Firebase Admin SDK
- ⚡ **Fast Performance** using Axios & modern React optimizations

---

## 🧠 Tech Stack

### 🖥️ Frontend

| Technology | Version | Description |
|-------------|----------|-------------|
| React | ^19.1.1 | Component-based frontend library |
| React Router | ^7.9.5 | Client-side routing |
| Tailwind CSS | ^4.1.16 | Utility-first CSS framework |
| Axios | ^1.13.2 | HTTP client for API calls |
| Firebase | ^12.5.0 | Authentication & hosting |
| React Toastify | ^11.0.5 | Toast notifications |
| SweetAlert2 | ^11.26.3 | Elegant alerts |
| SweetAlert2 React Content | ^5.1.0 | SweetAlert2 with React support |
| React Icons | ^5.5.0 | Icon library for UI |

### ⚙️ Backend

| Technology | Version | Description |
|-------------|----------|-------------|
| Express | ^5.1.0 | Node.js web framework |
| MongoDB | ^6.20.0 | NoSQL database |
| Firebase Admin | ^13.6.0 | Firebase server SDK |
| CORS | ^2.8.5 | Enable cross-origin requests |
| Dotenv | ^17.2.3 | Manage environment variables |

---

## 🧩 Project Structure

```
smart-deals/
│
├── client/               # Frontend (React + Tailwind)
│   ├── src/
│   ├── public/
│   └── package.json
│
└── server/               # Backend (Express + MongoDB)
    ├── index.js
    ├── .env
    └── package.json
```

---

## ⚡ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/amdadislam01/smart-deals-client.git
```

### 2️⃣ Setup Client
```bash
cd smart-deals-client/client
npm install
npm run dev
```

### 3️⃣ Setup Server
```bash
cd ../server
npm install
npm start
```

---

## 🔒 Environment Variables

Create `.env` files in both **client** and **server** folders.

### 🔹 Client `.env`
```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
```

### 🔹 Server `.env`
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
FIREBASE_SERVICE_ACCOUNT=your_firebase_admin_credentials
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/products` | Get all products |
| `POST` | `/products` | Add a new product |
| `PUT` | `/products/:id` | Update product info |
| `DELETE` | `/products/:id` | Delete a product |
| `GET` | `/users` | Get all users |
| `POST` | `/users` | Add new user |
| `DELETE` | `/users/:id` | Remove user |

---

## 🧪 Firebase Setup (Admin SDK)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project → Add Web App
3. Get config and paste it into your `.env`
4. Create a **serviceAccountKey.json** from Firebase Admin SDK
5. Add it inside your server folder or in `.env` as a JSON string

---

## 🧑‍💻 Author

**👤 MD. Amdad Islam**  
💼 Software Engineering Student | Web Developer  
📍 Dhaka, Bangladesh  
🌐 [Portfolio](https://amdadislam-01.netlify.app/)  

---

## 🏁 Future Improvements

- 📦 Implement product wishlist & cart system  
- 💳 Add Stripe or SSLCommerz payment gateway  
- 🧾 Create user dashboards for buyers/sellers  
- 🌍 Add language switch (EN / BN)  

---

### © 2025 MD. Amdad Islam 
