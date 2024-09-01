const Quiz = require('../models/Quiz');
const User = require('../models/User');

exports.getQuiz = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ msg: 'User not found' });

        // Fetch quizzes based on user's current level
        const quizzes = await Quiz.find({ level: user.currentLevel }).limit(5); // Limit to 5 questions
        res.json(quizzes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.submitQuiz = async (req, res) => {
    try {
        const { userId, answers } = req.body;
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ msg: 'User not found' });

        let correctAnswers = 0;

        // Check the submitted answers
        for (const answer of answers) {
            const quiz = await Quiz.findById(answer.quizId);
            if (quiz && quiz.answer === answer.selectedOption) {
                correctAnswers++;
            }
        }

        // Update user performance
        const performanceChange = correctAnswers - (answers.length - correctAnswers);
        user.performance += performanceChange;

        // Adjust the difficulty level
        if (user.performance > 5 && user.currentLevel < 3) {
            user.currentLevel++;
            user.performance = 0; // Reset performance after level up
        } else if (user.performance < -5 && user.currentLevel > 1) {
            user.currentLevel--;
            user.performance = 0; // Reset performance after level down
        }

        await user.save();

        res.json({ msg: 'Quiz submitted successfully', newLevel: user.currentLevel });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
