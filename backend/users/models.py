from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class User(AbstractUser):
    USER_TYPES = (
        (1, 'user'),
        (2, 'bussiness'),
        (3, 'admin'),
    )
    class UserType(models.IntegerChoices):
        USER = 1, 'user'
        BUSSINESS = 2, 'bussiness'
        ADMIN = 3, 'admin'

    email = models.EmailField("email", unique=True)
    type = models.PositiveSmallIntegerField(choices=UserType.choices) 

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "password",]

