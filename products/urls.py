from django.urls import path
from django.urls import include
from .views import ProductsViewSet
from rest_framework import routers

router = routers.SimpleRouter()

router.register(r'products', ProductsViewSet)

urlpatterns = [
    path('', include(router.urls))
]
