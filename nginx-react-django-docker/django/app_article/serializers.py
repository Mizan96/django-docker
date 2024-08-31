from rest_framework import serializers
from app_article.models import NewsModel, NewsCategoryModel, VideosMododel
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'username', 'password']
        def create(self, validated_data):
            user = User(
                first_name=validated_data['first_name'],
                last_name=validated_data['last_name'],
                email=validated_data['email'],
                username=validated_data['username']
            )
            user.set_password((validated_data['password']))
            user.save()
            return user
        

class ArticlesSerializer(serializers.ModelSerializer):
       
    class Meta:
        model = NewsModel
        fields = '__all__'

        
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsCategoryModel
        fields = '__all__' 
        
        
class VideosSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideosMododel
        fields = '__all__' 
        