# Troubleshooting Guide

## Issue: No Restaurant Data in Frontend

### Problem
Restaurants are not showing up in the frontend even though the database has data.

### Common Causes & Solutions

#### 1. Backend Server Not Running
**Symptom**: No data loads, network errors in browser console

**Solution**:
```bash
# Start the backend server
npm run server:dev

# Or start both frontend and backend
npm run dev:all
```

**Verify**: Check if server is running on `http://localhost:5000`
```bash
curl http://localhost:5000/api/health
```

#### 2. Database Not Running
**Symptom**: Server starts but API calls fail with database errors

**Solution**:
```bash
# Start MySQL with Docker
docker-compose up -d

# Verify database is running
docker ps | grep hunger_express_mysql
```

#### 3. CORS Issues
**Symptom**: Network errors in browser console about CORS

**Solution**: 
- Check `.env` file has `FRONTEND_URL=http://localhost:5173`
- Verify server CORS configuration in `server/index.js`

#### 4. API URL Configuration
**Symptom**: Requests going to wrong URL

**Solution**:
- Check browser console for API errors
- Verify `VITE_API_URL` in `.env` (optional, defaults to `http://localhost:5000/api`)
- Check `src/services/api.js` for correct base URL

#### 5. Network Errors
**Symptom**: Console shows fetch errors

**Check**:
1. Open browser DevTools (F12)
2. Go to Network tab
3. Try to load restaurants page
4. Check if requests are being made
5. Check response status and errors

#### 6. Data Format Issues
**Symptom**: API returns data but frontend doesn't display it

**Check**:
- Browser console for JavaScript errors
- Verify API response format matches expected structure
- Check if `response.success` is `true`
- Verify `response.data` is an array

### Debugging Steps

1. **Check Server Status**:
   ```bash
   curl http://localhost:5000/api/health
   ```

2. **Check API Endpoint**:
   ```bash
   curl http://localhost:5000/api/restaurants
   ```

3. **Check Database**:
   ```bash
   docker exec hunger_express_mysql mysql -u hunger_user -phunger_password -h localhost -e "SELECT COUNT(*) FROM restaurants;" hunger_express
   ```

4. **Check Browser Console**:
   - Open DevTools (F12)
   - Check Console tab for errors
   - Check Network tab for failed requests

5. **Check Server Logs**:
   - Look at terminal where server is running
   - Check for error messages
   - Verify requests are being received

### Quick Fix Checklist

- [ ] Backend server is running (`npm run server:dev`)
- [ ] MySQL database is running (`docker-compose up -d`)
- [ ] Server is accessible at `http://localhost:5000`
- [ ] API endpoint returns data: `curl http://localhost:5000/api/restaurants`
- [ ] No CORS errors in browser console
- [ ] No JavaScript errors in browser console
- [ ] Network requests show in browser DevTools
- [ ] `.env` file has correct configuration

### Expected Behavior

When everything is working:
1. Frontend loads restaurants page
2. Shows loading spinner briefly
3. Displays 15 restaurants from database
4. No errors in console
5. Network tab shows successful API calls

### Still Not Working?

1. Check server logs for detailed error messages
2. Check browser console for JavaScript errors
3. Verify all environment variables are set correctly
4. Try restarting both frontend and backend
5. Clear browser cache and localStorage

