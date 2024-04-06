//defining get controller for /api/questions for displaying questions
fetch('/api/questions')
    .then(response => response.json())
    .then(questions => {
        const questionsDiv = document.getElementById('questions');
        questions.forEach((question, index) => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h3>${question.question}</h3>
                <ul>
                    ${question.options.map(option => `<li><input type="radio" name="answer${index}" value="${option}">${option}</li>`).join('')}
                </ul>
            `;
            questionsDiv.appendChild(div);
        });
    })
    .catch((err) => {
        res.json({"error detected" : err })
    });

//controller for fetching response of user and giving it to server
document.getElementById('quizForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const answers = [];
    const formData = new FormData(event.target);
    for (let pair of formData.entries()) {
        answers.push(pair[1]);
    }

    fetch('/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ answers: answers })
    })
        .then(response => response.json())
        .then(data => {
            alert(`Your score is: ${data.score}`);
        })
        .catch((err) => {
            res.json({"error detected" : err })
        });
});
