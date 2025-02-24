const quizQuestions = [
    {
        question: "What is Generative AI?",
        options: ["A type of AI that creates new content", "A search engine", "A type of robot"],
        answer: "A type of AI that creates new content"
    },
    {
        question: "Which of the following is a risk of Generative AI?",
        options: ["Data Privacy Concerns", "Making New Friends", "Traffic Jams"],
        answer: "Data Privacy Concerns"
    },
    {
        question: "Which tool is used for text generation?",
        options: ["ChatGPT", "Photoshop", "Excel"],
        answer: "ChatGPT"
    }
];

const quizContainer = document.getElementById("quiz-questions");
const submitButton = document.getElementById("submit-quiz");
const resultContainer = document.getElementById("quiz-result");

// Display quiz questions
quizQuestions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.innerHTML = `<h3>Question ${index + 1}: ${q.question}</h3>`;
    q.options.forEach(option => {
        questionDiv.innerHTML += `<label><input type="radio" name="q${index}" value="${option}"> ${option}</label><br>`;
    });
    quizContainer.appendChild(questionDiv);
});

// Check answers
submitButton.addEventListener("click", () => {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
    resultContainer.textContent = `You scored ${score} out of ${quizQuestions.length}!`;
});