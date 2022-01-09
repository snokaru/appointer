from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class User(AbstractUser):
    class UserType(models.IntegerChoices):
        USER = 1, 'user'
        BUSSINESS = 2, 'bussiness'

    email = models.EmailField("email", unique=True)
    type = models.PositiveSmallIntegerField(choices=UserType.choices) 

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "password",]

