from django.db import models
from django.contrib.auth.models import User
from django.utils import timesince

# Create your models here.
class NewsCategoryModel(models.Model):
    id = models.AutoField(primary_key=True)
    category = models.CharField(max_length=200)
    update_date = models.DateTimeField(auto_now=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, models.SET_NULL, null=True)
    
    def __str__(self):
        return self.category + ' - Published: ' + str(self.pub_date) + ' - Updated : ' + str(self.update_date)
    
     

class NewsModel(models.Model):
    id = models.AutoField(primary_key=True)
    author = models.ForeignKey(User, models.SET_NULL, null=True)
    category = models.ForeignKey(NewsCategoryModel, models.SET_NULL, null=True)
    title = models.CharField(max_length=200, null=True)
    description  =  models.CharField( max_length=300, null=True)
    article = models.TextField()
    image = models.ImageField(null=True)
    permit = models.BooleanField(default=False)
    trending_news = models.BooleanField(default=False)
    featured_news = models.BooleanField(default=False)
    breaking_news = models.BooleanField(default=False)
    pub_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title + ' - Published: ' + str(self.pub_date) + ' - Updated : ' + str(self.update_date)
    
    @property
    def timesince(self):
        return timesince.timesince(self.pub_date)
    
    
class VideosMododel(models.Model):
    id = models.AutoField(primary_key=True)
    author = models.ForeignKey(User, models.SET_NULL, null=True)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=300)
    youtubr_link = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True)
    update_date =  models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title + ' - '+ str(self.pub_date)
    
    
    