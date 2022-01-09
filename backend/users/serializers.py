from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from rest_framework import serializers

User = get_user_model()

class CustomChoiceField(serializers.ChoiceField):

    def to_representation(self, data):
        if data not in self.choices.keys():
            self.fail('invalid_choice', input=data)
        else:
            return self.choices[data]

    def to_internal_value(self, data):
        for key, value in self.choices.items():
            if value == data:
                 return key
        self.fail('invalid_choice', input=data)


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        required=True,
        style={'input_type': 'password', 'placeholder': 'Password'}
    )

    class Meta:
        model = get_user_model()
        fields = ['id', 'email', 'password', ]

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super(UserSerializer, self).create(validated_data)



