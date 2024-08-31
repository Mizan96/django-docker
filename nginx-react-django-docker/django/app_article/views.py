from rest_framework.decorators import api_view
from rest_framework.response import Response
from app_article.models import NewsCategoryModel, VideosMododel, NewsModel
from app_article.serializers import ArticlesSerializer, CategorySerializer, VideosSerializer, UserSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from django.contrib.auth.models import User

from rest_framework.viewsets import ModelViewSet

from rest_framework.generics import CreateAPIView

# Create your views here.


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['name'] = user.name
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
    
class UserRegistrationAPI(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ArticlesAPI(ModelViewSet):
    queryset = NewsModel.objects.all()
    serializer_class = ArticlesSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


# get all articles
@api_view(['GET'])
def get_articles(request):
    articles = NewsModel.objects.all()
    serializer = ArticlesSerializer( articles, many=True)
    return Response(serializer.data)

# get article details
@api_view(['GET'])
def get_article_detail(request, pk):
    articles = NewsModel.objects.get(id=pk)
    print('Category: ',articles.author.first_name)
    serializer = ArticlesSerializer( articles, many=False)
    return Response(serializer.data)

# get all artticle category
@api_view(['get'])
def get_all_category(request):
    categories = NewsCategoryModel.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

# category wise access in the frontend
@api_view(['GET'])
def get_news_category(request, category_name):
    category = NewsCategoryModel.objects.get(category=category_name)
    articles = NewsModel.objects.filter(category=category.id)
    serializer = ArticlesSerializer(articles, many=True)
    return Response(serializer.data)
 
# get all videos   
@api_view(['GET'])
def get_videos(request):
    videos = VideosMododel.objects.all()
    serializer = VideosSerializer(videos, many=True)
    return Response(serializer.data)