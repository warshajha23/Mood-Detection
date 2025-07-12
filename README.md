# Mood-Detection

# Mood Music Recommender 🎵

![Extension Logo](icon.png)

A Chrome extension that recommends music based on your current mood, detected through facial expressions and voice analysis.

## Features ✨

- **Mood Detection**: Analyzes both facial expressions and voice tone
- **Personalized Recommendations**: Suggests songs matching your detected mood
- **Beautiful UI**: Modern glass-morphism design with smooth animations
- **Easy to Use**: Simple two-step process (upload face + voice)
- **YouTube Integration**: Plays recommended songs directly in the extension

## How It Works 🧠

1. Upload a photo of your face
2. Upload a short voice recording
3. The extension analyzes both inputs
4. Recommends a perfect song based on your mood
5. Plays the song directly in the popup

## Supported Moods 🎭

- 😊 Happy
- 😢 Sad
- 😠 Angry
- 😌 Relaxed

## Installation ⚙️

1. Clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked" and select this directory

## Technologies Used 💻

- Chrome Extensions API
- Vanilla JavaScript
- CSS Glass Morphism
- YouTube Embed API
- Google Fonts (Outfit)

## File Structure 📁

```
mood-music-recommender/
├── background.js         # Handles notifications
├── emotionDetector.js    # Mood detection logic
├── icon.png              # Extension icon
├── manifest.json         # Extension configuration
├── musicRecommender.js   # Music recommendation logic
├── popup.html            # Main interface
├── popup.js              # Popup interaction logic
└── style.css             # Stylish UI components
```

## Future Improvements 🚀

- Real-time camera/microphone access
- Machine learning for more accurate mood detection
- Spotify integration
- Mood history tracking
- Personalized playlists

## License 📜

This project is open source and available under the MIT License.

---

**Find your perfect mood match with Mood Music Recommender!** 🎶
