from django.urls import path
from django.urls import include
from .views import ResponseBotView

urlpatterns = [
    path('chatbot', ResponseBotView.as_view()),
]
