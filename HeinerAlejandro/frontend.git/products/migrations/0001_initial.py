# Generated by Django 2.1.4 on 2019-04-14 22:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_added', models.DateTimeField(auto_now_add=True, verbose_name='Fecha de agregado')),
            ],
        ),
        migrations.CreateModel(
            name='ProductModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=70, verbose_name='Titulo')),
                ('categorie', models.CharField(max_length=50, verbose_name='Categoria')),
                ('description', models.CharField(max_length=50, verbose_name='Descripcion')),
                ('price', models.DecimalField(decimal_places=2, max_digits=20, verbose_name='Precio')),
                ('date_register', models.DateTimeField(auto_now_add=True, verbose_name='Fecha de registro')),
                ('date_updated', models.DateTimeField(auto_now=True, verbose_name='Fecha de actualizacion')),
            ],
        ),
        migrations.CreateModel(
            name='Stock',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total', models.IntegerField()),
                ('product', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='products.Product', verbose_name='Almacen')),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='model',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='products.ProductModel', verbose_name='Modelo de producto'),
        ),
    ]
