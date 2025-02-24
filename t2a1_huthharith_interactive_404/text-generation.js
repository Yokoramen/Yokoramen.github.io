document.getElementById("generate-text").addEventListener("click", () => {
    const prompt = document.getElementById("text-prompt").value.trim();
    if (prompt) {
        const output = `Here’s your generated text for: "${prompt}"\n\n"Beneath the sky's eternal hue,
The ocean stretches, vast and blue.
Its waves, like whispers, rise and fall,
A timeless song, a siren's call.

The sun dips low, a golden flame,
Reflecting on the shifting frame.
The tides, they dance with moonlit grace,
A fleeting kiss, a soft embrace.

In depths where light dares not to tread,
Secrets lie, where dreams are fed.
Coral gardens, vibrant, bright,
Hide the wonders of the night.

Oh, ocean, wild and ever free,
You hold the heart of history.
A mirror to the soul's expanse,
You teach the world to dream and dance."`;
        document.getElementById("text-output").textContent = output;
    } else {
        alert("Please enter a prompt!");
    }
});