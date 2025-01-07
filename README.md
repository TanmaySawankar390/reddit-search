# Reddit Search Application

## Overview
A real-time Reddit search application that allows users to browse specific subreddits and filter posts by keywords.

## Tech Stack
```
- Node.js & Express.js (Backend)
- EJS (Template Engine)
- Reddit API (Data Source)
- HTML, CSS, JavaScript (Frontend)
```

## Features
```
✓ Real-time subreddit search
✓ Keyword filtering
✓ Responsive UI
✓ Direct post links
✓ Author attribution
```

## Prerequisites
```bash
# Required software
node >= v14.0.0
npm >= v6.0.0

# Required API credentials
REDDIT_CLIENT_ID
REDDIT_CLIENT_SECRET
REDDIT_USER_AGENT
```

## Installation
```bash
# Clone repository
git clone https://github.com/TanmaySawankar390/reddit-search.git

# Navigate to project
cd reddit-search

# Install dependencies
npm install

# Create environment file
touch .env
```

## Environment Setup
```env
# .env file configuration
CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
USER_AGENT=your_app_name/1.0.0
PORT=3000
```

## Dependencies
```json
{
  "dependencies": {
    "express": "^4.17.1",
    "ejs": "^3.1.6",
    "dotenv": "^10.0.0",
    "node-fetch": "^2.6.1",
    "snoowrap": "^1.23.0"
  }
}
```

## API Routes
```javascript
// Search endpoint
GET /search
POST /search

// Parameters
{
  subreddit: string,
  keyword: string
}
```

## Usage
```bash
# Development
npm install

# Production
nodemon src/app.js

# Access application
http://localhost:3000
```

## Error Codes
```
400 - Bad Request (Invalid subreddit/keyword)
429 - Too Many Requests (Rate limit)
500 - Server Error (API/Internal error)
```

## Contributing
```bash
# Create branch
git checkout -b feature/YourFeature

# Commit changes
git commit -m "Add: your feature"

# Push changes
git push origin feature/YourFeature
```

## License
```
MIT License
Copyright (c) 2025
```

## Contact
```
Issues: github.com/TanmaySawankar390/reddit-search/issues
Email: tanmaysawankar4441@gmail.com
```
