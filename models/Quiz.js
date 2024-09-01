const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: {
        option1: { type: String, required: true },
        option2: { type: String, required: true },
        option3: { type: String, required: true },
        option4: { type: String, required: true },
    },
    answer: { type: String, required: true }, // The correct answer (e.g., 'option1')
    class: { type: String, required: true },  // Class or grade level
    topic: { type: String, required: true },   // Topic of the question
    level: { type: Number, required: true },   // Difficulty level: 1 (easy), 2 (medium), 3 (hard)
});

module.exports = mongoose.model('Quiz', QuizSchema);
