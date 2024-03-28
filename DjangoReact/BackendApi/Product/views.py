from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK
from .models import ModelProduct, ModelRooms, CustomUser
from .serializers import ProductSerializers, RoomsSerializers, UserSerializer
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required


# Create your views here.= 
def home(request):
    
    return render(request, 'home.html', {})

@api_view(['GET', 'POST'])
def product(request):
    if request.method == 'GET':
        product = ModelRooms.objects.all()
        serializers = RoomsSerializers(product, many = True, context={'request': request})
        return Response(serializers.data)
    if request.method == "POST":
        name = request.data.get('name')
        price = request.data.get('price')
        description = request.data.get('description')
        img = request.data.get('description')
        products = ModelRooms.objects.create(name = name, description = description, price = price, img = img)
        serializers = RoomsSerializers(products, many = False, context={'request': request})
        return Response(serializers.data)
        
@api_view(['GET', 'DELETE'])
def room(request, pk):
    if request.method == 'GET':
        room = ModelRooms.objects.get(id = pk)
        serializers = RoomsSerializers(room, many = False, context={'request': request})
        return Response(serializers.data)
    
@api_view(['GET'])
def auth(request):
    if request.method == 'GET':
        data = { 
                'id': None,
                'name': 'User', 
                'phone': '', 
                'mail': '', 
                'image': 'https://icon-icons.com/icons2/827/PNG/512/user_icon-icons.com_66546.png'
            }
        if request.user.is_authenticated:
            user = request.user
            print(user.username, user.email, user.phone)
            data['id'] = user.id
            data['name'] = user.username
            data['phone'] = user.phone
            data['mail'] = user.email
            data['image'] = 'http://127.0.0.1:8000/media/images/' + str(user.user_img)
           
        return Response(data)

@api_view(['POST'])
def avtorizations(request):
    numberphone = request.POST.get('phone')
    userpassword = request.POST.get('password')
    print(numberphone, userpassword)
    
    user = CustomUser.objects.filter(phone = numberphone).first()
    if user is not None:
        authenticated_user = authenticate(request, username = user.username, password = userpassword)
        if authenticated_user is not None:
            login(request, authenticated_user)
            print("Успешно авторизован")
            return Response({'message': 1}, status=200)
        else: 
            return Response({'message': 0}, status=400)
    return Response({'message': 0}, status=400)
    



@api_view(['POST'])
def registrations(request):
    if request.method == "POST":
        name =  request.data.get('name')
        surname =request.data.get('surname')
        phone =request.data.get('phone')
        mail =request.data.get('mail')
        password =request.data.get('password')
        repassword = request.data.get('repassword')
        
        users = CustomUser.objects.filter(phone = phone).first()
        print(name)
        print(surname)
        
        data = {
            'sucsess': '',
        }
        if users :
            data['sucsess'] = 'ПОльзователь с таким номером существует'
            print( data['sucsess'])
                
        else: 
            if len(str(phone)) == 11:
                if len(str(password)) >= 8:
                    if password == repassword:
                        user = CustomUser.objects.create_user(username=name, password=password, email = mail, phone=phone)
                        # user.is_staff = False
                        user.save()
                        data['sucsess'] = 'Пользователь успешно создан'
                        print(data['sucsess'] )
                    else:
                        data['sucsess'] = 'Пароли не совпадают'
                        print( data['sucsess'])
                else:
                    data['sucsess'] = 'Пароль должен быть длинее 8'
                    print( data['sucsess'])
            else:
                data['sucsess'] = 'не правильно указан номер'
                print( data['sucsess'])
        return Response(data)

