# H5 ERP Backend

Enterprise Resource Planning system backend for inventory management, sales tracking, and business analytics.

![Node.js](https://img.shields.io/badge/Node.js-18+-green) ![Express](https://img.shields.io/badge/Express-4.18-blue) ![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen)

---

## 🏢 About

**Company:** Inframax

**Contributors:**

- [Aksh Thakkar](https://github.com/akshhthakkar)
- [Krish Chaudhari](https://github.com/Krish231005)
- [Vedant Bhatt](https://github.com/code-vedant1410)

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

- **Runtime:** Node.js v18+
- **Framework:** Express.js v4.18
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT, Passport.js (Google OAuth 2.0), bcryptjs
- **File Storage:** Cloudinary CDN
- **Email Service:** Nodemailer
- **PDF Generation:** PDFKit
- **Scheduled Jobs:** node-cron
- **HTTP Logging:** Morgan
- **Security:** CORS, helmet (recommended), express-rate-limit (recommended)

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/akshhthakkar/H5-Backend.git
cd H5-Backend/backend

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your credentials

# Run development server
npm run dev

# Production
npm start
```

Server runs on `http://localhost:3000`

---

## 🔐 Environment Variables

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/h5-erp
JWT_SECRET=your-secret-key

CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

---

## 📡 API Endpoints

### Authentication

- `POST /api/user/register` - Register user
- `POST /api/user/login` - Login
- `POST /api/user/google` - Google OAuth

### Products

- `GET /api/products` - List products
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Sales

- `GET /api/sales` - List sales
- `POST /api/sales` - Create sale

### Reports

- `GET /api/report/monthly-sales` - Monthly sales
- `GET /api/report/top-products` - Top products
- `GET /api/report/profit-summary` - Profit analysis

### Categories

- `GET /api/categories` - List categories
- `POST /api/categories` - Create category
- `PUT /api/categories/:id` - Update category
- `DELETE /api/categories/:id` - Delete category

### Notifications

- `GET /api/notifications` - List notifications
- `GET /api/notifications/unread` - Unread notifications
- `PUT /api/notifications/:id/read` - Mark as read
- `DELETE /api/notifications/:id` - Delete notification

### Restock

- `POST /api/restock` - Restock product
- `GET /api/restock/suggestions` - Smart suggestions
- `GET /api/restock/history` - Restock history

---

## 📁 Project Structure

````
backend/
├── api/
│   └── allApi.js              # Central route aggregator
├── app.js                     # Application entry point
├── config/
│   ├── cloudinaryConfig.js    # Cloudinary configuration
│   ├── config.js              # App configuration
│   └── passport.js            # OAuth strategies
├── controller/
│   ├── categoryController.js  # Category management
│   ├── productController.js   # Product CRUD
│   ├── salesController.js     # Sales transactions
│   ├── reportController.js    # Analytics & reports
│  🎯 Key Highlights

- **Atomic Transactions** - MongoDB sessions ensure data consistency in sales
- **Audit Trail** - Complete logging of critical operations with user tracking
- **Automated Jobs** - Cron tasks for stock monitoring, cleanup, and reports
- **Email Integration** - Automated bill delivery and password reset emails
- **Cloud Storage** - Cloudinary CDN for optimized image delivery
- **Error Handling** - Centralized error middleware with standardized responses
- **Security** - Password hashing (bcrypt), JWT tokens, CORS protection
- **Scalable** - Stateless authentication, microservice-ready architecture

---

## 🚀 Deployment

### Supported Platforms
- Heroku
- Railway
- Render
- AWS EC2
- DigitalOcean
- Docker/Kubernetes

### Production Checklist
- ✅ Set `NODE_ENV=production`
- ✅ Use MongoDB Atlas (production database)
- ✅ Configure CORS for production domain
- ✅ Enable HTTPS/SSL certificates
- ✅ Set strong JWT secret (32+ characters)
- ✅ Configure production email service
- ✅ Add rate limiting and helmet.js
- ✅ Set up PM2 for process management
- ✅ Enable database backups
- ✅ Configure logging (Winston/Morgan)

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
````

```bash
docker build -t h5-erp-backend .
docker run -p 3000:3000 --env-file .env h5-erp-backend
```

│ ├── User.js # User schema
│ ├── Product.js # Product schema
│ ├── Sales.js # Sales schema
│ ├── Category.js # Category schema
│ ├── Notification.js # Notification schema
│ ├── AuditLog.js # Audit trail
│ └── RestockLog.js # Restock history
├── routes/
│ ├── userRoutes.js # Auth endpoints
│ ├── productRoutes.js # Product endpoints
│ ├── salesRoutes.js # Sales endpoints
│ ├── reportRoutes.js # Analytics endpoints
│ └── categoryRoutes.js # Category endpoints
├── src/
│ ├── billGenerator.js # PDF generation
│ └── emailSender.js # Email service
└── utils/
├── auditLogger.js # Audit logging
├── cloudinaryUpload.js # Image upload
├── jwtUtils.js # JWT helpers
└── notificationService.js # Notification helpers

```

### Key Architecture Patterns
- **MVC Pattern** - Clean separation of concerns
- **Service Layer** - Reusable business logic
- **Middleware Chain** - Request processing pipeline
- **Repository Pattern** - Database abstraction with Mongoose

---

## 🚀 Deployment

Supports Heroku, Railway, AWS, DigitalOcean, Docker

**Production checklist:**
- Set `NODE_ENV=production`
- Use MongoDB Atlas
- Configure CORS for production domain
- Enable HTTPS
- Set strong JWT secret

---

**Built with ❤️ by Inframax Team**
```
