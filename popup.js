document.getElementById('analyzeBtn').addEventListener('click', async () => {
  const imageInput = document.getElementById('imageInput').files[0];
  const audioInput = document.getElementById('audioInput').files[0];
  const result = document.getElementById('result');

  if (!imageInput || !audioInput) {
    result.innerHTML = "⚠️ Please upload both face and voice files.";
    return;
  }

  result.innerHTML = "🧠 Analyzing your vibe...";

  const faceMood = await detectFaceEmotion(imageInput);
  const voiceMood = await detectVoiceEmotion(audioInput);

  const finalMood = faceMood === voiceMood ? faceMood : voiceMood;
  const songURL = getRecommendedMusic(finalMood);

  const moodEmojis = {
    happy: "😊",
    sad: "😢",
    angry: "😠",
    relaxed: "😌"
  };

  result.innerHTML = `
    <h3>${moodEmojis[finalMood] || "🎵"} You're feeling ${finalMood.toUpperCase()}</h3>
    <p>Here’s a song for you 👇</p>
    <iframe width="100%" height="160" 
      src="${songURL.replace("watch?v=", "embed/")}" 
      allowfullscreen></iframe>
  `;
});
