# API Contracts - Ajeflex Digitals Website

## Backend API Structure

### Base URL: `/api`

## 1. Contact Form Submission
**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, email format)",
  "company": "string (optional)",
  "budget": "string (optional)",
  "service": "string (required)",
  "message": "string (required)",
  "file": "file (optional, base64 encoded)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully",
  "id": "contact_id"
}
```

## 2. Newsletter Subscription
**Endpoint:** `POST /api/newsletter`

**Request Body:**
```json
{
  "email": "string (required, email format)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter"
}
```

## 3. Portfolio Items
**Endpoint:** `GET /api/portfolio`

**Query Parameters:**
- `category`: string (optional) - Filter by category (Web, Branding, Social)
- `limit`: number (optional) - Limit number of results

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "number",
      "title": "string",
      "category": "string",
      "image": "string (base64 or URL)",
      "description": "string",
      "client": "string",
      "year": "string",
      "technologies": ["string"],
      "results": ["string"]
    }
  ]
}
```

## 4. Service Information
**Endpoint:** `GET /api/services`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "number",
      "title": "string",
      "description": "string",
      "icon": "string",
      "features": ["string"],
      "pricing": {
        "starter": { "price": "string", "features": ["string"] },
        "professional": { "price": "string", "features": ["string"] },
        "enterprise": { "price": "string", "features": ["string"] }
      }
    }
  ]
}
```

## 5. Testimonials
**Endpoint:** `GET /api/testimonials`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "number",
      "name": "string",
      "role": "string",
      "company": "string",
      "quote": "string",
      "avatar": "string (base64)",
      "rating": "number"
    }
  ]
}
```

## 6. Company Information
**Endpoint:** `GET /api/company`

**Response:**
```json
{
  "success": true,
  "data": {
    "name": "string",
    "tagline": "string",
    "subtitle": "string",
    "phone": "string",
    "email": "string",
    "address": "string",
    "social": {
      "instagram": "string",
      "facebook": "string",
      "twitter": "string",
      "linkedin": "string"
    }
  }
}
```

## Database Models

### 1. Contact Messages
```json
{
  "_id": "ObjectId",
  "name": "string",
  "email": "string",
  "company": "string",
  "budget": "string",
  "service": "string",
  "message": "string",
  "file": "string (base64)",
  "status": "string (new, read, replied)",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### 2. Newsletter Subscribers
```json
{
  "_id": "ObjectId",
  "email": "string (unique)",
  "status": "string (active, unsubscribed)",
  "subscribedAt": "Date",
  "updatedAt": "Date"
}
```

### 3. Portfolio Items
```json
{
  "_id": "ObjectId",
  "title": "string",
  "category": "string (Web, Branding, Social)",
  "image": "string (base64)",
  "description": "string",
  "client": "string",
  "year": "string",
  "technologies": ["string"],
  "results": ["string"],
  "featured": "boolean",
  "order": "number",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### 4. Services
```json
{
  "_id": "ObjectId",
  "title": "string",
  "description": "string",
  "icon": "string",
  "features": ["string"],
  "pricing": {
    "starter": { "price": "string", "features": ["string"] },
    "professional": { "price": "string", "features": ["string"] },
    "enterprise": { "price": "string", "features": ["string"] }
  },
  "order": "number",
  "active": "boolean",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### 5. Testimonials
```json
{
  "_id": "ObjectId",
  "name": "string",
  "role": "string",
  "company": "string",
  "quote": "string",
  "avatar": "string (base64)",
  "rating": "number (1-5)",
  "featured": "boolean",
  "order": "number",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## Frontend Integration Changes

### 1. Replace Mock Data Usage
- Remove `import { mockData } from '../mock';` from all components
- Replace with API calls using axios or fetch

### 2. API Service Functions
Create `/src/services/api.js` with functions:
- `submitContactForm(formData)`
- `subscribeNewsletter(email)`
- `getPortfolio(filters)`
- `getServices()`
- `getTestimonials()`
- `getCompanyInfo()`

### 3. State Management
- Add loading states for API calls
- Add error handling for failed requests
- Implement proper loading indicators

### 4. Image Handling
- All images should be stored as base64 in database
- Display base64 images directly in `<img>` tags
- Handle file uploads by converting to base64

## Error Handling

### Standard Error Response
```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

### Common Error Codes
- `VALIDATION_ERROR`: Invalid input data
- `NOT_FOUND`: Resource not found
- `SERVER_ERROR`: Internal server error
- `RATE_LIMIT`: Too many requests

## Implementation Priority

1. **High Priority:**
   - Contact form submission
   - Portfolio display
   - Company information

2. **Medium Priority:**
   - Newsletter subscription
   - Testimonials display
   - Services information

3. **Low Priority:**
   - Advanced filtering
   - Search functionality
   - Admin dashboard (future)

## Notes

- All file uploads should be converted to base64 format for storage
- Implement proper validation on both frontend and backend
- Add rate limiting for contact form submissions
- Include proper CORS configuration
- Add request/response logging for debugging
- Implement proper error boundaries in React components