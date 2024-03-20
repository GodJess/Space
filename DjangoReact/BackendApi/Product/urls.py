from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name = 'home'), 
    path('product/', views.product, name = 'product'),
    path('room/<str:pk>/', views.room, name = 'room'),
    path('avtorizations/', views.avtorizations, name = 'avtoriz' ),
    path('registrations/', views.registrations, name = 'regist' ),
] 