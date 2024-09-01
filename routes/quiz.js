const express = require('express');
const router = express.Router();
const { getQuiz, submitQuiz } = require('../controllers/quizController');

router.get('/:userId', getQuiz);
router.post('/submit', submitQuiz);

module.exports = router;
