const quizQuestions = [
    {
        question: "What is Generative AI?",
        options: ["A search engine", "A type of robot","A type of AI that creates new content"],
        answer: "A type of AI that creates new content"
    },
    {
        question: "Which tool is used for text generation?",
        options: ["ChatGPT", "Photoshop", "Youtube"],
        answer: "ChatGPT"
    },
    {
        question: "What is a common risk of using Generative AI?",
        options: ["Making New Friends","Data Privacy Concerns", "Traffic Jams"],
        answer: "Data Privacy Concerns"
    },
    {
        question: "What is a deepfake?",
        options: ["AI-generated videos or audio recordings", "A type of cake", "A new social media platform"],
        answer: "AI-generated videos or audio recordings"
    },
    {
        question: "Which of the following is an example of Generative AI?",
        options: ["Google Search", "Microsoft Excel","DALL-E"],
        answer: "DALL-E"
    },
    {
        question: "What is one way to verify if a video is a deepfake?",
        options: ["Check for inconsistencies in the video", "Ask the person in the video", "Ignore it"],
        answer: "Check for inconsistencies in the video"
    },
    {
        question: "What is a key benefit of Generative AI?",
        options: ["Making Coffee", "Increased productivity", "Driving cars"],
        answer: "Increased productivity"
    },
    {
        question: "What is one ethical concern about Generative AI?",
        options: ["Bias in AI models", "AI making friends", "AI cooking food"],
        answer: "Bias in AI models"
    },
    {
        question: "Which of the following is NOT a Generative AI tool?",
        options: ["ChatGPT", "DALL-E", "Photoshop"],
        answer: "Photoshop"
    },
    {
        question: "What is one way to protect yourself from AI risks?",
        options: ["Ignore all AI tools", "Share personal data freely","Verify information from multiple sources"],
        answer: "Verify information from multiple sources"
    }
];

let currentQuestionIndex = 0;
let playerHealth = 100;
let aiHealth = 100;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const attackButton = document.getElementById("attack-btn");
const resultElement = document.getElementById("result");
const playerHealthBar = document.getElementById("player-health");
const aiHealthBar = document.getElementById("ai-health");

// Load the first question
loadQuestion();

// Load a question
function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
        optionsElement.appendChild(label);
    });
}

const playerSprite = document.getElementById("player-sprite");
const aiSprite = document.getElementById("ai-sprite");

attackButton.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        if (selectedOption.value === quizQuestions[currentQuestionIndex].answer) {
            // Player attacks AI
            playerSprite.classList.add("player-attack");
            aiSprite.classList.add("take-damage");
            setTimeout(() => {
                playerSprite.classList.remove("player-attack");
                aiSprite.classList.remove("take-damage");
            }, 500);

            aiHealth -= 10;
            resultElement.textContent = "Correct! You dealt 10 damage to the AI.";
        } else {
            // AI attacks player
            aiSprite.classList.add("ai-attack");
            playerSprite.classList.add("take-damage");
            setTimeout(() => {
                aiSprite.classList.remove("ai-attack");
                playerSprite.classList.remove("take-damage");
            }, 500);

            playerHealth -= 10;
            resultElement.textContent = "Incorrect! The AI dealt 10 damage to you.";
        }

        // Update health bars
        playerHealthBar.style.width = `${playerHealth}%`;
        aiHealthBar.style.width = `${aiHealth}%`;

        // Check for game over
        if (playerHealth <= 0 || aiHealth <= 0) {
            endGame();
        } else {
            // Move to the next question
            currentQuestionIndex++;
            if (currentQuestionIndex < quizQuestions.length) {
                loadQuestion();
            } else {
                endGame();
            }
        }
    } else {
        alert("Please select an answer!");
    }
});

const playerAttackSound = document.getElementById('player-attack-sound');
const aiAttackSound = document.getElementById('ai-attack-sound');

// Function to handle player attack
function playerAttack() {
    // Play the player attack sound
    playerAttackSound.play();
    console.log("Player attacks!");
}

// Function to handle AI attack
function aiAttack() {
    // Play the AI attack sound
    aiAttackSound.play();
    console.log("AI attacks!");
}

// Example: Add event listener to the attack button
document.getElementById('attack-btn').addEventListener('click', function () {
    // Trigger player attack
    playerAttack();

});

// End the game and display the result
function endGame() {
    if (playerHealth <= 0) {
        resultElement.textContent = "Game Over! The AI defeated you.";
    } else if (aiHealth <= 0) {
        resultElement.textContent = "Congratulations! You defeated the AI.";
    } else {
        resultElement.textContent = "Game Over! You ran out of questions.";
    }

    attackButton.style.display = "none";
}

resultElement.classList.add("pop-animation");
setTimeout(() => {
    resultElement.classList.remove("pop-animation");
}, 500);