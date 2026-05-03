# CV Website with Digital Twin Chat

This README describes only the local setup and configuration for the frontend.

## Requirements

- Node.js 18 or newer
- npm 9 or newer

## Installation

From the `frontend` directory:

```bash
npm install
```

## Environment variables

Create a `.env` file in the `frontend` directory and add your OpenRouter API key:

```env
OPENROUTER_API_KEY=your_api_key_here
```

The `.env` file is ignored by Git and must **not** be committed to any public repository.

## Development

Start the development server from the `frontend` directory:

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Production build

To create a production build and run it locally:

```bash
npm run build
npm start
```
