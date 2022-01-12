from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from rest_framework import serializers

from users.models import Customer, Bussiness

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        required=True,
        style={'input_type': 'password', 'placeholder': 'Password'}
    )

    class Meta:
        model = get_user_model()
        fields = ['id', 'email', 'password',]

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super(UserSerializer, self).create(validated_data)

class CustomerSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=True)
    class Meta:
        model = Customer
        fields =  '__all__'

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = UserSerializer.create(UserSerializer(), validated_data=user_data)
        customer = Customer.objects.create(user=user, **validated_data)
        return customer


class BussinessSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=True)
    class Meta:
        model = Bussiness
        fields = '__all__'

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = UserSerializer.create(UserSerializer(), validated_data=user_data)
        bussiness = Bussiness.objects.create(user=user, **validated_data)
        return bussiness


class UserDisplaySerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['id', 'email', 'customer', 'bussiness']
        depth = 1
