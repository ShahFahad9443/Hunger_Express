# CORS Issue Fixed

## Problem
The frontend was running on `http://localhost:3000` but the backend CORS was only configured to allow `http://localhost:5173`, causing CORS errors.

## Solution
Updated the CORS configuration in `server/index.js` to allow multiple origins:
- `http://localhost:3000` (your current frontend)
- `http://localhost:5173` (default Vite port)
- `http://127.0.0.1:3000`
- `http://127.0.0.1:5173`

In development mode, all origins are allowed for easier testing.

## Changes Made

### server/index.js
- Updated CORS to accept multiple origins
- Added dynamic origin checking
- Allows all origins in development mode

### .env
- Updated `FRONTEND_URL` to include both ports

## Verification

The CORS headers are now correctly set:
```
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Credentials: true
Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS
Access-Control-Allow-Headers: Content-Type,Authorization
```

## Next Steps

1. **Restart the backend server** (if not already restarted):
   ```bash
   npm run server:dev
   ```

2. **Refresh your frontend browser** - The CORS error should be gone and restaurants should load.

3. **Check browser console** - You should see:
   - "Loading restaurants from API..."
   - "API Response: {success: true, count: 15, data: [...]}"
   - "Loaded 15 restaurants"

## If Still Having Issues

1. Make sure backend server is running: `curl http://localhost:5000/api/health`
2. Clear browser cache and localStorage
3. Check browser console for any remaining errors
4. Verify the frontend is actually on port 3000 (check the URL in browser)

