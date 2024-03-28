from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

# Create your models here.
class ModelProduct(models.Model):
    name = models.CharField("Название товара", max_length = 200)
    description = models.TextField("Описание товара", max_length = 400)
    price = models.CharField("Цена товара", max_length = 200)
    img = models.ImageField(upload_to = 'images/')
    
    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "Товары"
        verbose_name_plural = "Товар"
        
class ModelRooms(models.Model):
    name = models.CharField("Название квартиры", max_length = 200)
    price = models.CharField("Цена за ночь", max_length = 6)
    city = models.CharField("Город", max_length = 200)
    numberOfRooms = models.CharField("Номер квартиры", max_length = 4)
    typeOfHouse = models.CharField("Тип квартиры", max_length = 200)
    countRooms = models.CharField("Тип квартиры", max_length = 2)
    description = models.TextField("Описание квартиры", max_length = 500)
    img1 = models.ImageField(upload_to='images/',  blank=True, null=True)
    img2 = models.ImageField(upload_to='images/',  blank=True, null=True)
    img3 = models.ImageField(upload_to='images/',  blank=True, null=True)
    
    
    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "Квартиры"
        verbose_name_plural = "Квартира"
    
class Users(models.Model):
    name = models.CharField('Name', max_length = 100)
    surname = models.CharField('Surname', max_length = 100)
    phone = models.CharField('Phone', max_length = 100)
    mail = models.CharField('Mail', max_length = 100)
    password = models.CharField('Password', max_length = 100)
    user_img = models.ImageField(upload_to='images/', blank=True, null = True,  default='default.png')
    
    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
    
class CustomUser(AbstractUser):
    phone = models.CharField('phone', max_length = 12 )
    user_img = models.ImageField(upload_to='images/', blank=True, null = True,  default='default.png')
    
    
    groups = models.ManyToManyField(Group, related_name='customuser_groups')  
    user_permissions = models.ManyToManyField(Permission, related_name='customuser_permissions')  

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'