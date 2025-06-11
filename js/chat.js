

document.addEventListener('DOMContentLoaded', () => {
    const chatWidget = document.getElementById('chat-widget');
    if (!chatWidget) return; // Exit if the widget doesn't exist

    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const closeBtn = document.getElementById('chat-close');
    const sendBtn = document.getElementById('chat-send-btn');
    const messageInput = document.getElementById('chat-input-field');
    const messagesContainer = document.getElementById('chat-messages');


    chatToggle.addEventListener('click', () => chatWindow.classList.toggle('visible'));
    closeBtn.addEventListener('click', () => chatWindow.classList.remove('visible'));

    const handleSendMessage = () => {
        const messageText = messageInput.value.trim();
        if (messageText === "") return;

        // 1. Display the user's message
        addMessageToUI('user', messageText);
        messageInput.value = '';
        
        // 2. Get the bot's response based on the user's input
        getBotResponse(messageText);
    };

    // --- Listen for send events (button click or Enter key) ---
    sendBtn.addEventListener('click', handleSendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });

    
    const addMessageToUI = (sender, text) => {
    
        const typingIndicator = messagesContainer.querySelector('.typing');
        if (typingIndicator) {
            typingIndicator.remove();
        }

        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        
        const p = document.createElement('p');
        p.textContent = text;
        messageDiv.appendChild(p);
        
        messagesContainer.appendChild(messageDiv);
        // Automatically scroll to see the new message
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };


    const showTypingIndicator = () => {
        const typingDiv = document.createElement('div');
        // Use the same classes as a bot message, plus our 'typing' class
        typingDiv.classList.add('message', 'bot', 'typing');
        const p = document.createElement('p');
        p.textContent = '...'; 
        typingDiv.appendChild(p);
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };


    const getBotResponse = (userInput) => {
        const lowerCaseInput = userInput.toLowerCase();
        let botResponse = "";

        
        if (lowerCaseInput.includes("hello") || lowerCaseInput.includes("hi")) {
            botResponse = "Hello! Thanks for reaching out. How can I help you today?";
        } else if (lowerCaseInput.includes("service") || lowerCaseInput.includes("what you do")) {
            botResponse = "We offer a wide range of services in Strategy & Consulting, Technology, and Operations. You can learn more in the 'What we do' section of our website.";
        } else if (lowerCaseInput.includes("career") || lowerCaseInput.includes("job")) {
            botResponse = "That's great! You can explore all our open positions and learn about our culture on our Careers page.";
        } else if (lowerCaseInput.includes("contact") || lowerCaseInput.includes("help")) {
            botResponse = "For all official inquiries, please visit our corporate contact page. I'm just a demo bot, but I hope I've been helpful!";
        } else if (lowerCaseInput.includes("360 value")) {
            botResponse = "Our 360° Value approach helps us create value for all our stakeholders. You can see the full report further up on this page!";
        } else {
            // --- Default response if no keywords are matched ---
            botResponse = "I'm not sure how to answer that, but I'm still learning. You can try asking about our 'services' or 'careers'.";
        }

    
        showTypingIndicator();
        setTimeout(() => {
            addMessageToUI('bot', botResponse);
        }, 1300); // 1.3-second delay
    };
});
