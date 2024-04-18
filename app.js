const express = require('express');
const app = express();
const router = require('./router');

app.use(express.static('public')); // Serve static files from the public directory
app.use('/', router); // Use the router for handling routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});
