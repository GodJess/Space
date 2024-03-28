from django.contrib.auth.decorators import login_required
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name = 'home'), 
    path('product/', views.product, name = 'product'),
    path('room/<str:pk>/', views.room, name = 'room'),
    path('avtorizations/', views.avtorizations, name = 'avtoriz' ),
    path('auth/', views.auth, name ='auth'),
    # path('auth/', login_required(auth), name='auth'),
    path('registrations/', views.registrations, name = 'regist' ),
] 