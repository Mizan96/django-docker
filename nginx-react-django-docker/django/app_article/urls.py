from django.urls import path, include
from app_article import views

from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('articleapi', views.ArticlesAPI, basename='articleapi'),

urlpatterns = [
    path('', include(router.urls)),
    path('registration/', views.UserRegistrationAPI.as_view(), name='user-registration'),
    path('articles/', views.get_articles, name='all-article'),
    path('articles/<int:pk>/', views.get_article_detail, name='detail-article'),
    path('categories/', views.get_all_category, name='all-category'),
    path('categories/<str:category_name>/', views.get_news_category, name='specific-category'),
    path('videos/', views.get_videos, name='all-video'),
]


