from django.db import models

# Create your models here.

categories = (
    ('alimento', 'Alimento'),
    ('objeto', 'Objeto'),
    ('bebida', 'Bebida'),
    ('golosina', 'Golosina')
)

def upload_image_of_product(instance, filename):
    return '{}/{}'.format(instance.categorie, filename)

class ProductModel(models.Model):
    
    title = models.CharField(verbose_name = 'Titulo', max_length= 70)
    presentation = models.ImageField(verbose_name = 'Presentacion', upload_to = upload_image_of_product)
    categorie = models.CharField(verbose_name = 'Categoria', max_length=50, choices = categories)
    description = models.TextField()
    price = models.DecimalField(verbose_name = 'Precio', max_digits = 20, decimal_places = 2)
    date_register = models.DateTimeField(verbose_name = 'Fecha de registro', auto_now_add = True)
    date_updated = models.DateTimeField(verbose_name = 'Fecha de actualizacion', auto_now = True)

class Product(models.Model):
    model = models.OneToOneField(ProductModel , verbose_name = "Modelo de producto", on_delete = models.CASCADE)
    date_added = models.DateTimeField(verbose_name = 'Fecha de agregado', auto_now_add = True)

class Stock(models.Model):
    product = models.OneToOneField(Product, verbose_name = 'Almacen', on_delete = models.CASCADE)
    total = models.IntegerField()