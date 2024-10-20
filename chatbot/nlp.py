# Function to classify the intent based on user input
def classify_intent(user_input):
    user_input = user_input.lower()
    if "weather" in user_input:
        return "weather"
    elif any(keyword in user_input for keyword in ["faq", "question", "help", "common"]):
        return "faq"
    else:
        return "chit_chat"

# Function to generate a response based on intent
def generate_response(user_input):
    intent = classify_intent(user_input)
    
    if intent == "weather":
        return "The weather is sunny today!"
    elif intent == "faq":
        return "Common FAQs: 1) How to use the product? 2) How to reset the password."
    else:
        return "I'm here to chat! What would you like to talk about?"
