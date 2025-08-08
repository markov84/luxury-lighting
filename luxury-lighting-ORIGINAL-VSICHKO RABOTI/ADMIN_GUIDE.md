# Luxury Lighting - Admin & User Guide

## 🔐 LOGIN CREDENTIALS

### Administrator Account
- **Username**: `admin`
- **Password**: `admin123`
- **Email**: admin@luxury-lighting.bg
- **Permissions**: Full admin access to manage products, users, and orders

### Test User Account  
- **Username**: `testuser`
- **Password**: `test123`
- **Email**: test@luxury-lighting.bg
- **Permissions**: Regular user access

## 🚀 RECENT FIXES & IMPROVEMENTS

### ✅ Contact Pages Fixed
- **NEW**: Created dedicated `/contact` page with full contact form
- **FIXED**: Contact navigation now shows in browser address bar correctly
- **IMPROVED**: Working contact links in footer with `tel:` and `mailto:` protocols
- **FEATURES**: Contact form with name, email, phone, subject, and message fields

### ✅ User Authentication Improvements  
- **ADDED**: Logout button visible when user is logged in
- **IMPROVED**: Shows username in navigation instead of email
- **FIXED**: Logout redirects to home page as requested
- **REMOVED**: All demo login functionality completely eliminated

### ✅ Navigation & Routing
- **ADDED**: "Контакти" link in main navigation menu
- **FIXED**: Footer links now properly route to `/contact` page
- **IMPROVED**: All contact functionality working in both footer and dedicated page

### ✅ Database Setup
- **CREATED**: Admin user with proper username-based authentication
- **FIXED**: Username field properly indexed and unique
- **REMOVED**: Duplicate database index warnings

## 📧 CONTACT INFORMATION

### Website Contact Details
- **Phone**: +359 888 123 456 (clickable tel: link)
- **Email**: info@luxury-lighting.bg (clickable mailto: link)  
- **Address**: гр. София, ул. Витоша 15
- **Hours**: Пон-Пет: 9:00-18:00, Съб: 10:00-16:00

### Social Media Links (in Footer)
- Facebook: https://www.facebook.com/luxurylighting.bg
- Instagram: https://www.instagram.com/luxurylighting.bg  
- LinkedIn: https://linkedin.com/company/luxury-lighting-bg
- YouTube: https://www.youtube.com/@luxurylightingbg

## 🖥️ APPLICATION URLS

- **Frontend**: http://localhost:5175
- **Backend API**: http://localhost:5000
- **Admin Panel**: http://localhost:5175/admin (requires admin login)
- **Contact Page**: http://localhost:5175/contact

## 🎯 HOW TO USE

### For Administrators:
1. Visit http://localhost:5175/login
2. Enter username: `admin` and password: `admin123`
3. Access Admin Panel via navigation menu
4. Manage products, categories, and users

### For Regular Users:
1. Register at http://localhost:5175/register with email + username
2. Login with username and password
3. Browse catalog, add items to cart
4. Use contact form for inquiries

### Contact Form Features:
- Visit http://localhost:5175/contact
- Fill out name, email, phone, subject, and message
- Form submission shows success message
- All contact info displayed with clickable links

## 🔧 TECHNICAL NOTES

- Authentication uses username/password (not email/password)
- Registration requires both email and username
- All demo functionality has been completely removed
- Contact links use proper tel: and mailto: protocols
- Logout automatically redirects to home page
- Navigation shows username when logged in
