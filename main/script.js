// script.js
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.querySelector('.chat-messages');

// Event listener for sending messages
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        // Implement logic to send the message to the server or display it locally
        displayMessage(message);
        messageInput.value = '';
    }
});

// Function to display a new message
function displayMessage(message) {
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.textContent = message;
    chatMessages.appendChild(newMessage);
    // Scroll to the bottom of the chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
