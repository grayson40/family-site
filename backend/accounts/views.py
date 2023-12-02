from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from .serializers import UserSerializer, UserContentSerializer
from .models import UserContent


@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        username = request.data.get('username', None)
        password = request.data.get('password', None)
        user = authenticate(request, username=username, password=password)

        if user is not None:
            serializer = UserSerializer(user)
            token, created = Token.objects.get_or_create(user=user)
            return Response({'user': {**serializer.data, 'token': token.key}})
        else:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
@csrf_exempt
def register(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')

        if User.objects.filter(username=username).exists():
            return Response({'error': 'User already exists'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(username=username, password=password)
        token = Token.objects.create(user=user)
        return Response({'message': 'User registered successfully', 'user': {'username': user.username, 'token': token.key}}, status=status.HTTP_201_CREATED)


class UserContentView(generics.ListCreateAPIView):
    queryset = UserContent.objects.all()
    serializer_class = UserContentSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
