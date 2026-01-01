# React Starter Template

A modern, production-ready React starter template built with:

- ⚛️ **React 18** - Latest React with concurrent features
- 📘 **TypeScript** - Type-safe development
- ⚡ **Vite** - Lightning-fast build tool
- 🎨 **Tailwind CSS** - Utility-first CSS framework

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Button.tsx
│   └── Card.tsx
├── pages/           # Page-level components
│   └── HomePage.tsx
├── hooks/           # Custom React hooks
│   └── useCounter.ts
├── utils/           # Helper functions
│   └── format.ts
├── styles/          # Global styles
│   └── index.css
├── App.tsx          # Root component
└── main.tsx         # Application entry point
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Features

- ✅ TypeScript strict mode
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Modern React patterns (hooks, functional components)
- ✅ Clean and scalable architecture
- ✅ Production-ready configuration

## Code Style

- Functional components with TypeScript
- Arrow functions
- Default exports for components
- Proper TypeScript typing (no `any`)
- Clean and readable code structure
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
