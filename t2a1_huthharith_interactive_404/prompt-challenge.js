document.getElementById("submit-prompt").addEventListener("click", () => {
    const prompt = document.getElementById("user-prompt").value.trim();
    if (prompt) {
        let score = 0;
        if (prompt.includes("healthy")) score += 1;
        if (prompt.includes("5-year-old")) score += 1;
        if (prompt.includes("meal plan")) score += 1;

        if (score === 3) {
            document.getElementById("prompt-feedback").textContent = "Great job! Your prompt is clear and specific.";
        } else {
            document.getElementById("prompt-feedback").textContent = "Good effort! Try to make your prompt more specific.";
        }
    } else {
        alert("Please enter a prompt!");
    }
});