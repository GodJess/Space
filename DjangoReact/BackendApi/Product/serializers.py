from rest_framework import serializers
from .models import ModelProduct, ModelRooms, CustomUser

class ProductSerializers(serializers.ModelSerializer):
    class Meta:
        model = ModelProduct
        fields = '__all__'
        
class RoomsSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = ModelRooms
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CustomUser
        fields = '__all__'




















# class UserSerializers(serializers.ModelSerializer):
#     class Meta:
#         model = Users
#         field = '__all__'

        
# class RoomsSerializer(serializers.ModelSerializer):
    
#     img1 = serializers.SerializerMethodField()
#     img2 = serializers.SerializerMethodField()
#     img3 = serializers.SerializerMethodField()
    
#     class Meta:
#         model = ModelRooms
#         fields = '__all__'
        
#     def get_img1(self, obj):
#         return self.context['request'].build_absolute_uri(obj.img1.url)

#     def get_img2(self, obj):
#         return self.context['request'].build_absolute_uri(obj.img2.url)

#     def get_img3(self, obj):
#         return self.context['request'].build_absolute_uri(obj.img3.url)
