# Manual Test Cases - Hunger Express

## Test Document Information
- **Application Name**: Hunger Express
- **Application Type**: Food Ordering and Delivery Web Application
- **Test Date**: [To be filled]
- **Tester Name**: [To be filled]
- **Test Environment**: [To be filled]
- **Browser**: [To be filled]

---

## Table of Contents
1. [Navigation & UI Tests](#1-navigation--ui-tests)
2. [Home Page Tests](#2-home-page-tests)
3. [Login Page Tests](#3-login-page-tests)
4. [Signup Page Tests](#4-signup-page-tests)
5. [Restaurants Page Tests](#5-restaurants-page-tests)
6. [Offers Page Tests](#6-offers-page-tests)
7. [About Page Tests](#7-about-page-tests)
8. [Contact Page Tests](#8-contact-page-tests)
9. [Responsive Design Tests](#9-responsive-design-tests)
10. [Cross-Browser Tests](#10-cross-browser-tests)

---

## 1. Navigation & UI Tests

### TC-001: Verify Navigation Bar Visibility
- **Priority**: High
- **Preconditions**: Application is loaded
- **Test Steps**:
  1. Open the application in a browser
  2. Observe the navigation bar at the top of the page
- **Expected Result**: Navigation bar should be visible with all menu items (Home, Restaurants, Offers, About, Contact) and Login/Sign Up buttons
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-002: Verify Navigation Links - Home
- **Priority**: High
- **Preconditions**: User is on any page
- **Test Steps**:
  1. Click on "Home" link in the navigation bar
- **Expected Result**: User should be redirected to the home page (URL: /)
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-003: Verify Navigation Links - Restaurants
- **Priority**: High
- **Preconditions**: User is on any page
- **Test Steps**:
  1. Click on "Restaurants" link in the navigation bar
- **Expected Result**: User should be redirected to the restaurants page (URL: /restaurants)
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-004: Verify Navigation Links - Offers
- **Priority**: High
- **Preconditions**: User is on any page
- **Test Steps**:
  1. Click on "Offers" link in the navigation bar
- **Expected Result**: User should be redirected to the offers page (URL: /offers)
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-005: Verify Navigation Links - About
- **Priority**: Medium
- **Preconditions**: User is on any page
- **Test Steps**:
  1. Click on "About" link in the navigation bar
- **Expected Result**: User should be redirected to the about page (URL: /about)
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-006: Verify Navigation Links - Contact
- **Priority**: Medium
- **Preconditions**: User is on any page
- **Test Steps**:
  1. Click on "Contact" link in the navigation bar
- **Expected Result**: User should be redirected to the contact page (URL: /contact)
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-007: Verify Login Button in Navigation
- **Priority**: High
- **Preconditions**: User is on any page
- **Test Steps**:
  1. Click on "Login" button in the navigation bar
- **Expected Result**: User should be redirected to the login page (URL: /login)
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-008: Verify Sign Up Button in Navigation
- **Priority**: High
- **Preconditions**: User is on any page
- **Test Steps**:
  1. Click on "Sign Up" button in the navigation bar
- **Expected Result**: User should be redirected to the signup page (URL: /signup)
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-009: Verify Navigation Bar Hover Effects
- **Priority**: Low
- **Preconditions**: User is on any page
- **Test Steps**:
  1. Hover over each navigation link
- **Expected Result**: Links should show hover effects (color change to pink-600)
- **Actual Result**: [Pass/Fail]
- **Notes**: 

---

## 2. Home Page Tests

### TC-010: Verify Home Page Loads Successfully
- **Priority**: High
- **Preconditions**: Application is loaded
- **Test Steps**:
  1. Navigate to the home page (URL: /)
  2. Wait for the page to fully load
- **Expected Result**: Home page should load without errors, displaying hero section and content
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-011: Verify Hero Section Visibility
- **Priority**: High
- **Preconditions**: User is on the home page
- **Test Steps**:
  1. Scroll to the top of the page
  2. Observe the hero section
- **Expected Result**: Hero section should be visible with:
   - Title: "Delicious Food, Delivered Fast"
   - Subtitle text
   - "Browse Restaurants" button
   - "View Offers" button
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-012: Verify Hero Section - Browse Restaurants Button
- **Priority**: High
- **Preconditions**: User is on the home page
- **Test Steps**:
  1. Click on "Browse Restaurants" button in the hero section
- **Expected Result**: User should be redirected to the restaurants page (URL: /restaurants)
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-013: Verify Hero Section - View Offers Button
- **Priority**: High
- **Preconditions**: User is on the home page
- **Test Steps**:
  1. Click on "View Offers" button in the hero section
- **Expected Result**: User should be redirected to the offers page (URL: /offers)
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-014: Verify Features Section Visibility
- **Priority**: Medium
- **Preconditions**: User is on the home page
- **Test Steps**:
  1. Scroll down to the features section
  2. Observe the three feature cards
- **Expected Result**: Features section should display three cards:
   - Fast Delivery (⚡)
   - Wide Selection (🍽️)
   - Easy Payment (💳)
   Each with title, icon, and description
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-015: Verify Features Section Content
- **Priority**: Medium
- **Preconditions**: User is on the home page
- **Test Steps**:
  1. Scroll to the features section
  2. Read the content of each feature card
- **Expected Result**: Each feature card should contain:
   - Appropriate icon/emoji
   - Feature title
   - Descriptive text about the feature
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-016: Verify Page Title
- **Priority**: Medium
- **Preconditions**: User is on the home page
- **Test Steps**:
  1. Check the browser tab title
- **Expected Result**: Page title should be "Hunger Express - Food Ordering & Delivery" (or similar)
- **Actual Result**: [Pass/Fail]
- **Notes**: 

---

## 3. Login Page Tests

### TC-017: Verify Login Page Loads Successfully
- **Priority**: High
- **Preconditions**: User navigates to login page
- **Test Steps**:
  1. Navigate to /login
  2. Wait for the page to load
- **Expected Result**: Login page should load displaying login form with email, password fields, and buttons
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-018: Verify Login Form Elements
- **Priority**: High
- **Preconditions**: User is on the login page
- **Test Steps**:
  1. Observe the login form
- **Expected Result**: Form should contain:
   - "Login" heading
   - Email input field with placeholder "Email"
   - Password input field with placeholder "Password"
   - "Login" button
   - "Close" button
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-019: Verify Email Input Field
- **Priority**: High
- **Preconditions**: User is on the login page
- **Test Steps**:
  1. Click on the email input field
  2. Type an email address
- **Expected Result**: 
   - Input field should be focusable
   - Text should be entered correctly
   - Email validation should work (if implemented)
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-020: Verify Password Input Field
- **Priority**: High
- **Preconditions**: User is on the login page
- **Test Steps**:
  1. Click on the password input field
  2. Type a password
- **Expected Result**: 
   - Input field should be focusable
   - Text should be masked (shown as dots/asterisks)
   - Password should be entered correctly
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-021: Verify Login Button Click
- **Priority**: High
- **Preconditions**: User is on the login page with valid credentials entered
- **Test Steps**:
  1. Enter email: test@example.com
  2. Enter password: test123
  3. Click "Login" button
- **Expected Result**: 
   - Button should be clickable
   - Login action should be triggered (redirect or error message based on implementation)
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-022: Verify Close Button Functionality
- **Priority**: Medium
- **Preconditions**: User is on the login page
- **Test Steps**:
  1. Click on "Close" button
- **Expected Result**: User should be redirected to the home page (URL: /)
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-023: Verify Login with Empty Fields
- **Priority**: High
- **Preconditions**: User is on the login page
- **Test Steps**:
  1. Leave email and password fields empty
  2. Click "Login" button
- **Expected Result**: 
   - Error message should be displayed (if validation is implemented)
   - Or appropriate feedback should be shown
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-024: Verify Login with Invalid Email Format
- **Priority**: Medium
- **Preconditions**: User is on the login page
- **Test Steps**:
  1. Enter invalid email format: "invalidemail"
  2. Enter password: "test123"
  3. Click "Login" button
- **Expected Result**: 
   - Error message should be displayed for invalid email format (if validation is implemented)
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-025: Verify Login Form Styling
- **Priority**: Low
- **Preconditions**: User is on the login page
- **Test Steps**:
  1. Observe the form styling and layout
- **Expected Result**: 
   - Form should be centered on the page
   - Form should have white background with shadow
   - Pink color scheme should be consistent
   - Form should be responsive
- **Actual Result**: [Pass/Fail]
- **Notes**: 

---

## 4. Signup Page Tests

### TC-026: Verify Signup Page Loads Successfully
- **Priority**: High
- **Preconditions**: User navigates to signup page
- **Test Steps**:
  1. Navigate to /signup
  2. Wait for the page to load
- **Expected Result**: Signup page should load displaying signup form with name, email, password fields, and buttons
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-027: Verify Signup Form Elements
- **Priority**: High
- **Preconditions**: User is on the signup page
- **Test Steps**:
  1. Observe the signup form
- **Expected Result**: Form should contain:
   - "Create Account" heading
   - Full Name input field with placeholder "Full Name"
   - Email input field with placeholder "Email"
   - Password input field with placeholder "Password"
   - "Sign In" button
   - "Close" button
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-028: Verify Full Name Input Field
- **Priority**: High
- **Preconditions**: User is on the signup page
- **Test Steps**:
  1. Click on the Full Name input field
  2. Type a name: "John Doe"
- **Expected Result**: 
   - Input field should be focusable
   - Text should be entered correctly
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-029: Verify Email Input Field in Signup
- **Priority**: High
- **Preconditions**: User is on the signup page
- **Test Steps**:
  1. Click on the email input field
  2. Type an email address
- **Expected Result**: 
   - Input field should be focusable
   - Text should be entered correctly
   - Email validation should work (if implemented)
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-030: Verify Password Input Field in Signup
- **Priority**: High
- **Preconditions**: User is on the signup page
- **Test Steps**:
  1. Click on the password input field
  2. Type a password
- **Expected Result**: 
   - Input field should be focusable
   - Text should be masked (shown as dots/asterisks)
   - Password should be entered correctly
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-031: Verify Sign In Button Click
- **Priority**: High
- **Preconditions**: User is on the signup page with valid data entered
- **Test Steps**:
  1. Enter Full Name: "John Doe"
  2. Enter email: test@example.com
  3. Enter password: test123
  4. Click "Sign In" button
- **Expected Result**: 
   - Button should be clickable
   - Signup action should be triggered (redirect or error message based on implementation)
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-032: Verify Close Button Functionality in Signup
- **Priority**: Medium
- **Preconditions**: User is on the signup page
- **Test Steps**:
  1. Click on "Close" button
- **Expected Result**: User should be redirected to the home page (URL: /)
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-033: Verify Signup with Empty Fields
- **Priority**: High
- **Preconditions**: User is on the signup page
- **Test Steps**:
  1. Leave all fields empty
  2. Click "Sign In" button
- **Expected Result**: 
   - Error message should be displayed (if validation is implemented)
   - Or appropriate feedback should be shown
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-034: Verify Signup with Invalid Email Format
- **Priority**: Medium
- **Preconditions**: User is on the signup page
- **Test Steps**:
  1. Enter Full Name: "John Doe"
  2. Enter invalid email format: "invalidemail"
  3. Enter password: "test123"
  4. Click "Sign In" button
- **Expected Result**: 
   - Error message should be displayed for invalid email format (if validation is implemented)
- **Actual Result**: [Pass/Fail]
- **Notes**: 

---

## 5. Restaurants Page Tests

### TC-035: Verify Restaurants Page Loads Successfully
- **Priority**: High
- **Preconditions**: User navigates to restaurants page
- **Test Steps**:
  1. Navigate to /restaurants
  2. Wait for the page to load
- **Expected Result**: Restaurants page should load displaying list of restaurants
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-036: Verify Restaurants Page Title
- **Priority**: Medium
- **Preconditions**: User is on the restaurants page
- **Test Steps**:
  1. Observe the page heading
- **Expected Result**: Page should display "Our Restaurants" as the main heading
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-037: Verify Restaurant Cards Display
- **Priority**: High
- **Preconditions**: User is on the restaurants page
- **Test Steps**:
  1. Scroll through the restaurants list
- **Expected Result**: Restaurant cards should be displayed in a grid layout showing:
   - Restaurant name
   - Description
   - Location, rating, and hours information
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-038: Verify Restaurant Information - Italian Bistro
- **Priority**: Medium
- **Preconditions**: User is on the restaurants page
- **Test Steps**:
  1. Locate the "Italian Bistro" restaurant card
  2. Verify the information displayed
- **Expected Result**: Card should display:
   - Name: "Italian Bistro"
   - Description about Italian cuisine
   - Location: Downtown
   - Rating: 4.8
   - Hours: 11:00 AM - 11:00 PM
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-039: Verify Restaurant Information - Asian Fusion
- **Priority**: Medium
- **Preconditions**: User is on the restaurants page
- **Test Steps**:
  1. Locate the "Asian Fusion" restaurant card
  2. Verify the information displayed
- **Expected Result**: Card should display:
   - Name: "Asian Fusion"
   - Description about Asian cuisine
   - Location: Midtown
   - Rating: 4.9
   - Hours: 12:00 PM - 10:00 PM
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-040: Verify Restaurant Grid Layout
- **Priority**: Medium
- **Preconditions**: User is on the restaurants page
- **Test Steps**:
  1. Observe the layout of restaurant cards
- **Expected Result**: 
   - Cards should be displayed in a responsive grid
   - 1 column on mobile, 2 columns on tablet, 3 columns on desktop
   - Cards should have proper spacing
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-041: Verify All Restaurants Are Displayed
- **Priority**: High
- **Preconditions**: User is on the restaurants page
- **Test Steps**:
  1. Count the number of restaurant cards displayed
- **Expected Result**: Should display at least 6 restaurants:
   - Italian Bistro
   - Asian Fusion
   - Burger House
   - Mexican Cantina
   - Seafood Grill
   - Vegetarian Delight
- **Actual Result**: [Pass/Fail]
- **Notes**: 

---

## 6. Offers Page Tests

### TC-042: Verify Offers Page Loads Successfully
- **Priority**: High
- **Preconditions**: User navigates to offers page
- **Test Steps**:
  1. Navigate to /offers
  2. Wait for the page to load
- **Expected Result**: Offers page should load displaying special offers and deals
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-043: Verify Offers Page Title
- **Priority**: Medium
- **Preconditions**: User is on the offers page
- **Test Steps**:
  1. Observe the page heading
- **Expected Result**: Page should display "Special Offers & Deals" as the main heading
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-044: Verify First Order Special Offer
- **Priority**: High
- **Preconditions**: User is on the offers page
- **Test Steps**:
  1. Locate the "First Order Special" offer card
  2. Verify the information displayed
- **Expected Result**: Card should display:
   - Title: "🎉 First Order Special"
   - Discount: "30% OFF on your first order!"
   - Promo code: "FIRST30"
   - Valid until date
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-045: Verify Weekend Special Offer
- **Priority**: High
- **Preconditions**: User is on the offers page
- **Test Steps**:
  1. Locate the "Weekend Special" offer card
  2. Verify the information displayed
- **Expected Result**: Card should display:
   - Title: "🍕 Weekend Special"
   - Offer: "Buy 2 Get 1 Free on Weekends!"
   - Description about the offer
   - Valid every weekend
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-046: Verify Free Delivery Offer
- **Priority**: High
- **Preconditions**: User is on the offers page
- **Test Steps**:
  1. Locate the "Free Delivery" offer card
  2. Verify the information displayed
- **Expected Result**: Card should display:
   - Title: "🚀 Free Delivery"
   - Offer: "Free Delivery on Orders Above $25"
   - Description about automatic application
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-047: Verify Loyalty Rewards Offer
- **Priority**: High
- **Preconditions**: User is on the offers page
- **Test Steps**:
  1. Locate the "Loyalty Rewards" offer card
  2. Verify the information displayed
- **Expected Result**: Card should display:
   - Title: "🎁 Loyalty Rewards"
   - Offer: "Earn Points with Every Order!"
   - Description about points system
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-048: Verify How to Redeem Offers Section
- **Priority**: Medium
- **Preconditions**: User is on the offers page
- **Test Steps**:
  1. Scroll to the bottom of the page
  2. Locate the "How to Redeem Offers" section
- **Expected Result**: Section should display numbered steps explaining how to redeem offers
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-049: Verify Offers Grid Layout
- **Priority**: Medium
- **Preconditions**: User is on the offers page
- **Test Steps**:
  1. Observe the layout of offer cards
- **Expected Result**: 
   - Cards should be displayed in a responsive grid
   - 1 column on mobile, 2 columns on tablet/desktop
   - Cards should have proper spacing and gradient backgrounds
- **Actual Result**: [Pass/Fail]
- **Notes**: 

---

## 7. About Page Tests

### TC-050: Verify About Page Loads Successfully
- **Priority**: Medium
- **Preconditions**: User navigates to about page
- **Test Steps**:
  1. Navigate to /about
  2. Wait for the page to load
- **Expected Result**: About page should load displaying information about the company
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-051: Verify About Page Content
- **Priority**: Medium
- **Preconditions**: User is on the about page
- **Test Steps**:
  1. Read through the page content
- **Expected Result**: Page should display relevant information about Hunger Express
- **Actual Result**: [Pass/Fail]
- **Notes**: 

---

## 8. Contact Page Tests

### TC-052: Verify Contact Page Loads Successfully
- **Priority**: High
- **Preconditions**: User navigates to contact page
- **Test Steps**:
  1. Navigate to /contact
  2. Wait for the page to load
- **Expected Result**: Contact page should load displaying contact form and information
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-053: Verify Contact Page Title
- **Priority**: Medium
- **Preconditions**: User is on the contact page
- **Test Steps**:
  1. Observe the page heading
- **Expected Result**: Page should display "Contact Us" as the main heading
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-054: Verify Contact Information Display
- **Priority**: High
- **Preconditions**: User is on the contact page
- **Test Steps**:
  1. Locate the "Get in Touch" section
  2. Verify contact information
- **Expected Result**: Should display:
   - Phone number with hours
   - Email address with response time
   - Physical address
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-055: Verify Business Hours Display
- **Priority**: Medium
- **Preconditions**: User is on the contact page
- **Test Steps**:
  1. Locate the "Business Hours" section
  2. Verify the hours displayed
- **Expected Result**: Should display business hours for:
   - Monday - Friday: 9:00 AM - 9:00 PM
   - Saturday: 10:00 AM - 10:00 PM
   - Sunday: 10:00 AM - 8:00 PM
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-056: Verify Social Media Links
- **Priority**: Low
- **Preconditions**: User is on the contact page
- **Test Steps**:
  1. Locate the social media icons
  2. Verify they are displayed
- **Expected Result**: Should display social media icons for:
   - Facebook
   - Twitter
   - Instagram
   - LinkedIn
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-057: Verify Contact Form Elements
- **Priority**: High
- **Preconditions**: User is on the contact page
- **Test Steps**:
  1. Locate the contact form
  2. Verify all form fields
- **Expected Result**: Form should contain:
   - Name input field with label
   - Email input field with label
   - Subject input field with label
   - Message textarea with label
   - "Send Message" button
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-058: Verify Contact Form - Name Field
- **Priority**: High
- **Preconditions**: User is on the contact page
- **Test Steps**:
  1. Click on the Name input field
  2. Type a name: "John Doe"
- **Expected Result**: 
   - Input field should be focusable
   - Text should be entered correctly
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-059: Verify Contact Form - Email Field
- **Priority**: High
- **Preconditions**: User is on the contact page
- **Test Steps**:
  1. Click on the Email input field
  2. Type an email: "test@example.com"
- **Expected Result**: 
   - Input field should be focusable
   - Text should be entered correctly
   - Email validation should work (if implemented)
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-060: Verify Contact Form - Subject Field
- **Priority**: Medium
- **Preconditions**: User is on the contact page
- **Test Steps**:
  1. Click on the Subject input field
  2. Type a subject: "Test Subject"
- **Expected Result**: 
   - Input field should be focusable
   - Text should be entered correctly
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-061: Verify Contact Form - Message Field
- **Priority**: High
- **Preconditions**: User is on the contact page
- **Test Steps**:
  1. Click on the Message textarea
  2. Type a message: "This is a test message"
- **Expected Result**: 
   - Textarea should be focusable
   - Text should be entered correctly
   - Textarea should be resizable
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-062: Verify Contact Form Submission
- **Priority**: High
- **Preconditions**: User is on the contact page with form filled
- **Test Steps**:
  1. Fill in all form fields with valid data
  2. Click "Send Message" button
- **Expected Result**: 
   - Button should be clickable
   - Form submission should be triggered (success message or redirect based on implementation)
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-063: Verify Contact Form Validation - Empty Fields
- **Priority**: High
- **Preconditions**: User is on the contact page
- **Test Steps**:
  1. Leave all form fields empty
  2. Click "Send Message" button
- **Expected Result**: 
   - Error messages should be displayed (if validation is implemented)
   - Or appropriate feedback should be shown
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-064: Verify FAQ Section
- **Priority**: Medium
- **Preconditions**: User is on the contact page
- **Test Steps**:
  1. Scroll to the bottom of the page
  2. Locate the FAQ section
- **Expected Result**: FAQ section should display common questions and answers:
   - How long does delivery take?
   - What payment methods do you accept?
   - Can I cancel my order?
- **Actual Result**: [Pass/Fail]
- **Notes**: 

---

## 9. Responsive Design Tests

### TC-065: Verify Mobile View - Home Page
- **Priority**: High
- **Preconditions**: Browser window is resized to mobile size (375px width)
- **Test Steps**:
  1. Navigate to home page
  2. Observe the layout
- **Expected Result**: 
   - Page should be responsive
   - Content should be readable
   - Navigation should be accessible
   - Buttons should be appropriately sized
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-066: Verify Tablet View - Restaurants Page
- **Priority**: Medium
- **Preconditions**: Browser window is resized to tablet size (768px width)
- **Test Steps**:
  1. Navigate to restaurants page
  2. Observe the layout
- **Expected Result**: 
   - Restaurant cards should display in 2 columns
   - Content should be properly formatted
   - Navigation should be accessible
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-067: Verify Desktop View - All Pages
- **Priority**: High
- **Preconditions**: Browser window is at desktop size (1920px width)
- **Test Steps**:
  1. Navigate through all pages
  2. Observe the layout on each page
- **Expected Result**: 
   - All pages should display properly
   - Content should be well-spaced
   - Grid layouts should show maximum columns
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-068: Verify Navigation Bar Responsiveness
- **Priority**: High
- **Preconditions**: Browser window is resized to different sizes
- **Test Steps**:
  1. Resize browser window from mobile to desktop
  2. Observe navigation bar behavior
- **Expected Result**: 
   - Navigation should adapt to screen size
   - Menu items should be accessible at all sizes
   - Buttons should be appropriately sized
- **Actual Result**: [Pass/Fail]
- **Notes**: 

---

## 10. Cross-Browser Tests

### TC-069: Verify Application in Chrome
- **Priority**: High
- **Preconditions**: Chrome browser is installed
- **Test Steps**:
  1. Open the application in Chrome
  2. Navigate through all pages
  3. Test key functionalities
- **Expected Result**: 
   - Application should work correctly
   - All features should function as expected
   - No console errors
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-070: Verify Application in Firefox
- **Priority**: High
- **Preconditions**: Firefox browser is installed
- **Test Steps**:
  1. Open the application in Firefox
  2. Navigate through all pages
  3. Test key functionalities
- **Expected Result**: 
   - Application should work correctly
   - All features should function as expected
   - No console errors
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-071: Verify Application in Edge
- **Priority**: Medium
- **Preconditions**: Edge browser is installed
- **Test Steps**:
  1. Open the application in Edge
  2. Navigate through all pages
  3. Test key functionalities
- **Expected Result**: 
   - Application should work correctly
   - All features should function as expected
   - No console errors
- **Actual Result**: [Pass/Fail]
- **Notes**: 

### TC-072: Verify Application in Safari
- **Priority**: Medium
- **Preconditions**: Safari browser is installed (if available)
- **Test Steps**:
  1. Open the application in Safari
  2. Navigate through all pages
  3. Test key functionalities
- **Expected Result**: 
   - Application should work correctly
   - All features should function as expected
   - No console errors
- **Actual Result**: [Pass/Fail]
- **Notes**: 

---

## Test Summary

### Test Execution Summary
- **Total Test Cases**: 72
- **Passed**: [To be filled]
- **Failed**: [To be filled]
- **Blocked**: [To be filled]
- **Not Executed**: [To be filled]
- **Pass Rate**: [To be filled]%

### Priority Distribution
- **High Priority**: [Count]
- **Medium Priority**: [Count]
- **Low Priority**: [Count]

### Issues Found
[List any bugs or issues discovered during testing]

### Recommendations
[Any recommendations for improvements or additional test cases]

---

## Notes
- This document should be updated after each test execution
- Screenshots should be attached for failed test cases
- All test results should be documented in the "Actual Result" column
- Any blockers or issues should be noted in the "Notes" section

---

**Document Version**: 1.0  
**Last Updated**: [Date]  
**Prepared By**: [Name]

