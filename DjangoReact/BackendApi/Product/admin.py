from django.contrib import admin
from Product.models import ModelProduct, ModelRooms, Users, CustomUser

admin.site.register(ModelProduct)
admin.site.register(ModelRooms)
admin.site.register(Users)
admin.site.register(CustomUser)

# Register your models here.
