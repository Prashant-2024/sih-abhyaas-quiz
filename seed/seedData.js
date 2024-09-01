const mongoose = require('mongoose');
const Quiz = require('../models/Quiz');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const quizData = [
    {
        question: 'What is the capital of France?',
        options: {
            option1: 'Berlin',
            option2: 'Madrid',
            option3: 'Paris',
            option4: 'Lisbon',
        },
        answer: 'option3',
        class: 'Grade 4',
        topic: 'Geography',
        level: 1, // easy
    },
    {
        question: 'What is the largest planet in our solar system?',
        options: {
            option1: 'Earth',
            option2: 'Mars',
            option3: 'Jupiter',
            option4: 'Saturn',
        },
        answer: 'option3',
        class: 'Grade 5',
        topic: 'Science',
        level: 2, // medium
    },
    {
        question: 'Solve: 2 + 2 * 2',
        options: {
            option1: '4',
            option2: '6',
            option3: '8',
            option4: '10',
        },
        answer: 'option2',
        class: 'Grade 6',
        topic: 'Mathematics',
        level: 3, // hard
    },
];

async function seedDatabase() {
    try {
        await Quiz.deleteMany();
        await Quiz.insertMany(quizData);
        console.log('Data successfully inserted');
        mongoose.connection.close();
    } catch (err) {
        console.error('Error inserting data:', err);
    }
}

seedDatabase();
