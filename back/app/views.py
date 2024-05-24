from django.shortcuts import render
import json
from django.http import JsonResponse
from rest_framework.decorators import api_view


# Create your views here.

@api_view(['POST'])
def connexion(request):
    data = json.loads(request.body)
    username = data.get('username')
    password = data.get('password')
    #vous remplacez ceci par une véritable logique de connexion
    if username == "ryad" and password == "azerty" :
        return JsonResponse({
            "code": "LOGIN_VALID",
            "message": "vous vous êtes bien connecté!",
            "userData" : "WIP"
        })
    else:
        return JsonResponse({
            "code": "LOGIN_FAILED",
            "message": "échec de connexion username ou mdp invalide!"
        })
    
@api_view(['GET']) 
def get_vip_data(request):
    return JsonResponse({
        'code': 'SUCCESS',
        'message': "donnée vip envoyé",
        "vipData" : [
            {"name":"Mr.Pinguin", "value":9000},
            {"name":"DR.Freez", "value":4000},
            {"name":"JOKER", "value":90000},
        ]
    })

@api_view(['POST'])
def deconnexion(request):
    return JsonResponse({
        
            'code' : 'SUCCESS',
            'message' : 'déconnexion réussite'
        
    })