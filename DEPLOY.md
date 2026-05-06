# Frontend Deployment Guide

## Environment Setup

### Local Development

1. Create `env.js` file (already created):
```javascript
window.ENV = {
  VITE_API_URL: 'http://localhost:3000'
};
```

2. Open `index.html` in browser or use local server:
```bash
python3 -m http.server 8000
# or
npx serve
```

### Production (Vercel)

#### Option 1: Update vercel.json (Recommended)

Edit `vercel.json` and set your backend URL:
```json
{
  "env": {
    "VITE_API_URL": "https://your-actual-backend.onrender.com"
  }
}
```

#### Option 2: Vercel Dashboard

1. Deploy to Vercel
2. Go to Project Settings → Environment Variables
3. Add:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://your-backend.onrender.com`
4. Redeploy

#### Option 3: Create Production env.js

For production, create `env.js` with your backend URL:
```javascript
window.ENV = {
  VITE_API_URL: 'https://your-backend.onrender.com'
};
```

## Deployment Steps

### 1. Update Backend URL

Choose one method above to set your backend URL.

### 2. Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

Or use Vercel Dashboard:
1. Go to https://vercel.com/dashboard
2. Import this repository
3. Deploy

### 3. Verify

After deployment, check browser console for:
```
🔗 API Base URL: https://your-backend.onrender.com
```

## Files

- `index.html` - Main application
- `config.js` - Configuration loader
- `env.js` - Environment variables (local only, not committed)
- `env.template.js` - Template for env.js
- `vercel.json` - Vercel configuration
- `.env` - Environment file (not used directly, for reference)
- `.env.example` - Environment template

## How It Works

```
1. Browser loads index.html
2. Loads env.js (contains VITE_API_URL)
3. Loads config.js (reads env.js and sets API_BASE_URL)
4. Application uses API_BASE_URL for all API calls
```

## Troubleshooting

### API calls failing

Check browser console for API URL:
```javascript
console.log('🔗 API Base URL:', API_BASE_URL);
```

### CORS errors

Make sure backend has correct FRONTEND_URL in environment variables.

### Wrong API URL

1. Check `env.js` exists and has correct URL
2. Check `vercel.json` has correct URL
3. Check Vercel dashboard environment variables
