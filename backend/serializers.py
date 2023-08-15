from rest_framework import serializers
from .models import Tgim

class TgimSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tgim
        fields = ['id', 'title', 'description']