from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super(UserSerializer, self).create(validated_data)

    class Meta:
        model = get_user_model()
        fields = ['id', 'email', 'password',]

