document.getElementById("generate-image").addEventListener("click", () => {
    const prompt = document.getElementById("image-prompt").value.trim();
    if (prompt) {
        const imageUrl = "https://cdn.leonardo.ai/users/5f4bfb77-72aa-40f9-9345-96f6e964955a/generations/b38fb4ed-38e5-45ed-b0a8-9799dbf756db/Leonardo_Phoenix_09_a_whimsical_anthropomorphic_cat_with_brigh_2.jpg"; // Placeholder image
        document.getElementById("image-output").innerHTML = `<img src="${imageUrl}" alt="Generated Image">`;
    } else {
        alert("Please enter a prompt!");
    }
});
