# Hunger Express

Hunger Express - An AI based Food Ordering and Delivery Web Application

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
Hunger_Express/
├── public/                 # Static assets
│   └── index.html         # HTML template
├── src/
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
├── .eslintrc.cjs          # ESLint configuration
├── .gitignore             # Git ignore rules
├── jsconfig.json          # JavaScript/JSX path aliases
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **React Router** - Routing
- **Vite** - Build tool and dev server
- **ESLint** - Code linting

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

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
