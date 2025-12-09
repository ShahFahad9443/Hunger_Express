# Hunger Express

Hunger Express - An AI based Food Ordering and Delivery Web Application

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn or pnpm
- MongoDB Atlas account (for database)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the `MONGODB_URI` with your MongoDB Atlas connection string
   - Update other environment variables as needed

3. Start the development servers:
   - Frontend only: `npm run dev`
   - Backend only: `npm run server:dev`
   - Both frontend and backend: `npm run dev:all` (requires `concurrently` package)

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
Hunger_Express/
├── public/                 # Static assets
│   └── index.html         # HTML template
├── server/                 # Backend Express server
│   ├── config/            # Configuration files
│   │   └── database.js    # MongoDB connection
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middleware
│   │   └── errorHandler.js # Error handling middleware
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   │   └── index.js       # Main routes file
│   └── index.js           # Server entry point
├── src/                   # Frontend React application
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # Reusable React components
│   ├── constants/         # App constants and configuration
│   ├── context/           # React Context providers
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   ├── services/          # API services and external integrations
│   ├── styles/            # Global styles and CSS files
│   ├── utils/             # Utility functions and helpers
│   ├── App.jsx            # Main App component
│   └── main.jsx           # Application entry point
├── .env.example           # Example environment variables
├── .eslintrc.cjs          # ESLint configuration
├── .gitignore             # Git ignore rules
├── jsconfig.json          # JavaScript/JSX path aliases
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **React Router** - Routing
- **Vite** - Build tool and dev server
- **ESLint** - Code linting

### Backend
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Development Tools
- **Husky** - Git hooks for pre-commit linting
- **Nodemon** - Auto-restart server during development

## 📝 Available Scripts

### Frontend
- `npm run dev` - Start frontend development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm run server` - Start backend server (production mode)
- `npm run server:dev` - Start backend server with nodemon (development mode)
- `npm run dev:all` - Start both frontend and backend concurrently (requires `concurrently` package)

## 🔧 Backend Setup

### MongoDB Atlas Configuration

1. Create a MongoDB Atlas account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier available)
3. Create a database user with username and password
4. Whitelist your IP address (or use `0.0.0.0/0` for development)
5. Get your connection string from the "Connect" button
6. Update your `.env` file with the connection string:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hunger_express?retryWrites=true&w=majority
   ```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_atlas_connection_string
```

### API Endpoints

The backend server runs on `http://localhost:5000` by default.

- Health check: `GET /api/health`
- API routes: `GET /api/*` (to be configured)

### Backend Development

The backend uses ES6 modules and includes:
- Express server setup with CORS
- MongoDB connection with Mongoose
- Error handling middleware
- Structured folder organization (controllers, models, routes)

## 🔒 Git Hooks (Husky)

This project uses Husky to run Git hooks automatically:

- **Pre-commit hook**: Runs ESLint before each commit
  - Prevents commits with linting errors
  - Ensures code quality standards are maintained
  - To bypass (not recommended): `git commit --no-verify`

The hooks are automatically set up when you run `npm install` (via the `prepare` script).

## 📋 Pull Request Template

This project uses a PR template to ensure consistent and comprehensive pull requests. When creating a PR on GitHub, the template will automatically populate with sections for:

- Description of changes
- Type of change (bug fix, feature, etc.)
- Related issues
- Testing information
- Checklist for reviewers
- Additional notes

The template file is located at `.github/pull_request_template.md`. Simply fill out the template when creating your PR to provide reviewers with all necessary information.

## 🎯 Path Aliases

The project uses path aliases configured in `jsconfig.json`:

- `@/*` - Points to `src/*`
- `@components/*` - Points to `src/components/*`
- `@pages/*` - Points to `src/pages/*`
- `@hooks/*` - Points to `src/hooks/*`
- `@utils/*` - Points to `src/utils/*`
- `@services/*` - Points to `src/services/*`
- `@assets/*` - Points to `src/assets/*`
- `@styles/*` - Points to `src/styles/*`

Example usage:
```javascript
import Button from '@components/Button'
import { useAuth } from '@hooks/useAuth'
import { formatPrice } from '@utils/helpers'
```
