# Inframax ERP Backend

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express-4.18-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb)
![JWT](https://img.shields.io/badge/JWT-Auth-000000?logo=jsonwebtokens)
![Cloudinary](https://img.shields.io/badge/Cloudinary-CDN-3448C5?logo=cloudinary)
![License](https://img.shields.io/badge/License-Proprietary-red)

### 🚀 [Live Demo](https://h5-erp.vercel.app/)

</div>

A powerful, scalable backend API for enterprise resource planning, handling inventory management, sales transactions, billing, analytics, and supply chain operations.

**Currently deployed at:** [https://h5-erp.vercel.app/](https://h5-erp.vercel.app/)
---

## ✨ Features

### 🔐 Authentication & Authorization

- JWT-based authentication with token refresh
- Google OAuth 2.0 integration
- Password reset via email with secure tokens
- Role-based access control (Admin/User)

### 📦 Inventory Management

- Complete CRUD operations for products
- Image upload and management via Cloudinary CDN
- Dynamic categorization (system + custom categories)
- Real-time stock level tracking
- Minimum stock threshold alerts
- SKU and barcode support
- Audit logging for all inventory changes

### 💰 Sales Management

- Atomic sales transactions (MongoDB sessions)
- Automatic inventory deduction on sale
- Professional PDF bill generation (PDFKit)
- Email delivery of invoices to customers
- Comprehensive sales history
- Multi-product sales support
- Customer information tracking

### 📊 Analytics & Reporting

- Monthly sales reports with trends
- Top-performing products analysis
- Dead stock identification
- Profit margin analysis (cost vs selling price)
- Sales forecasting based on historical data
- Revenue and cost tracking
- Date-range filtering for custom reports

### 🔔 Smart Notifications

- Low stock alerts (configurable thresholds)
- Forecast-based restock warnings
- Deduplicated notification system
- Priority-based categorization
- Read/unread status tracking
- Auto-expiry for stale notifications

### 🚚 Supply Chain Management

- Restock functionality with supplier tracking
- Smart restock suggestions based on sales forecast
- Restock history and audit trail
- Quantity tracking across restocks
- Cost analysis per restock

---

## 🛠 Tech Stack

### Core

- **Node.js** v18+ - JavaScript runtime environment
- **Express.js** v4.18 - Fast, minimalist web framework
- **MongoDB** - NoSQL database for scalable data storage
- **Mongoose** - Elegant MongoDB object modeling

### Authentication & Security

- **JWT** - Secure token-based authentication
- **Passport.js** - Google OAuth 2.0 integration
- **bcryptjs** - Password hashing and encryption
- **CORS** - Cross-origin resource sharing
- **express-rate-limit** - API rate limiting
- **helmet** - Security headers middleware

### File & Media

- **Cloudinary** - Cloud-based image storage and CDN
- **Multer** - Multipart/form-data file upload handling
- **PDFKit** - Professional PDF invoice generation

### Email & Communication

- **Nodemailer** - Email delivery service
- **SMTP** - Automated invoice and password reset emails

### Utilities

- **node-cron** - Scheduled jobs for stock monitoring and cleanup
- **Morgan** - HTTP request logging
- **dotenv** - Environment variable management
- **validator** - Data validation and sanitization

### Development Tools

- **nodemon** - Auto-restart on file changes
- **ESLint** - Code quality and style enforcement

---

## � Installation

```bash
# Clone the repository
git clone https://github.com/akshhthakkar/H5-Backend.git
cd H5-Backend/backend

# Install dependencies
npm install

# Set up environment variables
# Create a .env file with required credentials (see below)

# Start development server
npm run dev
```

## 🚀 Available Scripts

- `npm run dev` - Start development server with nodemon on http://localhost:3000
- `npm start` - Start production server
- `npm run migrate` - Run database migrations
- `npm run seed` - Seed database with initial data
- `npm run lint` - Run ESLint for code quality

---

## 🔐 Environment Variables

Create a `.env` file in the backend directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/h5-erp

# Authentication
JWT_SECRET=your-secret-key-min-32-characters
JWT_EXPIRES_IN=7d
REFRESH_TOKEN_SECRET=your-refresh-token-secret

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:3000/api/user/google/callback

# Cloudinary CDN
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Email Service
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@inframax.com

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

---

## 📡 API Endpoints

### Authentication

- `POST /api/user/register` - Register new user
- `POST /api/user/login` - Login with email/password
- `GET /api/user/google` - Initiate Google OAuth flow
- `GET /api/user/google/callback` - Google OAuth callback
- `POST /api/user/refresh-token` - Refresh JWT token
- `POST /api/user/logout` - Logout user
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

### Password Management

- `POST /api/forget-password` - Request password reset email
- `POST /api/reset-password/:token` - Reset password with token
- `PUT /api/user/change-password` - Change password (authenticated)

### Products

- `GET /api/products` - List all products (supports pagination, filtering)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)
- `GET /api/products/low-stock` - Get low stock products
- `GET /api/products/search?q=query` - Search products

### Categories

- `GET /api/categories` - List all categories
- `GET /api/categories/:id` - Get single category
- `POST /api/categories` - Create category (admin only)
- `PUT /api/categories/:id` - Update category (admin only)
- `DELETE /api/categories/:id` - Delete category (admin only)

### Sales

- `GET /api/sales` - List all sales (supports date filtering)
- `GET /api/sales/:id` - Get single sale
- `POST /api/sales` - Create new sale (generates invoice)
- `GET /api/sales/customer/:email` - Get customer purchase history
- `DELETE /api/sales/:id` - Delete sale (admin only)

### Reports & Analytics

- `GET /api/report/monthly-sales` - Monthly sales report
- `GET /api/report/top-products` - Top performing products
- `GET /api/report/profit-summary` - Profit and revenue analysis
- `GET /api/report/dead-stock` - Identify slow-moving inventory
- `GET /api/report/sales-forecast` - Sales predictions based on trends
- `GET /api/report/category-performance` - Sales by category

### Notifications

- `GET /api/notifications` - List all notifications
- `GET /api/notifications/unread` - Get unread notifications count
- `PUT /api/notifications/:id/read` - Mark notification as read
- `PUT /api/notifications/read-all` - Mark all as read
- `DELETE /api/notifications/:id` - Delete single notification
- `DELETE /api/notifications/clear-all` - Clear all notifications

### Restock & Supply Chain

- `POST /api/restock` - Add stock to product
- `GET /api/restock/suggestions` - AI-powered restock suggestions
- `GET /api/restock/history` - Complete restock history
- `GET /api/restock/history/:productId` - Restock history for product

### File Upload

- `POST /api/upload/image` - Upload product image to Cloudinary
- `DELETE /api/upload/image/:publicId` - Delete image from Cloudinary

---

## 📁 Project Structure

```
backend/
├── api/
│   └── allApi.js                  # Central route aggregator
├── app.js                         # Application entry point
├── config/
│   ├── cloudinaryConfig.js        # Cloudinary CDN configuration
│   ├── config.js                  # App-wide configuration
│   └── passport.js                # OAuth 2.0 strategies
├── controller/
│   ├── categoryController.js      # Category CRUD operations
│   ├── productController.js       # Product management logic
│   ├── salesController.js         # Sales transaction handling
│   ├── reportController.js        # Analytics & reporting
│   ├── userController.js          # User management
│   ├── notificationController.js  # Notification handling
│   ├── uploadController.js        # File upload processing
│   ├── forgetPassController.js    # Password reset request
│   └── resetPassController.js     # Password reset confirmation
├── db/
│   └── connection.js              # MongoDB connection setup
├── jobs/
│   └── cronJobs.js                # Scheduled background tasks
├── middlewares/
│   ├── authMiddleware.js          # JWT authentication guard
│   └── errormiddleware.js         # Global error handler
├── migrations/
│   └── migrateCategories.js       # Database migration scripts
├── models/
│   ├── User.js                    # User schema & methods
│   ├── Product.js                 # Product schema
│   ├── Sales.js                   # Sales transaction schema
│   ├── Category.js                # Category schema
│   ├── Notification.js            # Notification schema
│   ├── AuditLog.js                # Audit trail schema
│   ├── RestockLog.js              # Restock history schema
│   ├── ProductImage.js            # Product image metadata
│   └── TokenModel.js              # Refresh token schema
├── pdfs/                          # Generated PDF invoices
├── responses/
│   ├── errorResponse.js           # Standardized error responses
│   └── successResponse.js         # Standardized success responses
├── routes/
│   ├── userRoutes.js              # Authentication endpoints
│   ├── productRoutes.js           # Product endpoints
│   ├── salesRoutes.js             # Sales endpoints
│   ├── reportRoutes.js            # Analytics endpoints
│   ├── categoryRoutes.js          # Category endpoints
│   ├── notificationRoutes.js      # Notification endpoints
│   ├── restockRoutes.js           # Restock endpoints
│   ├── uploadRoutes.js            # File upload endpoints
│   ├── forgetPassRoutes.js        # Password reset request
│   └── resetPassRoutes.js         # Password reset confirmation
├── scripts/
│   └── cleanDB.js                 # Database cleanup utilities
├── seeds/
│   └── categorySeeder.js          # Initial category data
├── src/
│   ├── billGenerator.js           # PDF invoice generation
│   └── emailSender.js             # Email service wrapper
├── utils/
│   ├── auditLogger.js             # Audit trail logging
│   ├── cloudinaryUpload.js        # Cloudinary upload helper
│   ├── emailUtils.js              # Email templates & utilities
│   ├── jwtUtils.js                # JWT token generation/validation
│   └── notificationService.js     # Notification creation helper
├── package.json                   # Dependencies and scripts
└── .env                           # Environment variables
```

### Key Architecture Patterns

- **MVC Pattern** - Clean separation of concerns (Models, Controllers, Routes)
- **Service Layer** - Reusable business logic in utils and src
- **Middleware Chain** - Request processing pipeline (auth, validation, error handling)
- **Repository Pattern** - Database abstraction with Mongoose models
- **Dependency Injection** - Configuration management via config files

---

## 🎯 Key Highlights

- ⚡ **High Performance** - Optimized MongoDB queries with indexing and aggregation
- 🔒 **Enterprise Security** - JWT authentication, bcrypt hashing, CORS, rate limiting
- 📊 **Data Integrity** - Atomic transactions with MongoDB sessions
- 🎯 **Smart Analytics** - AI-powered sales forecasting and inventory optimization
- 📧 **Automated Communication** - Email invoices and password reset flows
- ☁️ **Cloud Native** - Cloudinary CDN for scalable media storage
- 🔔 **Real-time Notifications** - Smart alerts for low stock and business events
- 📝 **Audit Trail** - Complete logging of critical operations with user tracking
- ⏰ **Background Jobs** - Cron tasks for stock monitoring and cleanup
- 🛡️ **Error Handling** - Centralized middleware with standardized responses
- 🚀 **Scalable Architecture** - Stateless design, microservice-ready
- 📱 **RESTful API** - Clean, consistent endpoint structure

---

## 🌐 Deployment

Configured for Heroku, Railway, Render, and Docker deployment.

### Production Checklist

- ✅ Set `NODE_ENV=production`
- ✅ Use MongoDB Atlas for production database
- ✅ Configure CORS for production frontend domain
- ✅ Enable HTTPS/SSL certificates
- ✅ Set strong JWT secret (32+ characters)
- ✅ Configure production email service (SendGrid, Mailgun, etc.)
- ✅ Add rate limiting and helmet.js security headers
- ✅ Set up PM2 for process management
- ✅ Enable MongoDB Atlas backups
- ✅ Configure logging (Winston/Morgan to file or cloud service)
- ✅ Set up monitoring (New Relic, Datadog, etc.)
- ✅ Configure Cloudinary production environment

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
```

```bash
docker build -t inframax-erp-backend .
docker run -p 3000:3000 --env-file .env inframax-erp-backend
```

### Heroku Deployment

```bash
# Login to Heroku
heroku login

# Create new app
heroku create inframax-erp-api

# Add MongoDB Atlas add-on (or use existing Atlas cluster)
heroku addons:create mongolab:sandbox

# Set environment variables
heroku config:set JWT_SECRET=your-secret
heroku config:set CLOUDINARY_CLOUD_NAME=your-cloud
# ... set other variables

# Deploy
git push heroku main
```

### Other Platforms

Compatible with Railway, Render, AWS EC2, DigitalOcean, and other Node.js hosting services.

**Build Configuration:**

- Start Command: `node app.js` or `npm start`
- Node Version: 18.x or higher
- Build Command: `npm install` (if needed)

---

## 👥 Contributors

- **Aksh Thakkar** - [@akshhthakkar](https://github.com/akshhthakkar)
- **Krish Chaudhari** - [@Krish231005](https://github.com/Krish231005)
- **Vedant Bhatt** - [@code-vedant1410](https://github.com/code-vedant1410)

---

**Built with ❤️ by Inframax Team**
