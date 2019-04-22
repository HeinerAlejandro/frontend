from django.contrib import admin

from .models import ProductModel
from .models import Product

# Register your models here.

admin.site.register(ProductModel)
admin.site.register(Product)