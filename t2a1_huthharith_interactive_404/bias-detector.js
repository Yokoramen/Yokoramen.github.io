document.querySelectorAll(".bias-btn").forEach(button => {
    button.addEventListener("click", () => {
        const analysis = button.nextElementSibling;
        analysis.style.display = analysis.style.display === "block" ? "none" : "block";
    });
});