
# 🛒 SkillCart – Full Stack E-Learning App

SkillCart is a full-stack e-learning platform where users can browse, purchase, and track online courses. It supports user authentication, course ordering, and admin functionalities.

---

## 📸 Demo

> Add a deployed link here (e.g., Vercel, Netlify)  
🔗 [Live Demo](https://your-deployed-url.com)

---

## 🚀 Tech Stack

**Frontend**:
- React.js (Vite)
- React Router DOM
- Tailwind CSS + DaisyUI
- Axios, React Hook Form

**Backend**:
- Node.js + Express.js
- MongoDB + Mongoose
- dotenv, nodemailer

---

## 📦 Features

✅ User Registration and Login  
✅ Dark/Light Theme Toggle  
✅ Protected Routes  
✅ Course Listing  
✅ Place Order / My Orders  
✅ Order Tracking Status (5-step progress)  
✅ Admin: Add New Course  
✅ Newsletter Subscription via Email  
✅ Search Bar with Responsive Navbar  
✅ Mobile-First Responsive Design

---

## 🛠️ Installation & Setup

> ⚙️ Prerequisites: Node.js, MongoDB, Git

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/skillcart.git
cd skillcart
```

### 2. Backend Setup

```bash
cd Backend
npm install
```

**Create a `.env` file:**

```env
PORT=4001
MONGO_URL=your_mongo_uri
ADMIN_EMAIL=your_email@gmail.com
ADMIN_PASS=your_email_app_password
```

```bash
node index.js
```

### 3. Frontend Setup

```bash
cd ../Frontend
npm install
npm run dev
```

Now open: [http://localhost:5173](http://localhost:5173)

---

## 🗂️ Folder Structure

```
skillcart/
│
├── Backend/
│   ├── controller/
│   ├── model/
│   ├── route/
│   └── index.js
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── App.jsx, main.jsx, etc.
│   └── public/
```

---

## 🧑‍💻 Author

- [Aman Chaurasiya](https://github.com/aman8906)

---

## 🌟 Show Support

If you like this project, give it a ⭐️ on GitHub and share!

---

## 📬 Want to Deploy It?

Let me know and I’ll give you step-by-step deployment instructions for:
- **Frontend**: Vercel or Netlify
- **Backend**: Render, Railway, or Cyclic
