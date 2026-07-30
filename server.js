const express = require('express');
const path = require('path');

const app = express();

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));


// Export the app for Vercel serverless
module.exports = app;

// Allow local development with `node server.js`
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}