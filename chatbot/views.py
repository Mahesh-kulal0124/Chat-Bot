
from django.shortcuts import render
from .nlp import generate_response

def chat(request):
    response_text = ""
    if request.method == "POST":
        user_input = request.POST.get('user_input')
        if user_input:
            response_text = generate_response(user_input)  # Generate response based on input

    return render(request, 'chatbot/chat.html', {'response': response_text})  # Render the chat page
