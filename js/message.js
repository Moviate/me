// Check for the presence of the cookie when the page loads
window.addEventListener('load', function() {
    var cookieValue = "; " + document.cookie;
    var parts = cookieValue.split("; message-dismissed=");
    if (parts.length == 2 && parts.pop().split(";").shift() === 'true') {
      // Hide the message if the cookie is present
      var message = document.querySelector('.message');
      if (message) {
        message.style.display = 'none';
      }
    }
  });
  
  // Get the close button element
  var closeButton = document.querySelector('.closem');
  
  // Add a click event listener to the close button
  closeButton.addEventListener('click', function() {
    // Set a persistent cookie that expires in 365 days
    document.cookie = "message-dismissed=true; expires=" + new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000).toUTCString();
  
    // Hide the message
    var message = document.querySelector('.message');
    if (message) {
      message.style.display = 'none';
    }
  });
  