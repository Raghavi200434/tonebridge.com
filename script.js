// JS functionality (if any) will go here
console.log("Welcome to ToneBridge ✨");
function updateEmotionDisplay(emotion) {
    const emotionText = document.getElementById("emotion");
    const emotionImg = document.getElementById("emotion-img");
  
    emotionText.textContent = emotion;
  
    // Set image based on emotion
    const emotionImages = {
      Happy: "emojis/happy.png",
      Sad: "emojis/sad.png",
      Angry: "emojis/angry.png",
      Surprised: "emojis/surprised.png",
      Neutral: "emojis/neutral.png"
    };
  
    const imagePath = emotionImages[emotion] || emotionImages["Neutral"];
    emotionImg.src = imagePath;
  }
  