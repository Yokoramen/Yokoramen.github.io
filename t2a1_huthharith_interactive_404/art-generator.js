const placeholderImages = [
    "images/art1.jpg",
    "images/art2.jpg",
    "images/art3.jpg"
];

document.getElementById("generate-art").addEventListener("click", () => {
    const prompt = document.getElementById("art-prompt").value.trim();
    if (prompt) {
        const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
        document.getElementById("art-output").innerHTML = `<img src="${randomImage}" alt="Generated Art"><p>Here's your AI-generated art for: "${prompt}"</p>`;
    } else {
        alert("Please enter a prompt!");
    }
});