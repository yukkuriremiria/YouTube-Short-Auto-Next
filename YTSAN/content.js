// content.js

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.toggleAutoNext) {
      // Toggle auto next feature
      toggleAutoNext();
    }
  });
  
  // Function to toggle auto next feature
  function toggleAutoNext() {
    // Implement logic to interact with the YouTube Short page
    // For example, you might want to find the video player element and control playback
    const videoPlayer = document.querySelector('your-video-player-selector');
  
    if (videoPlayer) {
      // Add event listener for video end
      videoPlayer.addEventListener('ended', function() {
        // Implement logic to navigate to the next video
        navigateToNextVideo();
      });
    }
  }
  
  // Function to navigate to the next video
  function navigateToNextVideo() {
    // Implement logic to navigate to the next video on the YouTube Short page
    // For example, simulate a click on the next video button
    const nextButton = document.querySelector('your-next-button-selector');
  
    if (nextButton) {
      nextButton.click();
    }
  }
  