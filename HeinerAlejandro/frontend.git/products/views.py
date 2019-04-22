from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import ProductModel
from .serializers import ProductModelSerializer
# Create your views here.

class ProductsViewSet(ModelViewSet):

    serializer_class = ProductModelSerializer
    queryset = ProductModel.objects.all()