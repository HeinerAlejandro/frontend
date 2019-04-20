from django.urls import path
from django.urls import include

urlpatterns = [
    path('', include('rest_auth.urls')),
    path('registration', include('rest_auth.registration.urls'))
]