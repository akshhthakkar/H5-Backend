# H5 ERP System

A full-stack Enterprise Resource Planning (ERP) system for inventory management, sales tracking, and business analytics.

![Tech Stack](https://img.shields.io/badge/React-18-blue) ![Node.js](https://img.shields.io/badge/Node.js-Express-green) ![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen)

---

## 🚀 Features

- **User Authentication** - JWT-based login/register with Google OAuth
- **Inventory Management** - Add/edit/delete products with images
- **Dynamic Categories** - System + custom user categories
- **Sales Processing** - Create sales with automatic inventory deduction
- **Bill Generation** - PDF bills emailed to customers
- **Profit Tracking** - Cost price vs selling price analytics
- **Reports & Analytics** - Monthly sales, top products, dead stock, profit summary
- **Notifications** - Low stock alerts, forecast warnings
- **Supply Chain** - Restock products containing smart suggestions based on sales forecast
- **System Robustness** - Atomic sales transactions, deduplicated notifications, and handling of edge cases (zero sales, dead stock accuracy)

---

## 📁 Project Structure

```
H5 ERP/
├── backend/                    # Express.js API Server
│   ├── api/allApi.js          # Route aggregator
│   ├── app.js                 # Main entry point
│   ├── config/                # Database & Cloudinary config
│   ├── controller/            # Business logic
│   │   ├── productController.js
│   │   ├── salesController.js
│   │   ├── categoryController.js
│   │   ├── reportController.js
│   │   └── ...
│   ├── models/                # Mongoose schemas
│   │   ├── product.js
│   │   ├── sales.js
│   │   ├── category.js
│   │   ├── user.js
│   │   └── ...
│   ├── routes/                # Express routes
│   ├── middlewares/           # Auth middleware
│   ├── utils/                 # Helpers (notifications, cloudinary, audit)
│   ├── jobs/cronJobs.js       # Scheduled tasks
│   ├── seeds/                 # Database seeders
│   ├── migrations/            # Data migration scripts
│   └── src/
│       ├── billGenerator.js   # PDF creation (PDFKit)
│       └── emailSender.js     # Nodemailer
│


## 🔄 Application Flow

### 1. Authentication Flow

```

User → SignIn/SignUp → JWT Token → Protected Routes
↓
Google OAuth (optional)

```

### 2. Inventory Flow

```

Add Product → Upload Image (Cloudinary)
→ Set Prices (Sell Price + Cost Price)
→ Assign Category
→ Save to MongoDB

```

### 3. Sales Flow

```

Select Products → Validate Stock
→ Deduct Inventory
→ Create Sale Record
→ Generate PDF Bill
→ Upload to Cloudinary
→ Email to Customer
→ Trigger Notifications (if low stock)

```

### 4. Profit Calculation

```

Profit = Total Revenue - Total Cost
= Σ(Sell Price × Quantity) - Σ(Cost Price × Quantity)

````

---

## 🛠️ Installation

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- Cloudinary account
- Gmail account (for emails)

### Backend Setup

```bash
cd backend
npm install

# Create .env file
cp .env.example .env
# Edit .env with your credentials
````

### Frontend Setup

```bash
cd frontend
npm install
```

### Environment Variables (.env)

```env
# MongoDB
MONGO_URI=mongodb://localhost:27017/h5erp
# OR for Atlas:
# MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/h5erp

# JWT
JWT_SECRET=your-super-secret-key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Email (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### Running Locally

```bash
# Terminal 1 - Backend
cd backend
npm run dev   # or: npx nodemon server.js

# Terminal 2 - Frontend
cd frontend
npm run dev
```

---

## 📡 API Endpoints

| Method            | Endpoint                           | Description            |
| ----------------- | ---------------------------------- | ---------------------- |
| **Auth**          |                                    |                        |
| POST              | `/api/user/register`               | Register new user      |
| POST              | `/api/user/login`                  | Login                  |
| GET               | `/api/user/google`                 | Google OAuth           |
| **Products**      |                                    |                        |
| GET               | `/api/products/getproducts`        | List all products      |
| POST              | `/api/products/create`             | Create product         |
| DELETE            | `/api/products/delete/:id`         | Delete product         |
| POST              | `/api/products/supply`             | Add stock              |
| **Categories**    |                                    |                        |
| GET               | `/api/categories`                  | List categories        |
| POST              | `/api/categories`                  | Create custom category |
| PUT               | `/api/categories/:id`              | Update category        |
| DELETE            | `/api/categories/:id`              | Delete category        |
| **Sales**         |                                    |                        |
| POST              | `/api/sales/create`                | Create sale            |
| GET               | `/api/sales/show`                  | List all sales         |
| GET               | `/api/sales/download/:id`          | Download bill          |
| **Reports**       |                                    |                        |
| GET               | `/api/report/monthly/:year/:month` | Monthly sales          |
| GET               | `/api/report/top-products`         | Top 5 products         |
| GET               | `/api/report/dead-stock`           | Dead stock report      |
| GET               | `/api/report/profit-summary`       | Profit summary         |
| **Notifications** |                                    |                        |
| GET               | `/api/notifications`               | List notifications     |
| PUT               | `/api/notifications/:id/read`      | Mark as read           |

---

## 🚀 Deployment Guide

### Backend Deployment (Render / Railway / Heroku)

1. **Build Command**: `npm install`
2. **Start Command**: `node app.js`
3. **Environment Variables**: Add all from `.env`

### Frontend Deployment (Vercel / Netlify)

1. **Build Command**: `npm run build`
2. **Output Directory**: `dist`
3. **Environment Variables**:
   ```
   VITE_API_URL=https://your-backend-url.com/api
   ```

### ⚠️ Pre-Deployment Checklist

| Item                  | Status | Notes                                            |
| --------------------- | ------ | ------------------------------------------------ |
| Environment Variables | ⚠️     | Replace all `localhost:3000` with production URL |
| API Base URL          | ⚠️     | Create `.env` for frontend with `VITE_API_URL`   |
| CORS Settings         | ⚠️     | Update `app.js` to allow production domain       |
| MongoDB               | ⚠️     | Use MongoDB Atlas for production                 |
| Cloudinary            | ✅     | Already cloud-based                              |
| Email                 | ✅     | Gmail works, consider SendGrid for production    |
| JWT Secret            | ⚠️     | Use strong, unique secret                        |
| HTTPS                 | ⚠️     | Required for production                          |

### Required Changes for Production

1. **Update API URLs** - Replace all `http://localhost:3000` in frontend:

   ```javascript
   // Create frontend/.env
   VITE_API_URL=https://your-api.railway.app

   // Update axios calls to use:
   axios.get(`${import.meta.env.VITE_API_URL}/products/getproducts`)
   ```

2. **Update CORS** - In `backend/app.js`:

   ```javascript
   app.use(
     cors({
       origin: ["https://your-frontend.vercel.app"],
       credentials: true,
     })
   );
   ```

3. **Use MongoDB Atlas** - Update `MONGO_URI` in production env

---

## 📊 Database Models

| Model            | Key Fields                                             |
| ---------------- | ------------------------------------------------------ |
| **User**         | email, password, businessName, stats                   |
| **Product**      | name, price, cp, inventory, categoryId, minThreshold   |
| **Category**     | name, type (SYSTEM/CUSTOM), owner                      |
| **Sales**        | customer, product, quantity, price, cp, amount, pdfUrl |
| **Notification** | type, message, isRead, productId                       |
| **AuditLog**     | action, entityType, before, after                      |
| **RestockLog**   | productId, quantity, supplier                          |

---

## 🔧 Scripts

```bash
# Run category seeder (auto-runs on startup)
node backend/seeds/categorySeeder.js

# Migrate existing products to new category system
node backend/migrations/migrateCategories.js

# Clean database (use with caution!)
node backend/scripts/cleanDB.js
```

---

## 📝 License

MIT License - Free for personal and commercial use.

---

## 👨‍💻 Developed By

**Inframax** - Powering Enterprise Solutions
