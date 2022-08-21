from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.response import Response
from .serializers import CustomerSerializer
from .models import MaleCustomer


class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)


@csrf_exempt
def male_list(request):
    return models_list(request, MaleCustomer, CustomerSerializer)


@csrf_exempt
def models_list(request, Model_class, Serializer_class):
    if request.method == 'GET':
        items = Model_class.objects.all()
        serializer = Serializer_class(items, many=True)
        data = serializer.data
        render = JSONRenderer().render(data=data)
        return HttpResponse(render)

    elif request.method == 'POST':
        item = JSONParser().parse(request)
        serializer = Serializer_class(data=item)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return JSONResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def male_item(request, pk):
    return item_list(request, pk, MaleCustomer, CustomerSerializer)


@csrf_exempt
def item_list(request, pk, Model_class, Serializer_class):
    try:
        item = Model_class.objects.get(pk=pk)
    except Model_class.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = Serializer_class(item)
        return JSONResponse(serializer.data)

    elif request.method == 'PUT':
        item_data = JSONParser().parse(request)
        serializer = Serializer_class(item, data=item_data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data)
        else:
            return JSONResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        item.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
