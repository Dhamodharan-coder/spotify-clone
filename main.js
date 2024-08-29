// Get the message box element
const messageBox = document.getElementById('messageBox');

// Add event listener for mouseenter and mouseleave
document.querySelector('a').addEventListener('mouseenter', () => {
  // Show the message box when the cursor enters the element
  messageBox.style.display = 'block';
  

});

document.querySelector('a').addEventListener('mouseleave', () => {
  // Hide the message box when the cursor leaves the element
  messageBox.style.display = 'none';
});
