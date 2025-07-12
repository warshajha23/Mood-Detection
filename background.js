chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "MUSIC_RECOMMENDED") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "Music Recommendation 🎧",
      message: `Try this ${message.mood} song!`,
      priority: 1
    });
  }
});

