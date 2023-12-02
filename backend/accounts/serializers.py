from django.contrib.auth.models import User
from rest_framework import serializers
from .models import UserContent


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


class UserContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserContent
        fields = ['id', 'user', 'content']

    def create(self, validated_data):
        user = validated_data.pop('user', None)
        return UserContent.objects.create(user=user, **validated_data)
