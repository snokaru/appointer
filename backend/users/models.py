from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class User(AbstractUser):
    USER_TYPES = (
        (1, 'user'),
        (2, 'bussiness'),
        (3, 'admin'),
    )

    email = models.EmailField("email", unique=True)
    type = models.PositiveSmallIntegerField(choices=USER_TYPES) 

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "password",]

