from django.contrib import admin
from Product.models import ModelProduct, ModelRooms, Users

admin.site.register(ModelProduct)
admin.site.register(ModelRooms)
admin.site.register(Users)

# Register your models here.
