// This script handles any additional functionality for the popup
document.addEventListener('DOMContentLoaded', function() {
  // You can add event listeners or other functionality here if needed
  
  // For example, you might want to handle messages from the iframe
  window.addEventListener('message', function(event) {
    // Only accept messages from the Freelance Assist domain
    if (event.origin !== 'https://freelanceassists.netlify.app') return;
    
    // Process the message
    console.log('Message received from website:', event.data);
  });
});