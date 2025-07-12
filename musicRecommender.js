const musicMap = {
  happy: "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
  sad: "https://www.youtube.com/watch?v=RB-RcX5DS5A",
  angry: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
  relaxed: "https://www.youtube.com/watch?v=VPRjCeoBqrI"
};

function getRecommendedMusic(emotion) {
  return musicMap[emotion] || musicMap["relaxed"];
}
