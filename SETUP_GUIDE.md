# AmazingTycho - Complete Setup Guide

Welcome! This comprehensive guide will help you set up the AmazingTycho ecommerce platform with MongoDB and user authentication.

## 📋 Prerequisites

Make sure you have installed:
- **Node.js** v16 or higher ([Download](https://nodejs.org/))
- **npm** or **yarn** (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))
- **MongoDB Community** ([Download](https://www.mongodb.com/try/download/community))

## 🚀 Quick Start (10 minutes)

### Step 1: Clone the Repository
```bash
git clone https://github.com/debbiebere/AmazingTycho.git
cd AmazingTycho
```

### Step 2: Setup Backend

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start MongoDB (in another terminal)
# macOS with Homebrew:
brew services start mongodb-community

# Linux (Ubuntu/Debian):
sudo systemctl start mongod

# Windows: Run MongoDB manually or use MongoDB Compass

# Start backend server (back in server directory)
npm run dev
```

**Backend running on:** http://localhost:5000

### Step 3: Setup Frontend (in another terminal)

```bash
# Navigate to client directory
cd AmazingTycho/client

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

**Frontend running on:** http://localhost:5173

🎉 **You're all set!** Open http://localhost:5173 in your browser.

---

## 🔧 Detailed Configuration

### Backend Environment Variables

Edit `server/.env`:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb://localhost:27017/amazingtycho

# JWT Authentication
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:5173
```

### Frontend Environment Variables

Edit `client/.env.local`:

```env
VITE_API_URL=http://localhost:5000
```

---

## 📦 MongoDB Setup

### Option 1: Local MongoDB Installation

**macOS (with Homebrew):**
```bash
# Install MongoDB
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB service
brew services start mongodb-community

# Stop when needed
brew services stop mongodb-community
```

**Ubuntu/Linux:**
```bash
# Install MongoDB
sudo apt-get update
sudo apt-get install -y mongodb

# Start service
sudo systemctl start mongod

# Stop service
sudo systemctl stop mongod

# Check status
sudo systemctl status mongod
```

**Windows:**
- Download installer from [MongoDB Community](https://www.mongodb.com/try/download/community)
- Run the installer and follow instructions
- MongoDB will run as a service automatically

### Option 2: MongoDB Atlas (Cloud)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a cluster
4. Get connection string
5. Update `MONGODB_URI` in `.env`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/amazingtycho?retryWrites=true&w=majority
```

### Verify MongoDB Connection

```bash
# Test with MongoDB CLI
mongo

# Or with newer versions
mongosh

# List databases
show databases

# Use amazingtycho database
use amazingtycho

# Check collections
show collections
```

---

## 📚 Project Structure

```
AmazingTycho/
├── server/
│   ├── models/              # MongoDB models
│   │   ├── User.js         # User model with auth
│   │   ├── Product.js      # Product model
│   │   ├── Order.js        # Order model with history
│   │   └── Cart.js         # Shopping cart model
│   ├── routes/             # API endpoints
│   │   ├── auth.js         # Authentication (register/login)
│   │   ├── products.js     # Product CRUD
│   │   ├── cart.js         # Cart management
│   │   ├── orders.js       # Order history & checkout
│   │   └── users.js        # User profile
│   ├── middleware/         # Custom middleware
│   │   └── auth.js         # JWT verification
│   ├── .env.example
│   ├── server.js
│   └── package.json
├── client/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API service
│   │   ├── App.jsx
│   │   └── index.css
│   ├── .env.example
│   └── package.json
├── .gitignore
├── README.md
└── SETUP_GUIDE.md
```

---

## 🔌 API Endpoints Reference

### Authentication

**Register:**
```bash
POST /api/auth/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "message": "User registered successfully",
  "token": "jwt_token",
  "user": { ... }
}
```

**Login:**
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "message": "Login successful",
  "token": "jwt_token",
  "user": { ... }
}
```

**Get Current User:**
```bash
GET /api/auth/me
Authorization: Bearer jwt_token

Response: { user object }
```

### Products

**Get All Products:**
```bash
GET /api/products?page=1&limit=12&category=decorative&sort=price-low&search=pendant
```

**Get Single Product:**
```bash
GET /api/products/:productId
```

**Create Product (Admin):**
```bash
POST /api/products
Authorization: Bearer jwt_token
Content-Type: application/json

{
  "name": "3D Pendant",
  "description": "Beautiful 3D printed pendant",
  "price": 29.99,
  "stock": 50,
  "category": "decorative"
}
```

### Cart

**Get Cart:**
```bash
GET /api/cart
Authorization: Bearer jwt_token

Response:
{
  "cart": {
    "user": "userId",
    "items": [
      {
        "product": { ... },
        "quantity": 2,
        "price": 29.99
      }
    ]
  },
  "total": 59.98
}
```

**Add to Cart:**
```bash
POST /api/cart
Authorization: Bearer jwt_token

{
  "productId": "product_id",
  "quantity": 2
}
```

**Update Cart Item:**
```bash
PUT /api/cart/:itemId
Authorization: Bearer jwt_token

{ "quantity": 3 }
```

**Remove from Cart:**
```bash
DELETE /api/cart/:itemId
Authorization: Bearer jwt_token
```

### Orders

**Create Order:**
```bash
POST /api/orders
Authorization: Bearer jwt_token

{
  "shippingAddress": {
    "firstName": "John",
    "lastName": "Doe",
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA",
    "phone": "555-1234"
  }
}

Response:
{
  "message": "Order created successfully",
  "order": {
    "orderNumber": "ORD-1234567890-1",
    "items": [ ... ],
    "totalAmount": 89.97,
    "status": "pending",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

**Get Order History:**
```bash
GET /api/orders?page=1&limit=10&status=pending
Authorization: Bearer jwt_token

Response:
{
  "orders": [ ... ],
  "pagination": {
    "total": 5,
    "page": 1,
    "limit": 10,
    "pages": 1
  }
}
```

**Get Single Order:**
```bash
GET /api/orders/:orderId
Authorization: Bearer jwt_token
```

**Cancel Order:**
```bash
PUT /api/orders/:orderId/cancel
Authorization: Bearer jwt_token
```

### User Profile

**Get Profile:**
```bash
GET /api/users/profile
Authorization: Bearer jwt_token
```

**Update Profile:**
```bash
PUT /api/users/profile
Authorization: Bearer jwt_token

{
  "firstName": "John",
  "lastName": "Doe",
  "phone": "555-1234",
  "shippingAddress": { ... }
}
```

**Change Password:**
```bash
POST /api/users/change-password
Authorization: Bearer jwt_token

{
  "currentPassword": "oldpass123",
  "newPassword": "newpass123",
  "confirmPassword": "newpass123"
}
```

---

## 🐛 Troubleshooting

### MongoDB Connection Issues

**Problem:** "MongoError: connect ECONNREFUSED"
```bash
# Check if MongoDB is running
mongo --version

# Restart MongoDB
# macOS:
brew services restart mongodb-community

# Linux:
sudo systemctl restart mongod

# Windows: Use Services or MongoDB Compass
```

### Port Already in Use

```bash
# Kill process on port 5000 (backend)
lsof -ti:5000 | xargs kill -9

# Kill process on port 5173 (frontend)
lsof -ti:5173 | xargs kill -9
```

### Clear Cache & Reinstall

```bash
cd server
rm -rf node_modules package-lock.json
npm install

cd ../client
rm -rf node_modules package-lock.json
npm install
```

### CORS Errors

Ensure `CLIENT_URL` in `server/.env` matches your frontend URL:
```env
CLIENT_URL=http://localhost:5173
```

### JWT Token Issues

Make sure `JWT_SECRET` is set in `server/.env`:
```env
JWT_SECRET=your_secret_key_here
```

---

## 🚀 Development Commands

### Backend
```bash
npm run dev      # Start with auto-reload (nodemon)
npm start        # Start production server
npm test         # Run tests
```

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 📝 Sample Data for Testing

You can populate the database with sample products using MongoDB CLI:

```bash
# Connect to MongoDB
mongo

# Use the database
use amazingtycho

# Insert sample products
db.products.insertMany([
  {
    name: "3D Printed Vase",
    description: "Beautiful decorative vase",
    price: 29.99,
    stock: 50,
    category: "decorative",
    material: "PLA",
    colors: ["Blue", "Red", "White"]
  },
  {
    name: "Phone Stand",
    description: "Functional phone stand",
    price: 19.99,
    stock: 100,
    category: "functional",
    material: "PETG",
    colors: ["Black", "White"]
  }
])
```

---

## 🔐 Security Best Practices

1. **Environment Variables**: Never commit `.env` files
2. **JWT Secret**: Use a strong, random secret in production
3. **Password Hashing**: Passwords are hashed with bcrypt (already implemented)
4. **CORS**: Only allow requests from your frontend
5. **Validation**: Validate all user inputs on server

---

## 🎯 Next Steps

1. **Test User Registration & Login**: Create a test account
2. **Add Products**: Use admin endpoints to add sample products
3. **Test Shopping Flow**: Add items to cart and create orders
4. **View Order History**: Check user's order history
5. **Deploy**: See deployment section below

---

## 📦 Deployment

### Prepare for Production

1. **Update environment variables** in deployment platform
2. **Set `NODE_ENV=production`**
3. **Use strong JWT_SECRET** (generate with: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)
4. **Set MongoDB to production URI** (MongoDB Atlas recommended)

### Deploy to Heroku

```bash
# Install Heroku CLI
# Create Heroku app
heroku create amazing-tycho

# Set environment variables
heroku config:set JWT_SECRET="your_secret_key"
heroku config:set MONGODB_URI="your_mongodb_uri"

# Deploy
git push heroku main
```

### Deploy to Railway

```bash
# Connect to Railway
railway link

# Deploy
railway up
```

---

## 📞 Getting Help

- Check GitHub Issues
- Review error messages in console
- Check MongoDB logs: `brew log mongodb-community`
- Verify API endpoints with Postman/Insomnia

---

**🎉 You're ready to build! Happy coding!**

For more details, see [README.md](./README.md)
