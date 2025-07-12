function detectFaceEmotion(imageFile) {
  return new Promise(resolve => {
    setTimeout(() => {
      const moods = ["happy", "sad", "angry", "relaxed"];
      resolve(moods[Math.floor(Math.random() * moods.length)]);
    }, 800);
  });
}

function detectVoiceEmotion(audioFile) {
  return new Promise(resolve => {
    setTimeout(() => {
      const moods = ["happy", "sad", "angry", "relaxed"];
      resolve(moods[Math.floor(Math.random() * moods.length)]);
    }, 800);
  });
}
