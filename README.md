# React Jobs

A full-stack job listing application built with React, Vite, and Express.js.

## 🚀 Features

- **Frontend**: React with Vite for fast development
- **Backend**: Express.js with MongoDB
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Routing**: React Router DOM
- **Notifications**: React Toastify
- **Loading States**: React Spinners

## 📁 Project Structure

```
react-jobs/
├── frontend/           # React frontend application
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/            # Express.js backend API
│   ├── src/
│   └── package.json
├── node_modules/       # Shared dependencies
└── package.json        # Root package with scripts
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-jobs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create `.env` files in both `frontend/` and `backend/` directories:
   
   **Backend (.env)**:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   NODE_ENV=development
   ```
   
   **Frontend (.env)** (optional):
   ```env
   VITE_API_URL=http://localhost:5000
   ```

## 🚀 Development

### Start both frontend and backend:
```bash
npm run dev
```

### Start individually:
```bash
# Frontend only (http://localhost:5173)
npm run dev:frontend

# Backend only (http://localhost:5000)
npm run dev:backend
```

## 🏗️ Build

```bash
# Build frontend for production
npm run build
```

## 📦 Technologies Used

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library
- **React Toastify** - Toast notifications
- **React Spinners** - Loading indicators

### Backend
- **Express.js** - Web framework
- **MongoDB & Mongoose** - Database
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables
- **Nodemon** - Development server auto-reload

### Development Tools
- **ESLint** - Code linting
- **Vite Plugins** - React fast refresh
- **Concurrently** - Run multiple commands

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start both frontend and backend in development mode |
| `npm run dev:frontend` | Start only the frontend development server |
| `npm run dev:backend` | Start only the backend development server |
| `npm run build` | Build the frontend for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint on the frontend code |

## 🌐 API Endpoints

Base URL: `http://localhost:5000`

- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/:id` - Get job by ID
- `POST /api/jobs` - Create new job
- `PUT /api/jobs/:id` - Update job
- `DELETE /api/jobs/:id` - Delete job

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🎯 Enhancement Ideas

Feel free to contribute by adding any of these features:

- [ ] **User Authentication** - Login/Register system with JWT
- [ ] **Advanced Search** - Filter by location, salary, job type
- [ ] **Image Uploads** - Company logos and job images
- [ ] **Email Notifications** - Job alerts and application updates
- [ ] **Admin Dashboard** - Manage jobs and users
- [ ] **Application Tracking** - Apply to jobs and track status
- [ ] **Favorites System** - Save jobs for later
- [ ] **Company Profiles** - Detailed company information
- [ ] **Resume Upload** - PDF resume upload and parsing
- [ ] **Job Recommendations** - AI-powered job suggestions

---

Built with ❤️ using React + Vite + Express.js