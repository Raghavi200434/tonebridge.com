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
  

  const signVideos = {
    "Hello": "videos/Hello.mp4",
    "thank you": "videos/thank you.mp4",
    "nice to meet you": "videos/nice to meet you.mp4",
    "good_morning": "videos/good morning.mp4",
    "see you later": "videos/see you later.mp4",
    "happy": "videos/happy.mp4",
    "how are you": "videos/how are you.mp4"
    
    
  };

  function playSignSequence(text) {
    const words = text.toLowerCase().split("-");
    const videoElement = document.getElementById("signVideo");
  
    let index = 0;
  
    function playNext() {
      if (index < words.length) {
        const word = words[index];
        const src = signVideos[word] || `videos/${word}.mp4`; // fallback
  
        videoElement.src = src;
        videoElement.play();
  
        index++;
      }
    }
  
    videoElement.onended = playNext; // when one ends, play the next
    playNext(); // start first one
  }
  
  