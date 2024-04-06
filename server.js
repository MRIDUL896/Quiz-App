//including external modules
const express = require('express');
const path = require('path');
const app = express();
const questions = require('./questions.json');
const dotenv = require('dotenv');

dotenv.config();

//setting up static file server using the express app
app.use(express.static(path.join(__dirname, 'public')));

//route for questions
app.get('/api/questions', (req, res) => {
    res.json(questions);
});

//route for when the user submits response
app.post('/api/submit', express.json(), (req, res) => {
    const answers = req.body.answers;
    let score = 0;
    let correctAnswers = [];

    answers.forEach((answer, index) => {
        if (answer === questions[index].answer) {
            score++;
        }
        correctAnswers.push(questions[index].answer);
    });

    res.json({ score: score, correctAnswers: correctAnswers });
});

//route for the /quiz path to serve the quiz.html file
app.get('/quiz', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'quiz.html'));
});

//starting up server
const port = process.env.PORT;
app.listen(port, () => {
    console.log('Server is running on port ',port);
});
