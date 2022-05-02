from django.urls import path
from . import views

app_name = 'articles'

urlpatterns = [
    # path_name 이란 것을 설정해 줘야함
    path('', views.index, name='index')
]
