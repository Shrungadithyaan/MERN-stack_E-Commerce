# MERN Stack eCommerce Shoe Website

## Overview
This is a full-stack eCommerce website for selling shoes, built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides users with a seamless shopping experience, allowing them to browse products, add items to the cart, and complete purchases securely.

## Features
- User authentication (Sign up, Login, Logout)
- Admin dashboard for managing products and orders
- Product listing and detailed product pages
- Shopping cart functionality
- Secure payment integration Stripe
- Order tracking and history
- Responsive design for mobile and desktop
- Reviews and ratings system
- Wishlist functionality

## Tech Stack
- **Frontend:** React.js, Redux Toolkit, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Payment Gateway:** Stripe / PayPal
- **Deployment:** Vercel / Netlify (Frontend), Render / AWS / Heroku (Backend)

## Installation & Setup

### Prerequisites
Make sure you have the following installed:
- Node.js
- MongoDB (local or cloud, e.g., MongoDB Atlas)
- npm or yarn

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mern-ecommerce-shoe.git
   cd mern-ecommerce-shoe/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   STRIPE_SECRET_KEY=your_stripe_key
   ````
4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new users
- `POST /api/auth/login` - Login users
- `GET /api/auth/logout` - Logout users

### Products
- `GET /api/products` - Fetch all products
- `GET /api/products/:id` - Fetch a single product
- `POST /api/products` - Add a new product (Admin only)
- `PUT /api/products/:id` - Update a product (Admin only)
- `DELETE /api/products/:id` - Delete a product (Admin only)

### Orders
- `POST /api/orders` - Create a new order
- `GET /api/orders/:id` - Fetch order details
- `GET /api/orders/user/:userId` - Fetch user-specific orders

## Deployment
### Backend Deployment
1. Deploy the backend on Render / Heroku / AWS
2. Update `.env` file with production credentials

### Frontend Deployment
1. Build the React app:
   ```bash
   npm run build
   ```
2. Deploy the `build/` directory on Vercel / Netlify

