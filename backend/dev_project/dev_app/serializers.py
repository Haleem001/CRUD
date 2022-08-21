from pyexpat import model
from rest_framework import serializers
from .models import MaleCustomer


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = MaleCustomer
        fields = '__all__'
