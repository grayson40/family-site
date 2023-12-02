from django.db import models
from django.contrib.auth.models import User


class UserContent(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
