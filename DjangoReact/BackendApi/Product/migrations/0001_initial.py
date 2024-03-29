# Generated by Django 4.2.1 on 2024-02-26 12:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ModelProduct',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, verbose_name='Название товара')),
                ('description', models.TextField(max_length=400, verbose_name='Описание товара')),
                ('price', models.CharField(max_length=200, verbose_name='Цена товара')),
                ('img', models.ImageField(upload_to='images/')),
            ],
            options={
                'verbose_name': 'Товары',
                'verbose_name_plural': 'Товар',
            },
        ),
    ]
