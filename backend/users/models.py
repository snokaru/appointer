from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class User(AbstractUser):
    email = models.EmailField("email", unique=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "password",]
