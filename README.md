# AmazingTycho - 3D Printed Creations Ecommerce

Welcome to the AmazingTycho ecommerce platform! This is a full-stack web application for selling unique 3D-printed creations.

## 🚀 Features

- **Product Catalog**: Browse and search 3D-printed items
- **Shopping Cart**: Add items and manage your cart
- **User Accounts**: Register and manage your profile
- **Order History**: View complete order history and status tracking
- **Secure Checkout**: Process orders with complete payment flow
- **Admin Dashboard**: Manage products and inventory (coming soon)

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Tailwind CSS
- React Router
- Axios for API calls

**Backend:**
- Node.js & Express
- MongoDB with Mongoose
- JWT Authentication
- bcrypt for password security

## 📁 Project Structure

```
AmazingTycho/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── App.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express backend
│   ├── routes/             # API routes
│   ├── models/             # MongoDB models
│   ├── middleware/         # Custom middleware
│   ├── server.js
│   └── package.json
├── .gitignore
├── SETUP_GUIDE.md         # Detailed setup instructions
└── README.md
```

## 🚀 Getting Started

### Quick Start (5 minutes)

1. **Clone and setup backend:**
   ```bash
   git clone https://github.com/debbiebere/AmazingTycho.git
   cd AmazingTycho/server
   npm install
   cp .env.example .env
   npm run dev
   ```

2. **In another terminal, setup frontend:**
   ```bash
   cd AmazingTycho/client
   npm install
   npm run dev
   ```

3. **Open your browser:**
   - Frontend: http://localhost:5173
   - API: http://localhost:5000/api

For detailed setup instructions, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)

## 🔑 Environment Variables

### Server (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/amazingtycho
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### Client (.env.local)
```
VITE_API_URL=http://localhost:5000
```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Cart
- `POST /api/cart` - Add to cart
- `GET /api/cart` - Get cart items
- `PUT /api/cart/:id` - Update cart item quantity
- `DELETE /api/cart/:id` - Remove from cart

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user's order history
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id/cancel` - Cancel order

### User Profile
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `POST /api/users/change-password` - Change password

## 🔐 Security Features

- JWT-based authentication with refresh tokens
- Password hashing with bcrypt
- Secure session management
- Protected API routes
- CORS configuration

## 📦 Deployment

Ready to deploy to:
- Heroku
- Railway
- AWS
- DigitalOcean

See deployment docs in SETUP_GUIDE.md

## 🤝 Contributing

Feel free to fork and submit pull requests!

## 📝 License

MIT License - feel free to use this for your project!

---

**Happy selling! 🎉**
