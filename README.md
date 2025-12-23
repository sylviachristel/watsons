# 🛍️ Watsons (E-commerce)

Modern, responsive **e-commerce homepage** built with Nuxt.js 3, Vue 3 and Tailwind CSS.  
This project is developed as a frontend-focused showcase, emphasizing clean UI, scalable component-based architecture and real API integration.
In addition to the homepage, a complete **checkout page** has been implemented to demonstrate multi-page structure and component composition.

--- 

## 🟢 Live Demo

**Homepage:**
https://watsons-delta.vercel.app/

**Checkout Page:**
https://watsons-delta.vercel.app/checkout

_Deployed on Vercel with automatic production builds on every push to main._

---

## ✨ Features
- Modern user interface
- Fully responsive, mobile-first design
- Real product data fetched from the DummyJSON API
- Component-based and reusable architecture
- Dedicated checkout page with modular structure
- Loading and error state handling
- Fast and consistent styling with Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
- **Nuxt.js 3**
- **Vue.js 3 (Composition API)**
- **Tailwind CSS**

### API
- **DummyJSON**

### Deployment
- **Vercel**

---

## 📂 Project Structure

```text
watsons/
├─ components/        # Reusable UI components
├─ pages/             # Nuxt pages and routing
├─ public/            # Static assets (images, icons, etc.)
├─ assets/            # Global styles and assets
├─ composables/       # Reusable logic (if any)
├─ nuxt.config.ts     # Nuxt configuration
└─ package.json
```
## 🚀 Getting Started

Follow the steps below to run the project locally.

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/watsons.git
cd watsons
```
### 2️⃣ Install Dependencies
```bash
npm install
# or
pnpm install
```
### 3️⃣ Start the Development Server
```bash
npm run dev
# or
pnpm dev
```
The application will be available at:
```text
http://localhost:3000
```
---
## 🌐 Deployment (Vercel)
This project is optimized for deployment on Vercel.

### Step-by-Step Deployment Guide 
1. Push the project to a GitHub repository
2. Go to https://vercel.com
3. Click **New Project** and select your repository
4. The framework will be automatically detected as **Nuxt.js**
   
### Build Settings 
**Build Command**
```bash
npm run build
```
**Output Directory**
```text
.output
```
5. Click **Deploy**
  🎉 Your project will be live within seconds.

## 📄 License
This project is created for portfolio purposes only. 
All brand names and assets are used for demonstration purposes.
