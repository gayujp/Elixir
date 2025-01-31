// Function to handle user input and responses
function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    if (userInput.trim() !== "") {
        // Add user message to the chatbox
        let userMessage = document.createElement("div");
        userMessage.className = "message user-message";
        userMessage.innerHTML = userInput;
        chatbox.appendChild(userMessage);
        chatbox.scrollTop = chatbox.scrollHeight;

        // Generate bot response after a short delay
        setTimeout(() => {
            generateResponse(userInput);
        }, 1000);

        // Clear the input field
        document.getElementById("userInput").value = "";
    }
}

// Function to generate chatbot responses
function generateResponse(input) {
    let response = "";
    
    // Basic chatbot logic for waste management questions
    if (input.toLowerCase().includes("recycle")) {
        response = "Recycling involves converting waste into reusable materials. You can recycle paper, glass, plastic, and metal!";
    } else if (input.toLowerCase().includes("compost")) {
        response = "Composting is the process of turning organic waste into nutrient-rich soil. You can compost food scraps, yard waste, and more!";
    } else if (input.toLowerCase().includes("waste management")) {
        response = "Waste management refers to the collection, transport, treatment, and disposal of waste, as well as recycling and composting activities.";
    } else if (input.toLowerCase().includes("plastic")) {
        response = "Plastic waste should be sorted carefully. Only certain plastics, like bottles and containers, are recyclable.";
    } else if (input.toLowerCase().includes("hazardous")) {
        response = "Hazardous waste includes items like batteries, paints, and electronics. These should be disposed of at designated facilities.";
    } else {
        response = "Sorry, I didn't understand that. Can you ask something else about waste management?";
    }

    // Add bot message to the chatbox
    let botMessage = document.createElement("div");
    botMessage.className = "message bot-message";
    botMessage.innerHTML = response;
    document.getElementById("chatbox").appendChild(botMessage);
    document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
}