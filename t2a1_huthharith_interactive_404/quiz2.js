const quizQuestions = [
    {
        question: "What is a common risk of using Generative AI?",
        options: ["Data Privacy Concerns", "Making new friends", " Failing your assignments due to plagiarism"],
        answer: "Data Privacy Concerns"
    },
    {
        question: "What are deepfakes?",
        options: ["AI-generated videos or audio recordings", "A type of cake", "A new social media platform"],
        answer: "AI-generated videos or audio recordings"
    },
    {
        question: "How can you ensure AI doesn't replace your job?",
        options: ["Work Hard, Play Hard", "Focus on developing your skills", "Retire early"],
        answer: "Focus on developing your skills"
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