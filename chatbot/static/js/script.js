// const chatInput = document.querySelector(".chat-input textarea");
// const sendChatBtn = document.querySelector(".chat-input span");
// const chatbox = document.querySelector(".chatbox");
// let userMessage;

// const createChatLi = (message, className) => {
//     const chatLi = document.createElement("li");
//     chatLi.classList.add("chat", className);
//     let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
//     chatLi.innerHTML = chatContent;
//     return chatLi;
// };

// const handleChat = () => {
//     userMessage = chatInput.value.trim();
//     if (!userMessage) return;

//     chatbox.appendChild(createChatLi(userMessage, "outgoing"));
//     chatInput.value = "";  // Clear input field

//     setTimeout(() => {
        
        
//         chatbox.appendChild(createChatLi("Thinking...", "incoming"));
//         chatbox.scrollTop = chatbox.scrollHeight;  // Auto-scroll to the bottom
//         // Send POST request to the backend
//         fetch("/chat/", {
//             method: "POST",
//             headers: {
//                 "X-CSRFToken": document.querySelector('[name=csrfmiddlewaretoken]').value,
//                 "Content-Type": "application/x-www-form-urlencoded"
//             },
//             body: new URLSearchParams({ 'user_input': userMessage })
//         })
//         .then(response => response.json())
//         .then(data => {
//             chatbox.querySelector(".incoming").remove();  // Remove "Thinking..." message
//             chatbox.appendChild(createChatLi(data.response, "incoming"));  // Append bot response
//             chatbox.scrollTop = chatbox.scrollHeight;  // Auto-scroll to the bottom
//         });
//     }, 600);  // Simulate short delay
// };

// sendChatBtn.addEventListener("click", handleChat);


const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
let userMessage;

// Function to create chat list item
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" 
        ? `<p>${message}</p>` 
        : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
};

// Handle sending a message
const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatInput.value = "";  // Clear input field

    // Simulate bot response
    setTimeout(() => {
        chatbox.appendChild(createChatLi("Thinking...", "incoming"));
        chatbox.scrollTop = chatbox.scrollHeight;  // Auto-scroll to the bottom

        // Generate a response locally
        const response = generateResponse(userMessage);
        chatbox.querySelector(".incoming").remove();  // Remove "Thinking..." message
        chatbox.appendChild(createChatLi(response, "incoming"));  // Append bot response
        chatbox.scrollTop = chatbox.scrollHeight;  // Auto-scroll to the bottom
    }, 600);  // Simulate short delay
};

// Function to generate response based on user input
const generateResponse = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput.includes("weather")) {
        return "The weather is sunny today!";
    } else if (["faq", "question", "help", "common"].some(keyword => userInput.includes(keyword))) {
        return "Common FAQs: 1) How to use the product? 2) How to reset the password.";
    } else {
        return "I'm here to chat! What would you like to talk about?";
    }
};

sendChatBtn.addEventListener("click", handleChat);
