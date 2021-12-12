from django.urls import path 
from .views import UserList, UserDetail, CurrentUser

urlpatterns = [
    path('', UserList.as_view()),
    path('<int:pk>/', UserDetail.as_view()),
    path('me/', CurrentUser.as_view()),
]

