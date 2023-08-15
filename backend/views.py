from django.http import JsonResponse
from .models import Tgim
from .serializers import TgimSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET', 'POST'])
def tgim_list(request, format=None):

    #GET all the tgim messages
    #serialize them
    #return json

    if request.method == 'GET':
        tgims = Tgim.objects.all()
        serializer = TgimSerializer(tgims, many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = TgimSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
@api_view(['GET', 'PUT', 'DELETE'])
def tgim_detail(request, id, format=None):

    try:
        tgim = Tgim.objects.get(pk=id)
    except Tgim.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = TgimSerializer(tgim)
        return Response(serializer.data)
    
    elif request.method == "PUT":
        serializer = TgimSerializer(tgim, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "DELETE":
        tgim.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
