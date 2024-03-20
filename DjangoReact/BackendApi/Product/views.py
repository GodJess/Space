from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK
from .models import ModelProduct, ModelRooms, Users
from .serializers import ProductSerializers, RoomsSerializers, RoomsSerializer
from django.conf import settings



# Create your views here.
def home(request):
    return render(request, 'home.html')

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
    

@api_view(['GET','POST'])   
def avtorizations(request):
    if request.method == 'POST':
        activeUser = request.session.get(settings.USER_SESSION, {})
        activeUser = []
        if len(activeUser) > 0:
             request.session.pop(settings.USER_SESSION, None)
             
        numberphone = request.data.get('phone')
        userpassword = request.data.get('password')
        print(numberphone)
        print(userpassword)
        user = Users.objects.filter(phone = numberphone, password = userpassword).first()
        if user:
            activeUser.append({
                'Name': user.name, 'Surname': user.surname, 'phone': user.phone, 'Mail': user.mail, 'password': user.password, 'Image': user.user_img.url
            })
            request.session[settings.USER_SESSION] = activeUser
            
            for el in activeUser:
                print(el['Name'], el['Surname'], el['phone'], el['Mail'])
            # return HTTP_200_OK
            return Response({'message': 'User successfully authenticated'}, status=200)
        
        else:
            # return HTTP_400_BAD_REQUEST
            return Response({'error': 'User not found or authentication failed'}, status=400)
            
    if request.method == 'GET':
        check(request)
        activeUser = request.session.get(settings.USER_SESSION, {})
        print(len(activeUser))
        data = { 'name': 'User', 
            'surname' : '', 
            'phone': '', 
            'mail': '', 
            'password': '', 
            'image': 'https://icon-icons.com/icons2/827/PNG/512/user_icon-icons.com_66546.png',
            'length' : len(activeUser)
            
        }
        for el in activeUser:
            print(el['Name'], el['Surname'], el['phone'], el['Mail'])
            data['name'] = el['Name']
            data['surname'] = el['Surname']
            data['phone'] = el['phone']
            data['mail'] = el['Mail']
            data['password'] = el['password']
            data['image'] = el['Image']
        return Response(data)
    
def check(request):
    activeUser = request.session.get(settings.USER_SESSION, {})
    print(len(activeUser))

@api_view(['POST'])
def registrations(request):
    if request.method == "POST":
        name =  request.data.get('name')
        surname =request.data.get('surname')
        phone =request.data.get('phone')
        mail =request.data.get('mail')
        password =request.data.get('password')
        repassword = request.data.get('repassword')
        
        users = Users.objects.filter(phone = phone).first()
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
                        user = Users(name = name, surname = surname, phone = phone, mail=mail, password = password)
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

