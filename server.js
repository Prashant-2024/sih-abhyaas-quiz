// const express = require('express');
// const connectDB = require('./config/db');
// const userRoutes = require('./routes/user');
// const quizRoutes = require('./routes/quiz');
// const path = require('path');

// const app = express();
// connectDB();

// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));

// // Define a root route
// app.get('/', (req, res) => {
//     res.redirect('/login.html'); // Redirect to login page by default
// });

// app.use('/api/user', userRoutes);
// app.use('/api/quiz', quizRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user');
const quizRoutes = require('./routes/quiz');
const path = require('path');

const app = express();
connectDB();

app.use(express.json());
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a root route
app.get('/', (req, res) => {
    res.redirect('/login.html'); // Redirect to login page by default
});

app.use('/api/user', userRoutes);
app.use('/api/quiz', quizRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
