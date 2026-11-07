# 📚 LearnMate – AI Learning Assistant

**Learn smarter, not harder!**

LearnMate is a full-stack AI-powered learning platform designed to make studying more interactive, efficient, and personalized. It allows users to upload PDF documents, interact with an AI assistant, generate summaries, create flashcards, take quizzes, and track their learning progress.

Built using the **MERN Stack** and powered by **Google Gemini AI**.

## 🚀 Live Demo

🔗 **Live Application:** [LearnMate](https://learn-mate.vercel.app/)

## ✨ Features

- **🔐 User Authentication** – Secure registration and login using JWT authentication.
- **📄 PDF Management** – Upload, view, and manage PDF documents.
- **🤖 AI Learning Assistant** – Ask questions and get AI-generated answers based on uploaded documents.
- **📝 AI Summaries** – Generate concise summaries of lengthy documents.
- **💡 Concept Explanations** – Understand complex topics through AI-powered explanations.
- **🃏 Flashcard Generation** – Automatically generate flashcards from uploaded study materials.
- **⭐ Favorite Flashcards** – Save and manage important flashcards.
- **📊 Interactive Quizzes** – Generate customizable quizzes based on learning materials.
- **📈 Quiz Results & Explanations** – Review scores and understand answers with detailed explanations.
- **📉 Progress Dashboard** – Track learning activity and monitor progress.

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- Lucide React
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- bcrypt

### AI Integration
- Google Gemini API

### Deployment
- Vercel – Frontend
- Render – Backend
- MongoDB Atlas – Database

## 📂 Project Structure

```text
LearnMate/
│
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   └── learn-mate/
│       ├── public/
│       ├── src/
│       │   ├── assets/
│       │   ├── components/
│       │   ├── context/
│       │   ├── pages/
│       │   ├── services/
│       │   └── App.jsx
│       ├── index.html
│       └── package.json
│
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Navdeep-04/Learn_Mate.git
```

```bash
cd LearnMate
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd Backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `Backend` directory:

```env
PORT=8000
NODE_ENV=development

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

FRONTEND_URL=http://localhost:5173
```

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

Open another terminal and navigate to the frontend directory:

```bash
cd frontend/learn-mate
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:8000/
```

Start the frontend development server:

```bash
npm run dev
```

### 4. Open the Application

Visit:

```text
http://localhost:5173
```

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `NODE_ENV` | Application environment |
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT authentication |
| `GEMINI_API_KEY` | Google Gemini API key |
| `FRONTEND_URL` | Frontend application URL |
| `VITE_API_URL` | Backend API base URL for frontend |

**Important:** Never commit `.env` files, API keys, database credentials, or JWT secrets to GitHub.

## 🧠 How It Works

1. Register or log in to your LearnMate account.
2. Upload your study materials in PDF format.
3. Let the application process and extract the document content.
4. Interact with the AI assistant to ask questions about your documents.
5. Generate summaries, explanations, flashcards, and quizzes.
6. Practice using flashcards and quizzes.
7. Monitor your learning activity through the progress dashboard.

## 🔮 Future Improvements

- Support for additional document formats.
- More AI model integrations.
- Advanced learning analytics.
- Personalized study plans.
- Spaced repetition for flashcards.
- Cloud-based document storage.
- Improved mobile responsiveness.

## 🔒 Security

- JWT-based authentication.
- Password hashing using bcrypt.
- Protected API routes.
- Environment-based configuration.
- CORS configuration.


⭐ If you find this project interesting, consider giving it a star!
