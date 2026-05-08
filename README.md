# Todo App - Task Management System

An intuitive task management application with real-time filtering, pagination, and beautiful UI design for organizing daily tasks efficiently.

## Key Features

### For Users
-  **Task Management** - Create, read, update, and delete tasks seamlessly
-  **Smart Filtering** - Filter tasks by status (All, Active, Completed) and date (Today, Upcoming)
-  **Progress Tracking** - Real-time statistics showing active and completed task counts
-  **Pagination** - Organized task list with page navigation
-  **Responsive Design** - Optimized for mobile, tablet, and desktop devices
-  **User Feedback** - Toast notifications for all actions

---

##  Tech Stack

### Frontend
- **React 18+** - UI Framework
- **Vite 5.0+** - Build Tool & Dev Server
- **Tailwind CSS** - Styling & Responsive Design
- **Axios** - HTTP Client
- **Sonner** - Toast Notifications
- **React Hooks** - State Management

### Backend
- **Node.js & Express.js** - Runtime & Server Framework
- **MongoDB** - NoSQL Database
- **Mongoose** - ODM (Object Data Modeling)
- **Dotenv** - Environment Configuration
- **CORS** - Cross-Origin Resource Sharing

---

##  Project Structure

```
todo-app/
├── frontend/                    # React + Vite App
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── AddTask.jsx
│   │   │   ├── TaskList.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskListPagination.jsx
│   │   │   ├── StatsAndFilters.jsx
│   │   │   ├── DateTimeFilter.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   └── HomePage.jsx     # Main dashboard
│   │   ├── lib/
│   │   │   ├── axios.js         # API configuration
│   │   │   └── data.js          # Constants
│   │   └── App.jsx
│   ├── package.json
│   └── .env.example
│
├── backend/                     # Express Server
│   ├── src/
│   │   ├── controllers/         # Business logic
│   │   │   └── taskController.js
│   │   ├── models/              # MongoDB schemas
│   │   │   └── Task.js
│   │   ├── routes/              # API endpoints
│   │   │   └── taskRoutes.js
│   │   ├── config/              # Configuration
│   │   │   └── db.js
│   │   └── index.js             # Entry point
│   ├── package.json
│   └── .env.example
│
└── README.md
```

---

##  Quick Start

### Prerequisites
- Node.js 14+
- npm or yarn
- MongoDB (local or cloud)

### 1. Clone Repository
```bash
git clone https://github.com/yourname/todo-app.git
cd todo-app
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create `.env` file:
```env
MONGODB_CONNECTIONSTRING=mongodb://localhost:27017/todo-app
PORT=5000
NODE_ENV=development
```

Start backend:
```bash
npm run dev
```

Backend runs at `http://localhost:5000`

### 3. Setup Frontend

```bash
cd frontend
npm install
```

Create `.env` file:
```env
VITE_API_URL=http://localhost:5000
```

Start frontend:
```bash
npm run dev
```

Frontend runs at `http://localhost:5173`

---

##  API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks?filter=today` | Get task list |
| POST | `/api/tasks` | Create new task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

---

##  Troubleshooting

| Issue | Solution |
|-------|----------|
| **API 404 Error** | Ensure backend is running on port 5000 |
| **MongoDB Connection Failed** | Check MONGODB_CONNECTIONSTRING in .env |
| **CORS Error** | Verify VITE_API_URL in frontend .env |
| **Responsive Issues** | Clear cache and reload page |

---

##  Detailed Features

### Task Management
- Create new tasks with title and description
- Mark tasks as complete
- Edit existing tasks
- Delete unnecessary tasks

### Filtering & Sorting
- Filter by status: All / Active / Completed
- Filter by date: Today / Upcoming
- Display count of active and completed tasks

### User Experience
- Beautiful gradient sunset UI
- Toast notifications for every action
- Auto pagination when scrolling
- Responsive on all devices

---

##  My Contributions

 **Frontend Development**
- Designed responsive UI with Tailwind CSS
- Implemented filtering and pagination logic
- Created reusable React components with hooks
- Integrated Axios for API calls
- Added toast notifications
- Fixed state management issues

 **Backend Development**
- Designed RESTful API endpoints
- Created MongoDB schema
- Implemented filtering logic
- Set up environment-based configuration
- Added error handling and validation

 **UI/UX Design**
- Created gradient sunset theme
- Responsive breakpoints (mobile, tablet, desktop)
- Optimized spacing and padding

---

##  Performance

-  Fast load time with Vite
-  Efficient data fetching
-  Optimized CSS with Tailwind
-  Mobile-first responsive design

---

##  Security

- Environment variables for sensitive data
- CORS configuration
- Input validation
- Proper error handling

---

##  Future Enhancements

- [ ] User authentication & authorization
- [ ] Task categories and tags
- [ ] Due date reminders
- [ ] Dark mode toggle
- [ ] Task priority levels
- [ ] Recurring tasks
- [ ] Real-time updates with Socket.io
- [ ] Mobile app (React Native)

---

##  License

This project is open source and available under the MIT License.

---



## ⭐ Show Your Support

Give a ⭐️ if this project helped you!
