# MedQuest

A comprehensive healthcare management web application designed to streamline medical appointment booking and healthcare service management. MedQuest connects patients with healthcare providers through an intuitive, user-friendly interface.

![MedQuest Hero](assets/screenshots/hero.png)

---

## 🚀 Features

### For Patients
- **User Registration & Authentication** – Secure account creation and login  
- **Doctor Discovery** – Browse and search qualified healthcare providers  
- **Appointment Booking** – Schedule appointments with preferred doctors  
- **Appointment Management** – View, reschedule, or cancel appointments  
- **Doctor Reviews** – Read and write reviews for healthcare providers  
- **Service Information** – Access detailed information about medical services  

### For Healthcare Providers
- **Professional Profiles** – Comprehensive doctor profiles with specializations  
- **Appointment Management** – Manage patient appointments efficiently  
- **Patient Reviews** – Receive and respond to patient feedback  

### General Features
- **Responsive Design** – Optimized for desktop, tablet, and mobile devices  
- **Real-time Updates** – Live appointment status and notifications  
- **Secure Authentication** – JWT-based authentication system  
- **Modern UI/UX** – Clean, intuitive interface with smooth animations  

![Responsive UI](assets/screenshots/responsive.png)

---

## 🛠️ Technology Stack

### Frontend
- **React** – Modern JavaScript library for building UIs  
- **React Router** – SPA client-side routing  
- **Tailwind CSS** – Utility-first CSS styling  
- **Vite** – Lightning-fast dev server and build tool  
- **Swiper.js** – Touch slider for carousels  

### Backend
- **Node.js** – JavaScript runtime  
- **Express.js** – Web framework for Node.js  
- **MongoDB** – NoSQL document database  
- **Mongoose** – MongoDB object modeling  

### Authentication & Security
- **JWT (JSON Web Tokens)** – User authentication  
- **bcryptjs** – Password hashing  
- **Cookie Parser** – HTTP cookie handling  
- **CORS** – Cross-origin request control  

---

## 📋 Prerequisites

Ensure you have the following installed:

- **Node.js** (v14.0.0 or higher)  
- **npm** or **yarn**  
- **MongoDB** (local or Atlas)

---

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/medquest.git
cd medquest
```
### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
```
### 3. Configure Environment
Create .env file in backend root:
```bash
PORT=8000
NODE_ENV=development
MONGO_URL=mongodb://localhost:27017/medquest
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d
CLIENT_URL=http://localhost:3000
```
### 4. Frontend Setup
```bash
cd frontend
npm install
```
### 5. Run MongoDB
Make sure MongoDB is running or MongoDB Atlas is configured correctly.

🚀 Running the Application
Development
Start backend:
```bash
cd backend
npm run start-dev
```
Start frontend:
```bash
cd frontend
npm run dev
```
Production
Build frontend:
```bash
npm run build
```
Start server:
```bash
npm start
```

📁 Project Structure

medquest/
├── backend/
│   ├── models/
│   │   ├── BookingSchema.js
│   │   ├── DoctorSchema.js
│   │   ├── ReviewSchema.js
│   │   └── UserSchema.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── appointments.js
│   │   ├── doctors.js
│   │   ├── reviews.js
│   │   └── users.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── appointmentController.js
│   │   ├── doctorController.js
│   │   ├── reviewController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── validation.js
│   │   └── errorHandler.js
│   ├── utils/
│   │   ├── database.js
│   │   ├── jwt.js
│   │   └── validation.js
│   ├── node_modules/
│   ├── .env
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
├── public/
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── About/
│   │   └── About.jsx
│   ├── assets/
│   │   ├── images/
│   │   │   ├── about-card.png
│   │   │   ├── about.png
│   │   │   ├── apps.png
│   │   │   ├── avatar-icon.png
│   │   │   ├── backend.png
│   │   │   ├── Blur.png
│   │   │   ├── design.png
│   │   │   ├── doctor-img01.png
│   │   │   ├── doctor-img02.png
│   │   │   ├── doctor-img03.png
│   │   │   ├── faq-img.png
│   │   │   ├── feature-img.png
│   │   │   ├── front-end.png
│   │   │   ├── header-bg.png
│   │   │   ├── hero-bg.png
│   │   │   ├── hero-img01.png
│   │   │   ├── hero-img02.png
│   │   │   ├── hero-img03.png
│   │   │   ├── hero.svg
│   │   │   ├── icon01.png
│   │   │   ├── icon02.png
│   │   │   ├── icon03.png
│   │   │   ├── patient-avatar.png
│   │   │   ├── signup.gif
│   │   │   ├── Star.png
│   │   │   ├── video-icon.png
│   │   │   └── react.svg
│   │   └── styles/
│   │       ├── globals.css
│   │       └── components.css
│   ├── Components/
│   │   ├── style/
│   │   │   ├── Faq/
│   │   │   │   └── FaqItem.jsx
│   │   │   └── Header.css
│   │   ├── Testimonial/
│   │   │   └── Testimonial.jsx
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   ├── Hooks/
│   │   ├── useAuth.js
│   │   ├── useApi.js
│   │   └── useTitle.js
│   ├── Layout/
│   │   └── Layout.jsx
│   ├── Others/
│   │   └── ScrollToTops.js
│   ├── Pages/
│   │   ├── Doctors/
│   │   │   ├── DoctorAbout.jsx
│   │   │   ├── DoctorCard.jsx
│   │   │   ├── Doctors.jsx
│   │   │   ├── DoctorsDetails.jsx
│   │   │   ├── DoctorsList.jsx
│   │   │   ├── Feedback.jsx
│   │   │   ├── FeedbackForm.jsx
│   │   │   ├── Reviews.jsx
│   │   │   └── SidePanel.jsx
│   │   ├── Faq/
│   │   │   ├── FaqItem.jsx
│   │   │   └── FaqList.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Services.jsx
│   │   └── Signup.jsx
│   ├── Routes/
│   │   └── Routers.jsx
│   ├── Services/
│   │   ├── ServicesCard.jsx
│   │   └── ServicesList.jsx
│   ├── utils/
│   │   ├── api.js
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── context/
│   │   ├── AuthContext.js
│   │   └── AppContext.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── data/
│   ├── doctors.js
│   ├── faqs.js
│   ├── reviews.js
│   └── services.js
├── .eslintrc.js
├── .gitattributes
├── .gitignore
├── index.html
├── med.png
├── MedQuest.png
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js

