from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin as DjangoAdmin

from .forms import CustomUserChangeForm, CustomUserCreationForm

User = get_user_model()

class UserAdmin(DjangoAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = ['email', 'username',]

admin.site.register(User, UserAdmin)
