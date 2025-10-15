# El Encuentro — Web App

Official frontend for El Encuentro Pilar Eventos — a events website built with React and TypeScript.

Live site: https://elencuentropilareventos.com.ar

## What this repository contains

- A React (Create React App) frontend written in TypeScript.
- UI built with Material UI (MUI) and Emotion for styling.
- Firebase integration for backend services.
- Redux Toolkit for state management.
- Email sending with EmailJS and a contact form.

## Tech stack

- React 18 + TypeScript
- Create React App (react-scripts)
- Material UI (MUI) + @emotion
- Redux Toolkit + react-redux
- Firebase
- EmailJS
- react-router-dom

## Getting started

Prerequisites: Node.js (16+ recommended) and npm installed.

1. Clone the repository and install dependencies:

```powershell
git clone https://github.com/riverofrancisco/elencuentro-pilareventos.git
cd elencuentro-pilareventos
npm install
```

2. Create a local environment file if needed.

This project uses Firebase and EmailJS. Environment variables are expected for API keys and configuration. The repository does not include a .env file by default. Example variables you may need to provide in a `.env` (CRA) file:

```text
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
REACT_APP_EMAILJS_USER_ID=your_emailjs_user_id
```

Adjust the names above to match any variables read in `src/config/firebase.ts` or other config files.

3. Run the development server:

```powershell
npm start
```

4. Build for production:

```powershell
npm run build
```

## Available scripts

- `npm start` — Start development server
- `npm run build` — Create production build
- `npm test` — Run tests
- `npm run eject` — Eject CRA configuration (one-way)

## Project structure (high level)

- `src/` — application source code
   - `components/` — React components grouped by feature
   - `redux/` — Redux store and slices
   - `config/` — Firebase and other configuration
   - `router/` — React Router setup

## Notes and assumptions

- I inferred common environment variable names — check `src/config/firebase.ts` and `src/components/Auth` for exact variable names and adapt the `.env` accordingly.
- The project uses Create React App. If you use a different environment or CI, adapt the commands as needed.

## Contributing

Contributions are welcome. Typical workflow:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-change`
3. Commit changes and push
4. Open a pull request describing the change

Please run tests and linting before opening a PR.

---
