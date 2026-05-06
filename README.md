# Lyrixa Frontend

Static frontend for Lyrixa lyrics search application.

## Deployment to Vercel

### Method 1: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Method 2: Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Import this repository
4. Configure:
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: (leave empty)
   - **Output Directory**: (leave empty)
5. Click "Deploy"

### Method 3: GitHub Integration

1. Push this folder to GitHub
2. Connect repository to Vercel
3. Auto-deploys on every push to main branch

## Configuration

Before deploying, update the API URL in `index.html` (line ~1135):

```javascript
const API_BASE_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:3000' 
  : 'https://your-render-backend.onrender.com'; // ← Update this
```

## Files

- `index.html` - Main application (HTML + CSS + JavaScript)
- `vercel.json` - Vercel configuration
- `.gitignore` - Git ignore rules

## Local Testing

Simply open `index.html` in a browser, or use a local server:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

Then visit: http://localhost:8000
