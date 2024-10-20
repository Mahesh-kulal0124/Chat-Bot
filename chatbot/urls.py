# chatbot/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.chat, name='chat'),  # This handles the chat view at /chat/
]
